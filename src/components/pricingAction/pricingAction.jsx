import './pricingAction.scss'


const PricingAction = ({title}) => {
    return <div className='pricing-action '>
        <div className='pricing-action-header G-justify-between'>
            <h3 className='pricing-action-title'>{title}</h3>
            <div className='pricing-action-tolls G-align-center'>
                <div className='action-price'>15000.00 RUB</div>
                <div className='action-edit G-center'>
                    <i className='icon  icon-action-edit'></i>
                </div>
                <div className='action-remove G-center'>
                    <i className='icon icon-trash'></i>

                </div>
                <div className='action-arrow G-center'>
                    <i className='icon icon-action-arrow'></i>
                </div>

            </div>

        </div>

        {/*<div className='pricing-sub-block G-align-start'>*/}
        {/*    <div className='pricing-sub-action'>*/}
        {/*        <h3 className='sub-action-title'>Прайс-лист</h3>*/}
        {/*        <div className='action-defined'>Предыдущий прайс-лист не определен</div>*/}
        {/*        <p className='sub-action-clue'>Изменено: 27.11.2024 15:04:42</p>*/}
        {/*    </div>*/}

        {/*    <div className='pricing-sub-action'>*/}
        {/*        <h3 className='sub-action-title'>Прайс-лист</h3>*/}
        {/*        <div className='action-defined'>Предыдущий прайс-лист не определен</div>*/}
        {/*        <p className='sub-action-clue'>Изменено: 27.11.2024 15:04:42</p>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
};

export default PricingAction;