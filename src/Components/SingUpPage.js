import {useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "../image/logo.png"
import UserContext from "./UserContext"


export default function SignUpPage() {
    const {email, setEmail, password, setPassword, name, setName, image, setImage} = useContext(UserContext);

    const navigate = useNavigate()
    function signUpHandler(event) {
        event.preventDefault();

        let body = {
            email,
            name,
            image,
            password
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        promise.then(() => navigate("/"))
        promise.catch(err => console.log(err))
    }
    return (
        <Container>
            <img src={logo} alt="Logo TrackIt" />

            <Forms onSubmit={signUpHandler}>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </Forms>
            <Linked to={"/"}>Já tem uma conta? Faça login!</Linked>

        </Container>)
}

const Container = styled.div`
width: 100%;
height: 500px;
margin-top: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Forms = styled.form`
display: flex;
flex-direction: column;
input{
    border-radius: 5px;
    height: 45px;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    margin-bottom: 6px;
    &::placeholder{
        font-family: 'Lexend Deca', sans-serif; 
        color: #DBDBDB;

    }
}
button{
    border-radius: 5px;
    border: none;
    height: 45px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif; 
    font-size: 22px;
}
`
const Linked = styled(Link)`
    color:#52B6FF;
    font-size: 14px;
`
