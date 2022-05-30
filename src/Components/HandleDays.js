import styled from 'styled-components';
import HabitsContext from './HabitsContext';
import { useEffect, useState, useContext } from 'react';
export default function HandleDays({ ind, value }) {
    const [isSelected, setIsSelected] = useState(false);
    const { selectedDays, setSelectedDays } = useContext(HabitsContext)
    useEffect(()=> {if (selectedDays.includes(ind)) setIsSelected(true)}, [])
    function handleClick() {
        setIsSelected(!isSelected)
        if (isSelected) {
            setSelectedDays(selectedDays.filter((item) => item !== ind))
        }
        else {
            setSelectedDays([...selectedDays, ind])
        }
        console.log(isSelected)
    }
    return (
        <DaySelected type="button" onClick={handleClick} selected={isSelected}>
            {value}
        </DaySelected>
    )
}



const DaySelected = styled.button`

    box-sizing: border-box;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    font-size: 20px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-right: 5px;
       
`