import './textarea.scss'

const Textarea = ({placeholder,name}) => {
    return <div className='create-textarea'>
        <label className='create-textarea-label'>
            <textarea name={`${name}`} placeholder={`${placeholder}`}></textarea>
        </label>
    </div>
};

export default Textarea;