import { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import HabitsContext from "./HabitsContext"
import UserContext from "./UserContext"
import HandleDays from "./HandleDays"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function CreateBoard() {
    const { week, selectedDays, setNewHabit, setHabitCtt, open, setOpen, habitCtt, newHabit } = useContext(HabitsContext)
    let token = localStorage.getItem("token")
    const navigate = useNavigate();
    if (!token) {
        navigate("/")
    }
    console.log(selectedDays)

    function HabitBoard() {
        return (
            <CreatingHabit onSubmit={handleSubmit}>
                <input type="text" placeholder="nome do hábito" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} required />
                <DaysButtons>
                    {week.map((value, ind) => <HandleDays key={ind} ind={ind} value={value} />)}
                </DaysButtons >
                <FinishHabit>
                    <p onClick={() => setOpen(false)}>Cancelar</p>
                    <button type="submit">Salvar</button>
                </FinishHabit>
            </CreatingHabit>)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(selectedDays)
        let body = {
            name: newHabit,
            days: selectedDays
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        // const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        // promise
        //     .then(() => alert("foi"))
        //     .catch(err => console.log(err.data.message))


    }

    return (<>
        {open && <HabitBoard />}
    </>)


}


//when clicking the + button, this opens

const CreatingHabit = styled.form`
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 10px;
input{ 
    height: 45px;
    width: 90%;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin: 18px 0 4px;
    &::placeholder{
        color: #DBDBDB;
    }
}
`
const DaysButtons = styled.div`
display: flex;
width:90%;
`
const FinishHabit = styled.div`
display: flex;
width: 90%;
justify-content: flex-end;
align-items: center;
font-size: 16px;
margin-top: 40px;
p{
    color: #52B6FF;
    margin-right: 6px;
}
button{
    font-size: 16px;
    font-family: inherit;
    background-color: #52B6FF;
    color: #FFFFFF;
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
}
`