import { BrowserRouter, Routes, Route} from "react-router-dom"
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


export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [token, setToken] = useState("")


    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword, name, setName, image, setImage, token, setToken }}>
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
        </UserContext.Provider>
    )
}

