import axios from "axios";
import styled from "styled-components"
import { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import HabitsContext from "./HabitsContext";
import { useNavigate } from "react-router-dom";
export default function ListHabit() {
    const { week, setNoHabit } = useContext(HabitsContext)
    const [list, setList] = useState([])
    const [reRender, setReRender] = useState(false)
    let token = localStorage.getItem("token")
    const navigate = useNavigate();
    if (!token) {
        navigate("/");
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then((response) => { setList(response.data); if (response.data.length !== 0) { setNoHabit("") } else { setNoHabit("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!") } })
        promise.catch((err) => console.log(err))
    }, [reRender])


    return (
        <>
            {list.map((value, ind) => <ShowHabit key={ind} ><HandleList name={value.name} days={value.days} ind={ind} id={value.id} /></ShowHabit>)}
        </>)

    function HandleList({ name, days, id }) {

        return (
            <>
                {name}
                <Icon onClick={() => deleting(id)}><ion-icon name="trash-outline"></ion-icon></Icon>
                <WeekDays>
                    {week.map((value, ind) => <HandingButtons key={ind} ind={ind} value={value} days={days} />)}
                </WeekDays>
            </>
        )
    }


    function deleting(id) {
        if (window.confirm("Tem certeza que deseja apagar esse hábito?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then(setReRender(!reRender))
        }
    }
}


function HandingButtons({ ind, days, value }) {
    const [colorBtn, setColorBtn] = useState("#FFFFFF");
    const [colorLt, setColorLt] = useState('#DBDBDB')
    useEffect(() => {
        if (days.includes(ind)) {
            setColorBtn("#CFCFCF");
            setColorLt("#FFFFFF");
        }
        else {
            setColorBtn("#FFFFFF");
            setColorLt("#DBDBDB");

        }
    }, [])
    return (
        <DaySelected colorBtn={colorBtn} colorLt={colorLt}>
            {value}
        </DaySelected>
    )
}



const DaySelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: ${props => props.colorLt};
    background-color: ${props => props.colorBtn};
    font-size: 20px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-right: 5px;
       
`
const WeekDays = styled.div`
margin-top: 10px;
display: flex;
`
const ShowHabit = styled.div`
box-sizing: border-box;
background-color: #FFFFFF;
border-radius: 5px;
padding: 10px;
margin-bottom: 20px;
position: relative;
`
const Icon = styled.div` 
position: absolute;
top: 5px;
right: 10px;
`