import {type FC, useState} from 'react'
import './switch.scss'

interface SwitchProps {
    variant:string
}
const Switch:FC<SwitchProps> = ({variant}) => {
    const [isOn, setIsOn] = useState(true)

    const toggleSwitch = () => {
        setIsOn(prev => !prev)
    }

    return (
        <div
            className={`custom-switch ${variant} ${isOn ? 'on' : 'off'}`}
            onClick={toggleSwitch}
        >
            <div className="knob" />
        </div>
    )
}

export default Switch