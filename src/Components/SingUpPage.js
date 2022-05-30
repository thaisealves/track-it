import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import axios from "axios"
import logo from "../image/logo.png"
import UserContext from "./UserContext"


export default function SignUpPage() {
    const { email, setEmail, password, setPassword, name, setName, image, setImage } = useContext(UserContext);
    const [disable, setDisable] = useState(false)
    const [buttonCtt, setButtonCtt] = useState("Cadastrar")
    const navigate = useNavigate()
    function signUpHandler(event) {
        event.preventDefault();
        setButtonCtt(<data.Component {...data.props} />)
        setDisable(true)


        let body = {
            email,
            name,
            image,
            password
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        promise.then(() => { navigate("/"); setDisable(false) })
        promise.catch(err => { alert(`Error ${err.response.status}: Houve algum erro no seu cadastro`); setDisable(false); setButtonCtt("Cadastrar"); })
    }
    return (
        <Container>
            <img src={logo} alt="Logo TrackIt" />

            <Forms onSubmit={signUpHandler}>
                <Disabled disabled={disable}>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={disable}/>
                    <input type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={disable}/>
                    <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} required disabled={disable}/>
                    <input type="text" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} required disabled={disable}/>
                    <button type="submit">{buttonCtt}</button>
                </Disabled>
            </Forms>
            <Linked to={"/"}>Já tem uma conta? Faça login!</Linked>

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
width: 100%;
height:100vh;
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
