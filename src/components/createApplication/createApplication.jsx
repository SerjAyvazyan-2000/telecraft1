import React from 'react';
import './createApplication.scss'
import Button from "../../ui/button/button.jsx";

const CreateApplication = ({open}) => {
    return <div className={`create-application create-box ${open ? 'active' : ''}`}>
        <h3 className='create-title'>Создать приложение</h3>

        <div className='create-inputs G-flex-column'>
            <div className='create-input'>
                <label className='create-label'>
                    <input name='name' type="text" placeholder='Название'/>
                </label>
            </div>

            <div className='create-textarea'>
                <label className='create-textarea-label'>
                    <textarea name="description"  placeholder='Описание'></textarea>
                </label>
            </div>

            <div className='create-textarea'>
                <label className='create-textarea-label'>
                    <textarea name="description" placeholder='Приветственное сообщение'></textarea>
                </label>
            </div>

            <div className='create-input'>
                <label className='create-label'>
                    <input name='phone' type="number" placeholder='+ 7 _____ - ______________'/>
                </label>
            </div>

            <div className='currencies-inputs G-align-center'>
                <div className='create-input'>
                    <label className='create-label'>
                        <input name='currencies' type="number" placeholder='Валюта'/>
                    </label>
                </div>

                <div className='create-input'>
                    <label className='create-label'>
                        <input name='currenciesCod' type="number" placeholder='Код валюты'/>
                    </label>
                </div>
            </div>

            <div className='create-input'>
                <label className='create-label'>
                    <input name='api' type="number" placeholder='API бота'/>
                </label>
            </div>

            <div className='create-tools G-flex-column'>
                <Button text={'Сохранить'} classname='btn-green' icon='icon-save'/>
                <Button text={'Отмена'} classname='btn-white'/>

            </div>


        </div>
    </div>
};

export default CreateApplication;