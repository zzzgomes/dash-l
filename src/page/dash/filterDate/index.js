import {useState} from 'react'
import {ReactComponent as ArrowLeft} from "../../../assets/images/arrowLeft.svg";
import {ReactComponent as ArrowRight} from "../../../assets/images/arrowRight.svg";
import {Filter} from './style'
const FilterDate = () => {

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const [currentMonth, setCurrentMonth] = useState(11)

    return <Filter>
        <button onClick={() => setCurrentMonth(prevState => prevState === 1 ? 12 : prevState - 1)}>
            <ArrowLeft/>{currentMonth === 1 ? months[11] : months[currentMonth - 2]}</button>
        <div>{months[currentMonth - 1]}</div>
        <button
            onClick={() => setCurrentMonth(prevState => prevState === 12 ? 1 : prevState + 1)}>{currentMonth === 12 ? months[0] : months[currentMonth]}<ArrowRight/>
        </button>
    </Filter>
}

export default FilterDate