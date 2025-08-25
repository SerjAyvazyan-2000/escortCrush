import './inputBlock.scss'
import type {FC} from "react";

interface InputBlockProps {
    inputTitle?: string;
    name: string;
    tags?: boolean;
    variant:'white' | 'lightPeach';

}


const InputBlock:FC<InputBlockProps> = ({inputTitle, name, tags,variant}) => {
    console.log(variant)
    return <div className='input-block'>
        <p className='input-title'>{inputTitle}</p>
        <label className={`input-label ${variant}`}>
            <input type="text" name={name}/>
        </label>
        {tags &&
            <div className='input-tags G-align-center'>
                <i className='icon icon-info'></i>
                <p>30 characters max,</p>
                <span>21 characters left</span>
            </div>
        }

    </div>
};

export default InputBlock;