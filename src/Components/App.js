import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState} from 'react'
import Header from "../Components/Header"
import LoginPage from "../Components/LoginPage"
import SignUpPage from "../Components/SingUpPage"
import Habits from "../Components/Habits"
import TodayPage from "../Components/TodayPage"
import HistoricPage from "../Components/HistoricPage"
import GlobalStyle from "./GlobalStyle"
import UserContext from "./UserContext"


export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    return (
        <UserContext.Provider value={{email, setEmail, password, setPassword, name, setName, image, setImage}}>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
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