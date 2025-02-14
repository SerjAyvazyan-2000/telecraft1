import './button.scss';



const Button = ({text,classname,variant, icon,onClick}) => {
    return <button onClick={onClick} className={`${classname} ${variant} G-align-center`}>
        { icon && <i className={`icon ${icon}`}></i> }
        <span>{text}</span>
    </button>
};

export default Button;