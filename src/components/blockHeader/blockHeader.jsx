import './blockHeader.scss'
import Button from "../../ui/button/button.jsx";


const BlockHeader = ({title, buttonText, searchClass, className,bntClass ,onClick,searchActive}) => {

    return <div className={`block-header ${className}  G-align-center`}>
        <div className='block-name G-justify-between'>
            <h2 className='block-title'>{title}</h2>
            <div className={`block-search ${searchClass} ${searchActive  ? 'active' : ''}`}>
                <label className='search-label'>
                    <input name='search' type="text" placeholder='Поиск'/>
                    <i className='icon icon-search'></i>
                </label>
            </div>

        </div>

        <div className='block-tools G-align-center'>

            <i className='icon icon-refresh'></i>
            <Button onClick={onClick}
                    variant={'btn-green'}
                    icon='icon-plus' classname={`${bntClass}`}
                    text={buttonText}/>
        </div>
    </div>
};

export default BlockHeader;