import styled from 'styled-components';
import HabitsContext from './HabitsContext';
import { useEffect, useState, useContext } from 'react';
export default function HandleDays({ ind, value }) {
    const [colorBtn, setColorBtn] = useState("#FFFFFF");
    const [colorLt, setColorLt] = useState('#DBDBDB')
    const [isSelected, setIsSelected] = useState(false);
    const { selectedDays, setSelectedDays } = useContext(HabitsContext)
    
    useEffect(() => {
        if (isSelected) {
            setColorBtn("#CFCFCF");
            setColorLt("#FFFFFF");
        }
        else {
            setColorBtn("#FFFFFF");
            setColorLt("#DBDBDB");

        }
    }, [isSelected])


    function handleClick() {

        setIsSelected(!isSelected)
        if (isSelected) {
            setSelectedDays(selectedDays.filter((item) => item !== ind))
        }
        else {
            setSelectedDays([...selectedDays, ind])
        }
    }
    return (
        <DaySelected type="button" onClick={handleClick} colorBtn={colorBtn} colorLt={colorLt}>
            {value}
        </DaySelected>
    )
}



const DaySelected = styled.button`
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