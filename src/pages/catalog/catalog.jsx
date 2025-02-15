import './catalog.scss'
import Header from "../../components/header/header.jsx";
import BlockHeader from "../../components/blockHeader/blockHeader.jsx";
import {useState} from "react";
import CreateCatalog from "../../components/createCatalog/createCatalog.jsx";

const Catalog = () => {
    const [isActive, setIsActive] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);

    const handCreate = () => {
        setOpenCreate(!openCreate)
    }
    return <div className='catalog-wrapper G-flex'>
        <section className='catalog-section'>
            <Header/>
            <BlockHeader
                searchClass='catalog-search'
                searchActive={openCreate}
                buttonText={'Создать категорию'}
                title={'Список категорий'}
                bntClass='create-catalog-btn'
                onClick={handCreate}/>


            <div className='catalog-list'>
                <div className={`catalog-item ${isActive ? "active" : ""}`} onClick={() => setIsActive(!isActive)}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>Телеграм магазины</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>P2P Телеграм обменники</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>Крипто игры</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>VPN</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>Автоматизация в Телеграм</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>Телеграм магазины</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>


                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>P2P Телеграм обменники</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>


                <div className={`catalog-item `}>

                    <div className='category-item-header G-justify-between'>
                        <div className='category-item-name G-align-center'>
                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-arrow'></i>
                            </div>
                            <p className='category-name'>Крипто игры</p>
                        </div>

                        <div className='category-item-actions G-align-center'>
                            <div className='category-number G-center'>
                                <span>98</span>
                            </div>
                            <div className='category-settings-icon G-center'>
                                <i className='icon icon-settings'></i>
                            </div>

                            <div className='category-arrows G-align-center'>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow-up'></i>
                                </div>
                                <div className='category-icon-bg G-center'>
                                    <i className='icon catalog-arrow'></i>
                                </div>


                            </div>

                            <div className='category-icon-bg G-center'>
                                <i className='icon catalog-more-icon'></i>
                            </div>
                        </div>


                    </div>
                    <div className='category-sub-block '>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Мини приложение Интернет магазин</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>P2P обменник на 12 блокчейнов</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div className='category-sub-item G-justify-between'>
                            <div className='category-sub-name G-align-center'>
                                <i className='icon icon-L'></i>
                                <p className='sub-name'>Интеграция в ваш бизнес</p>
                            </div>
                            <div className='sub-item-actions G-align-center'>

                                <div className='sub-item-numbers G-align-center'>
                                    <p className='sub-item-price'>12 000 ₽</p>
                                    <p className='sub-item-count'>-13 шт.</p>
                                </div>

                                <div className='sub-item-tolls G-align-center'>
                                    <div className='folderPlus-bg G-center'>
                                        <i className='icon icon-folderPlus'></i>
                                    </div>


                                    <div className='category-arrows G-align-center'>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow-up'></i>
                                        </div>
                                        <div className='category-icon-bg G-center'>
                                            <i className='icon catalog-arrow'></i>
                                        </div>


                                    </div>

                                    <div className='category-icon-bg G-center'>
                                        <i className='icon catalog-more-icon'></i>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

        <CreateCatalog open={openCreate}/>


    </div>
};

export default Catalog;


