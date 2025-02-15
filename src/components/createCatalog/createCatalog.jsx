import React, {useState} from 'react';
import './createCatalog.scss'
import Button from "../../ui/button/button.jsx";
import Input from "../../ui/input/input.jsx";
import Textarea from "../../ui/textarea/textarea.jsx";

const CreateCatalog = ({open}) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = (e) => {
        if (e.target.closest('.more-tools-inputs')) {
            return;
        }
        setIsActive(!isActive);
    };

    return <div className={`create-catalog create-box ${open ? 'active' : ''}`}>
        <h3 className='create-title'>Создать категорию</h3>

        <div className='create-tools-items G-flex-column'>

            <div className={`more-tools-item ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                <div className='more-tools-header G-align-center'>
                <p className='more-tools-text'>Общие параметры</p>
                    <div className='more-tools-bg G-center'>
                        <i className='icon gray-arrow-down'></i>
                    </div>
                </div>
                <div className='more-tools-inputs G-flex-column'>
                    <Input name={'headline'} placeholder={'Заголовок'}/>

                    <Textarea placeholder={'Описание'} name={'description'}/>
                </div>
            </div>

            <div className='more-tools-item '>
                <div className='more-tools-header G-align-center'>
                    <p className='more-tools-text'>Фото</p>
                    <div className='more-tools-bg G-center'>
                        <i className='icon gray-arrow-down'></i>
                    </div>
                </div>

            </div>

            <div className='more-tools-item '>
                <div className='more-tools-header G-align-center'>
                    <p className='more-tools-text'>Характеристики</p>
                    <div className='more-tools-bg G-center'>
                        <i className='icon gray-arrow-down'></i>
                    </div>
                </div>

            </div>

            <div className='create-tools G-flex-column'>
                <Button text={'Сохранить'} classname='btn-green' icon='icon-save'/>
                <Button text={'Отмена'} classname='btn-white'/>

            </div>
        </div>


    </div>
};

export default CreateCatalog;