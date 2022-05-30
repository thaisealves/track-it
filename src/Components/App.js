import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Header from "./Header"
import LoginPage from "./LoginPage"
import SignUpPage from "./SingUpPage"
import Habits from "./Habits"
import TodayPage from "./TodayPage"
import HistoricPage from "./HistoricPage"
import Menu from "./Menu"
import GlobalStyle from "./GlobalStyle"
import UserContext from "./UserContext"
import HabitsContext from "./HabitsContext"


export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [token, setToken] = useState("")
    const [habitCtt, setHabitCtt] = useState("")
    const [noHabit, setNoHabit] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!")
    const [newHabit, setNewHabit] = useState("")
    const [selectedDays, setSelectedDays] = useState([])
    const [open, setOpen] = useState(false)
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [percentage, setPercentage] = useState(0)

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword, name, setName, image, setImage, token, setToken, percentage, setPercentage }}>
            <HabitsContext.Provider value={{ habitCtt, setHabitCtt, noHabit, setNoHabit, newHabit, setNewHabit, selectedDays, setSelectedDays, week, open, setOpen }}>
                <BrowserRouter>
                    <GlobalStyle />
                    <Header />
                    <Menu />

                    <Routes>
                        <Route path={"/"} element={<LoginPage />} />
                        <Route path={"/cadastro"} element={<SignUpPage />} />
                        <Route path={"/habitos"} element={<Habits />} />
                        <Route path={"/hoje"} element={<TodayPage />} />
                        <Route path={"/historico"} element={<HistoricPage />} />
                    </Routes>
                </BrowserRouter>
            </HabitsContext.Provider>
        </UserContext.Provider>
    )
}

