import styled from "styled-components"
export default function HistoricPage() {
    return (
        <Container>
            <h1>
                Histórico
            </h1>
            <h2>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </h2>
        </Container>)
}
const Container = styled.div`
margin: 100px 20px;
h1{
    color: #126BA5;
    font-size: 23px;
}
h2{
    margin-top: 18px;
    color: #666666;
}
`