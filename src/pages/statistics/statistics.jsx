import './statistics.scss'
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import chart from '../../assets/images/chart.png'

const Statistics = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Выберите магазин");
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const stats = [
        {
            id: 1,
            className: "green-item",
            iconClass: "pricing-icon",
            text: "Общая сумма за 24 дня",
            sum: "410 000,00",
        },
        {
            id: 2,
            className: "primary-item",
            iconClass: "users-icon",
            text: "Всего клиентов",
            sum: "3",
        },
        {
            id: 3,
            className: "gray-item",
            iconClass: "shoppingBag-icon",
            text: "Всего заказов",
            sum: "5",
        },
    ];


    return <section className='statistics-section'>
        <div className='statistics-header G-align-center'>
            <Link className='statistics-header-title' to={''}>
                Магазин
            </Link>
            <div onClick={() => setIsOpen(!isOpen)}
                 ref={selectRef} className={`statistics-select ${isOpen ? "focused" : ""}`}>
                <div className='select-tools G-align-center'>
                    <i className='icon icon-select-cart'></i>
                    <p className='select-title'>Выберите магазин</p>
                    <i className={`icon select-arrowDown ${isOpen ? "open" : ""}`}></i>
                </div>

                {isOpen && (
                    <div className="select-items">
                        {["Магазин 1", "Магазин 2", "Магазин 3"].map((shop) => (
                            <div
                                key={shop}
                                className="select-item"
                                onClick={() => {
                                    setSelected(shop);
                                    setIsOpen(false);
                                }}
                            >
                                {shop}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='statistics-tools G-align-center'>
                <div className='select-notifications notifications G-center'>
                    <i className='icon icon-notification'></i>
                    <div className='notifications-quantity G-center'>
                        <span>98</span>
                    </div>
                </div>

                <div className='statistics-log-in log-in G-center'>
                    <i className='icon icon-log-in'></i>
                </div>
            </div>


        </div>

        <div className='general-statistics-block G-align-center'>
            <div className='general-info-titles'>
                <h2 className='general-info-title'>
                    Общая
                    <span className='text-wrap'>статистика</span>
                </h2>
                <p className='general-info-text'>Общая статистика предоставляет ключевые данные для анализа и принятия
                    решений в различных областях. </p>
            </div>

            <div className="general-statistics-items G-align-center">
                {stats.map(({id, className, iconClass, text, sum}) => (
                    <Link key={id} className={`general-statistics-item ${className}`} to={"/"}>
                        <div className={`general-item-icon ${className}-bg G-center`}>
                            <i className={`icon general-icon ${iconClass}`}></i>
                        </div>
                        <p className="general-item-text">{text}</p>
                        <span className="general-item-sum">{sum}</span>
                    </Link>
                ))}
            </div>
        </div>

        <div className='statistics-description G-flex'>
            <div className='statistics-description-item statistics-chart G-flex-column'>
                <h3 className='descr-title'>Статистика</h3>
                <div className='statistics-chart-img G-center'>
                    <img src={chart} alt=""/>
                </div>
                <div className='chart-infos G-flex'>
                    <div className='chart-info-item G-align-start'>
                        <div className='chart-color chart-green-side'></div>
                        <div className='chart-info'>
                            <h4>Общая сумма за 24 дня</h4>
                            <p>410 000,00</p>
                        </div>
                    </div>
                    <div className='chart-info-item G-align-start'>
                        <div className='chart-color chart-primary-side'></div>
                        <div className='chart-info'>
                            <h4>Всего <span className='text-wrap'>клиентов</span></h4>
                            <p>3</p>
                        </div>
                    </div>
                    <div className='chart-info-item G-align-start'>
                        <div className='chart-color chart-gray-side'></div>
                        <div className='chart-info'>
                            <h4>Всего заказов</h4>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='statistics-description-item statistics-latest-info'>
                <h3 className='descr-title'>Последние заказы</h3>

                <div className='latest-orders-list'>

                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>Телеграм магазины</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>P2P Телеграм обменники</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>Крипто игры</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>VPN</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>Автоматизация в Телеграм</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                    <div className='latest-orders-item G-justify-between'>
                        <h4 className='orders-item-title'>Телеграм магазины</h4>
                        <div className='orders-item-tolls G-align-center'>
                            <div className='orders-count G-center'>
                                <p>98</p>
                            </div>
                            <div className='orders-action G-center'>
                                <i className='icon icon-moreVertical'></i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    </section>
};

export default Statistics;

