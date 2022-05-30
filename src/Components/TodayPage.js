import dayjs from "dayjs";
import styled from "styled-components"
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import UserContext from "./UserContext";
import "dayjs/locale/pt-br";
import updateLocale from 'dayjs/plugin/updateLocale'
export default function TodayPage() {
    dayjs.extend(updateLocale)
    dayjs.updateLocale('pt-br', {
        weekdaysShort: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    })
    const now = dayjs()
    const [status, setStatus] = useState("Nenhum hábito concluído ainda")
    const [colorStatus, setColorStatus] = useState("#BABABA")
    const [listToday, setListToday] = useState([])
    const { token, setPercentage, percentage } = useContext(UserContext)
    const [control, setControl] = useState(false)
    const [divFor, setDivFor] = useState(1)
    let habitsDone = 0;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise
            .then((res) => { setListToday(res.data); setDivFor(res.data.length) })
    }, [control])
    function ListingToday() {

        return (
            <>
                {listToday.map((value, ind) => <ShowHabit key={ind} ><HandleList name={value.name} done={value.done} currentSequence={value.currentSequence} highestSequence={value.highestSequence} ind={ind} id={value.id} /></ShowHabit>)}
            </>
        )
    }
    function HandleList({ name, highestSequence, currentSequence, done, id }) {
        const [colorIcon, setColorIcon] = useState("#EBEBEB")
        const [colorCurrent, setColorCurrent] = useState("#666666")
        const [colorRecord, setColorRecord] = useState("#666666")
        let currentDays;
        let recordDays;
        useEffect(() => {
            if (done) {
                setColorIcon("#8FC549")
                habitsDone++
                setPercentage((habitsDone / divFor) * 100)
                setStatus(`${percentage}% dos hábitos concluídos`)
                setColorStatus("#8FC549")
                setColorCurrent("#8FC549")
                if (currentSequence === highestSequence) setColorRecord("#8FC549")
            }
            else {
                setColorIcon("#EBEBEB")
                setPercentage((habitsDone / divFor) * 100)
                setStatus(`${percentage.toFixed(0)}% dos hábitos concluídos`)
                setColorCurrent("#666666")
                setColorRecord("#666666")
            }
            if (habitsDone === 0) setColorStatus("#BABABA")
        }, [])
        console.log(percentage)
        currentSequence === 1 ? currentDays = "dia" : currentDays = "dias"
        highestSequence === 1 ? recordDays = "dia" : recordDays = "dias"

        return (
            <>
                <WholeHabit>
                    <h3> {name} </h3><br />
                    <h5><span>Sequência atual: </span><Current color={colorCurrent}>{currentSequence} {currentDays}</Current><br /></h5>
                    <h5> <span>Seu recorde: </span><Record color={colorRecord}>{highestSequence} {recordDays}</Record></h5>
                </WholeHabit>
                <Icon onClick={() => checkAsDone((id), colorIcon)} colorIcon={colorIcon}><ion-icon name="checkbox"></ion-icon></Icon>

            </>
        )
    }
    function checkAsDone(id, color) {
        if (color === "#EBEBEB") {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            promise
                .then(setControl(!control))
                .catch((err) => console.log(err))
        }
        else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            promise
                .then(setControl(!control))
                .catch((err) => console.log(err))
        }
    }


    return (
        <Container>
            <h1>{now.locale("pt-br").format("ddd, DD/MM")}</h1>
            <Status colorStatus={colorStatus}>{status}</Status>
            <ListingToday />
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
const Status = styled.h6`
margin-top: 4px;
color: ${props => props.colorStatus};
`

const ShowHabit = styled.div`
display: flex;
justify-content: space-between;
box-sizing: border-box;
background-color: #FFFFFF;
border-radius: 5px;
padding:  8px;
margin: 10px 0;
color: #666666;
`
const WholeHabit = styled.div`
background-color: #FFFFFF;
h3{
    font-size: 20px;
}
h5{
    font-size: 13px;
}
`
const Current = styled.span`
color:${props => props.color};
`
const Record = styled.span`
color:${props => props.color};
`
const Icon = styled.div`
    ion-icon{
        width: 70px;
        height: 70px;
        color: ${props => props.colorIcon};
    }

`