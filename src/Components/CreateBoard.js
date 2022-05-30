import { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import HabitsContext from "./HabitsContext"
import UserContext from "./UserContext"
import HandleDays from "./HandleDays"
import axios from "axios"
export default function CreateBoard() {
    const { week, selectedDays, setNewHabit, setHabitCtt, open, habitCtt, newHabit } = useContext(HabitsContext)
    const { token } = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault();

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
    useEffect(() => {
        if (open) {
            setHabitCtt(

                <CreatingHabit onSubmit={handleSubmit}>
                    <input type="text" placeholder="nome do hábito" onChange={(e) => setNewHabit(e.target.value)} required />
                    <DaysButtons>
                        {week.map((value, ind) => <HandleDays key={ind} ind={ind} value={value} />)}
                    </DaysButtons >
                    <FinishHabit>
                        <p>Cancelar</p>
                        <button type="submit">Salvar</button>
                    </FinishHabit>
                </CreatingHabit>
            )
        }

    }, [open])

    return (<>
        {habitCtt}
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