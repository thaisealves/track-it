import { useLocation } from 'react-router-dom'
export default function Header() {

    const location = useLocation();
    
    if (location.pathname === "/" || location.pathname === "/cadastro") {

        return (null)
    }
    return (
        <h1>
            sou o header
        </h1>)
}