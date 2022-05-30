import { useLocation, Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './UserContext';
import styled from 'styled-components'
export default function Header() {
    const { image } = useContext(UserContext);
    const location = useLocation();

    if (location.pathname === "/" || location.pathname === "/cadastro") {

        return (null)
    }
    return (
        <Container>
            <h1>
                <Link to={"/"}>TrackIt</Link>
            </h1>
            <img src={image} />
        </Container>)
}

const Container = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 1;

width: 100%;
height: 70px;
position: fixed;
top: 0;
left: 0;
padding: 0 10px;

background-color: #126BA5;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.267);

h1{
    font-family: 'Playball', cursive;
    font-size: 39px;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
}
a{
    text-decoration: none;
    color: #FFFFFF;

}
`