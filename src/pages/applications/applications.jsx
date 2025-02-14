import React, {useState} from 'react';
import './applications.scss'
import Header from "../../components/header/header.jsx";
import BlockHeader from "../../components/blockHeader/blockHeader.jsx";
import pepsi from '../../assets/images/pepsi.png'
import telegramStore from '../../assets/images/telegramStore.png'
import cola from '../../assets/images/cola.png'
import paymentMethod1 from '../../assets/images/paymentMethod1.png'
import paymentMethod2 from '../../assets/images/paymentMethod2.png'
import ton from '../../assets/images/ton.png'
import CreateApplication from "../../components/createApplication/createApplication.jsx";


const Applications = () => {
    const [openCreate,setOpenCreate] = useState(false);

    const handCreate = () =>{
        setOpenCreate(!openCreate)
    }
    return <div className='applications-wrapper G-flex'>
        <section className='applications-section'>
            <Header/>
            <BlockHeader
                className='pricing-header-block'
                searchClass={'pricing-search'}
                title='Ценообразование'
                buttonText='Создать приложение'
                bntClass={'application-btn'}
                onClick={handCreate}
            />

            <div className={`applications-block ${openCreate ? 'direction-column' : ''} G-flex`}>

                <div className='applications-list-block'>
                    <div className='applications-list-header G-align-center'>
                        <h2 className='applications-title'>Список приложений</h2>
                        <div className='applications-icons G-align-center'>
                            <i className='icon applications-icon application-refresh'></i>
                            <i className='icon applications-icon application-plus'></i>

                        </div>


                    </div>


                    <div className='applications-list G-flex'>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={pepsi} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={telegramStore} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={cola} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={pepsi} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={telegramStore} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={pepsi} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>
                        <div className='applications-item G-column-center'>
                            <div className='application-img G-flex'>
                                <img src={cola} alt=""/>
                            </div>
                            <div className='application-tolls G-center'>
                                <i className='icon icon-more'></i>
                            </div>
                            <p className='applications-item-name'>Телеграм магазин</p>
                        </div>

                    </div>
                </div>

                <div className={`payment-block ${openCreate ? 'mw-100' : ''}`}>
                    <div className='payment-block-header G-align-center'>
                        <h2 className='applications-title'>Оплата</h2>

                        <div className='applications-icons G-align-center'>
                            <i className='icon applications-icon application-refresh'></i>
                            <i className='icon applications-icon application-plus'></i>
                        </div>
                    </div>
                    <div className={`payment-methods ${openCreate ? 'direction-row' : ''} G-flex-column`}>
                        <div className='payment-method carts-method'>
                            <h3 className='payment-method-title'>Карты</h3>
                            <div className='payment-currency G-center'>
                                <span>RUB</span>
                            </div>

                            <div className='payment-method-img method-img--one G-flex'>
                                <img src={paymentMethod1} alt=""/>
                            </div>
                            <div className='payment-method-img method-img--two G-flex'>
                                <img src={paymentMethod2} alt=""/>
                            </div>

                            <div className='remove-method G-center'>
                                <i className='icon method-trash'></i>
                            </div>


                        </div>
                        <div className='payment-method crypt-method G-justify-between'>
                            <div className='crypt-method-info'>
                                <h3 className='payment-method-title'>TON</h3>
                                <div className='payment-currency G-center'>
                                    <span>Курс: 550</span>
                                </div>
                            </div>

                            <div className='ton-method-img G-flex'>
                                <img src={ton} alt=""/>
                            </div>

                            <div className='remove-method G-center'>
                                <i className='icon method-trash'></i>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </section>
        <CreateApplication open={openCreate}/>
    </div>
};

export default Applications;