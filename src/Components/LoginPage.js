import React, { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import logo from "../image/logo.png"
import UserContext from "./UserContext"

export default function LoginPage() {
    const { email, setEmail, password, setPassword, setToken, setImage } = useContext(UserContext);
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false)
    const [buttonCtt, setButtonCtt] = useState("Entrar")

    function signInHandler(event) {
        event.preventDefault();
        setButtonCtt(<data.Component {...data.props} />)
        setDisable(true)

        let body = {
            email,
            password
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then((resp) => { setToken(resp.data.token); setImage(resp.data.image); navigate("/hoje"); setDisable(false) })
        promise.catch(err => { alert(`Error ${err.response.status}: Houve algum erro no seu login`); setDisable(false); setButtonCtt("Entrar"); })

    }
    return (
        <Container>
            <img src={logo} alt="Logo TrackIt" />

            <Forms onSubmit={signInHandler}>
                <Disabled disabled={disable}>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={disable}/>
                    <input type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={disable}/>
                    <button type="submit">{buttonCtt}</button>
                </Disabled>
            </Forms>
            <Linked to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Linked>

        </Container>)
}
// putting the input and the button on disable until it waits for the response 
function Disabled({ disabled, children }) {
    if (disabled) {
        return (
            <div style={{ opacity: 0.5 }} disabled>
                {children}
            </div>
        );
    }

    return <React.Fragment>{children}</React.Fragment>;
}



//the loading style goes here
const data = {
    Component: ThreeDots,
    props: {
        color: "#FFFFFF",
        height: 50,
        width: 50
    },
    name: "Ball Triangle"
}
const Container = styled.div`
height:100vh;
width: 100%;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Forms = styled.form`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    margin-bottom: 6px;
    &::placeholder{
        font-family: 'Lexend Deca', sans-serif; 
        color: #DBDBDB;

    }  
    &[type="text"][disabled]{
        background-color: #F2F2F2;
    }
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 100%;
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
