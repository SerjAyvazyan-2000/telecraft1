import './pricing.scss'
import BlockHeader from "../../components/blockHeader/blockHeader.jsx";
import PricingAction from "../../components/pricingAction/pricingAction.jsx";
import Header from "../../components/header/header.jsx";


const Pricing = () => {
    return <>
        <section className='pricing-section'>
            <Header/>

            <BlockHeader
                className='pricing-header-block'
                searchClass={'pricing-search'}
                title='Ценообразование'
                buttonText='Создать прайс-лист'
                bntClass={'pricing-create-btn'}
            />

            <div className='pricing-table '>
                <div className='pricing-table-header G-justify-between'>
                    <h3 className='pricing-table-title'>Основной</h3>
                    <div className='pricing-table-data G-align-center'>
                        <div className='data-start'>07.11.2024 23:00</div>
                        <span className='data-line'></span>
                        <div className='data-end'>08.11.2025 10:39</div>
                        <div className='data-for'>
                            <span>365 дней</span>
                        </div>

                    </div>
                </div>

                <div className='pricing-actions'>
                    <PricingAction title={'Наполнение телеграм магазина товарами'}/>

                    <PricingAction title={'Установка StableDiffusion локально'}/>

                </div>
            </div>


        </section>
    </>
};

export default Pricing;