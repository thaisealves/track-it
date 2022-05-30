import { ThreeDots } from "react-loader-spinner"
import { useContext, useState } from "react"
import styled from "styled-components"
import HabitsContext from "./HabitsContext"
import HandleDays from "./HandleDays"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function CreateBoard() {
    const { week, selectedDays, setSelectedDays, setNewHabit, setOpen, newHabit, setReRender, reRender } = useContext(HabitsContext)
    const [disable, setDisable] = useState(false)
    const [buttonCtt, setButtonCtt] = useState("Salvar")
    let token = localStorage.getItem("token")
    const navigate = useNavigate();
    if (!token) {
        navigate("/")
    }
    console.log(selectedDays)
    function saving() {
        setReRender(!reRender);
        setNewHabit("")
        setSelectedDays([])
        setOpen(false)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setButtonCtt(<data.Component {...data.props} />)
        setDisable(true)
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
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise
            .then(saving)
            .catch(err => { alert(`Error ${err.response.status}: Não foi possível criar seu hábito`); setButtonCtt("Salvar"); setDisable(false); })


    }

    return (
        <CreatingHabit onSubmit={handleSubmit}>
            <Disabled disabled={disable}>
                <div>
                    <input type="text" placeholder="nome do hábito" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} required disabled={disable} />
                    <DaysButtons >
                        {week.map((value, ind) => <HandleDays key={ind} ind={ind} value={value} />)}
                    </DaysButtons >
                </div>
                <FinishHabit>
                    <p onClick={() => setOpen(false)}>Cancelar</p>
                    <button type="submit">{buttonCtt}</button>
                </FinishHabit>
            </Disabled>
        </CreatingHabit>
    )


}

function Disabled({ disabled, children }) {
    if (disabled) {
        return (
            <div style={{ opacity: 0.5 }} disabled>
                {children}
            </div>
        );
    }
    return <>{children}</>;
}

//when clicking the + button, this opens

const CreatingHabit = styled.form`
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
align-items: flex-start;

background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 10px;
box-sizing: border-box;
padding: 0 20px;
input{ 
    height: 45px;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin: 18px 0 4px;
    &::placeholder{
        color: #DBDBDB;
    }
    &[type="text"][disabled]{
        background-color: #F2F2F2;
    }
}
div{
    box-sizing: border-box;
    width: 100%;
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
    display: flex;
    justify-content: center;    
    align-items: center;
}
`
//loading 
const data = {
    Component: ThreeDots,
    props: {
        color: "#FFFFFF",
        height: 50,
        width: 50
    },
    name: "Three Dots"
}