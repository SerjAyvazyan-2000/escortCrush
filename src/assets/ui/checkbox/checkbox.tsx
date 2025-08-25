import {type FC, useState} from 'react'
import './checkbox.scss'

interface CheckboxProps {
    active?: boolean
}

 const Checkbox:FC<CheckboxProps> = ({active}) => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(prev => !prev)
    }

    return (
        <div
            className={`custom-checkbox ${active ? 'on' : 'off'}  G-center ${isOn ? 'on' : 'off'}`}
            onClick={toggleSwitch}
        >
            <i className='icon icon-check'></i>
        </div>
    )
}

export default Checkbox
