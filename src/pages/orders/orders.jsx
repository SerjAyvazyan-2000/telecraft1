import React, {useState} from 'react';
import './orders.scss'
import Header from "../../components/header/header.jsx";
import BlockHeader from "../../components/blockHeader/blockHeader.jsx";
import Button from "../../ui/button/button.jsx";


const Orders = () => {

    const orders = [
        {
            id: 41,
            number: "0041",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 42,
            number: "0042",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 43,
            number: "0041",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 44,
            number: "0042",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },

        {
            id: 45,
            number: "0041",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 46,
            number: "0042",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 47,
            number: "0041",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
        {
            id: 48,
            number: "0042",
            author: "kai ник: \"iaminlovewithai\"",
            subBlock: {
                payment: { method: "Карта", commission: "0%", rate: "1.00" },
                composition: ["Интеграция в ваш бизнес"],
                address: "не определён",
                changed: "27.11.2024 15:04:42",
            },
        },
    ];

    const [activeOrder, setActiveOrder] = useState();

    const toggleOrder = (id) => {
        setActiveOrder(activeOrder === id ? null : id);
    };

    return <div className='orders-wrapper G-flex'>
        <section className='orders-section'>
            <Header/>

            <div className='block-header orders-header  G-align-center'>
                <div className='block-name G-justify-between'>
                    <h2 className='block-title'>Список заказов</h2>
                    <div className={`block-search orders-search`}>
                        <label className='search-label'>
                            <input name='search' type="text" placeholder='Поиск'/>
                            <i className='icon icon-search'></i>
                        </label>
                    </div>

                </div>

                <div className='block-tools G-align-center'>
                    <i className='icon orders-refresh icon-refresh'></i>
                </div>
            </div>

            <div className="orders-list">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className={`order-item ${activeOrder === order.id ? "active" : ""}`}
                        onClick={() => toggleOrder(order.id)}
                    >
                        <div className="order-item-header G-align-center">
                            <div className="order-item-texts G-align-center">
                                <div className="order-item-arrow arrow-bg G-center">
                                    <i className="icon gray-arrow-down"></i>
                                </div>
                                <p className="order-item-number">{order.number}</p>
                                <p className="order-author">{order.author}</p>
                            </div>
                            <div className="order-item-actions G-align-center">
                                <div className="order-time-action order-action-bg G-center">
                                    <i className="icon icon-clock"></i>
                                </div>
                                <div className="order-check-action order-action-bg G-center">
                                    <i className="icon icon-user-check"></i>
                                </div>
                                <div className="order-more-action arrow-bg G-center">
                                    <i className="icon icon-order-more"></i>
                                </div>
                            </div>
                        </div>

                        {order.subBlock && <div className="order-sub-block G-flex-column">
                            <div className="order-payment-method">
                                <h3 className="order-sub-title">Способ оплаты:</h3>
                                <div className="payment-method-info G-align-center">
                                    <div className="cart-method">
                                        <span>{order.subBlock.payment.method}</span>
                                    </div>
                                    <div className="commission G-align-center">
                                        <p>Комиссия</p>
                                        <span>{order.subBlock.payment.commission}</span>
                                    </div>
                                    <div className="well G-align-center">
                                        <p>Курс</p>
                                        <span>{order.subBlock.payment.rate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="order-composition">
                                <h3 className="order-sub-title">Состав заказа</h3>
                                <div className="composition-info G-align-center">
                                    {order.subBlock.composition.map((item, index) => (
                                        <p key={index}>{index + 1}. {item}</p>
                                    ))}
                                    <span>1*50 000,00 * (курс 1.00) = 50 000,00</span>
                                </div>
                            </div>

                            <div className="delivery-address">
                                <h3 className="order-sub-title">Адрес доставки</h3>
                                <div className="delivery-info">
                                    <p className="not-defined">{order.subBlock.address}</p>
                                </div>
                            </div>

                            <p className="changed">Изменено: {order.subBlock.changed}</p>
                        </div>}
                    </div>
                ))}
            </div>



        </section>
    </div>
};

export default Orders;