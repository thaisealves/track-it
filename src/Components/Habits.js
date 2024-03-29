import styled from "styled-components"
import { useContext } from "react";
import HabitsContext from "./HabitsContext";
import CreateBoard from "./CreateBoard";
import ListHabit from "./ListHabit";
import { useNavigate } from "react-router-dom";
export default function Habits() {
    const { noHabit, setOpen, open } = useContext(HabitsContext);
    let token = localStorage.getItem("token")
    const navigate = useNavigate();
    if (!token) {
        navigate("/")
    }

    return (
        <Container>
            <Top>
                <h1>Meus Hábitos</h1>
                <button onClick={() => setOpen(true)}>+</button>
            </Top>
            <UserHabits>
                {open && <CreateBoard />}
                {<ListHabit />}
                {noHabit}
            </UserHabits>
        </Container>
    )

}

const Container = styled.div`
    margin: 100px 20px;
    h1{
        color: #126BA5;
        font-size: 23px;
    }
`
const Top = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
   h1{
        color: #126BA5;
        font-size: 23px;
    }
    button{
        font-size: 28px;
        color: #FFFFFF;
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border:none;
    } 
`
const UserHabits = styled.div`
    color: #666666;
    font-size: 18px;
`


