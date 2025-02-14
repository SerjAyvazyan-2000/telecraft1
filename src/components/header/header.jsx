import './header.scss'
import user from '../../assets/images/user.png'

const Header = () => {
    return <header>
        <div className='header-body G-justify-between'>
            <div className='header-tools'>
                <div className='select-store G-align-center'>
                    <div className='store-icon G-center'>
                        <i className='icon icon-shopping-cart'></i>
                    </div>
                    <div className='store-name G-align-center'>
                        <span>Выберите магазин</span>
                        <i className='icon icon-header-arrow'></i>
                    </div>
                </div>
            </div>
            <div className='header-actions G-align-center'>

                <div className='notifications G-center'>
                    <i className='icon icon-notification'></i>
                    <div className='notifications-quantity G-center'>
                        <span>98</span>
                    </div>
                </div>

                <div className='header-user G-flex'>
                    <div className='header-user-img G-flex'>
                        <img src={user} alt=""/>
                    </div>
                </div>
                <div className='log-in G-center'>
                    <i className='icon icon-log-in'></i>
                </div>
            </div>
        </div>
    </header>
};

export default Header;