import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { CircularProgressbar } from "react-circular-progressbar"
import { useContext } from 'react'
import UserContext from './UserContext'
export default function Menu() {
    const location = useLocation();
    const { percentage } = useContext(UserContext)

    if (location.pathname === "/" || location.pathname === "/cadastro") {

        return (null)
    }
    return (
        <Container>
            <Linked to={"/habitos"}>Hábitos</Linked>
            <Link to={"/hoje"}>
                <div>
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={{
                            background: { fill: "#3e98c7" },
                            path: {
                                strokeLinecap: 'round',
                                stroke: "#FFFFFF"
                            },
                            text: {
                                fill: "#fff",
                                transform: "translate(-18px,6px)"
                            },
                            trail: {
                                stroke: 'transparent'
                            }

                        }}
                    />
                </div>
            </Link>
            <Linked to={"/historico"}>Histórico</Linked>

        </Container>)
}

const Container = styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
bottom: 0;
left: 0;
height: 70px;
width: 100%;
background-color: #FFFFFF;
z-index: 1;

div{
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
   
    bottom: 10px;
    width: 91px;
    height: 91px;
  
   text{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
`
const Linked = styled(Link)`
color: #52B6FF;
text-decoration: none;
`