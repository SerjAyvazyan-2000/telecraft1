import './sideBar.scss'
import {Link, useLocation} from "react-router-dom";
import logo1 from '../../assets/images/logo.webp'
import user from '../../assets/images/user.webp'
import {useEffect, useState} from "react";


const SideBar = () => {
    const location = useLocation();

    const [active, setActive] = useState(null);

    const menuItems = [
        { id: 1, label: "Каталог", icon: "icon-catalog", hasArrow: true, path: "/catalog" },
        { id: 2, label: "Ценообразование", icon: "icon-pricing", hasArrow: false, path: "/pricing" },
        { id: 3, label: "Заказы", icon: "icon-shoppingBag", hasArrow: false, path: "/orders" },
        { id: 4, label: "Клиенты", icon: "icon-users", hasArrow: false, path: "/clients" },
        { id: 5, label: "Общая статистика",  hasArrow: false, path: "/statistics" },
        { id: 6, label: "Приложения",  hasArrow: false, path: "/applications" },
        { id: 7, label: "Войти ",  hasArrow: false, path: "/login" },
        { id: 8, label: "Заказы  ", hasArrow: false, path: "/orders" },



    ];

    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setActive(currentItem.id);
        }
    }, [location.pathname, menuItems]);

    return <section className='sideBar-block '>
        <Link to={'/'} className='logo G-flex'>
            <img src={logo1} alt="logo"/>
        </Link>
        <div className='sideBar-user-info'>
            <div className='user-img G-flex'>
                <img src={user} alt=""/>
            </div>
            <h2 className='user-name'>Иван Иванов</h2>
            <div className='edit-tools G-center'>
                <i className='icon icon-edit'></i>
            </div>
        </div>

        <nav className='sideBar-menu'>
            <ul className="menu-list">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`menu-item ${active === item.id ? "active" : ""}`}
                        onClick={() => setActive(item.id)}
                    >
                        <Link className="menu-link G-align-center" to={item.path}>
                            {item?.icon && <i className={`icon menu-icon ${item.icon}`}></i>}

                            <span>{item.label}</span>
                            {item.hasArrow && <i className="icon icon-arrowDown"></i>}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    </section>
};

export default SideBar;