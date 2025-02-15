import './input.scss'

const Input = ({placeholder,name}) => {
    return <div className={`create-input`}>
        <label className='create-label'>
            <input name={`${name}`} type="text" placeholder={`${placeholder}`}/>
        </label>
    </div>
};

export default Input;