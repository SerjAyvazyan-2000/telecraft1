import './login.scss'
import {useEffect, useState} from "react";
import logo from '../../assets/images/logo.svg'
import loginMedia from '../../assets/images/loginMedia.webp'
import {Link} from "react-router-dom";
import Button from "../../ui/button/button.jsx";


const Login = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        document.body.style.background = "rgba(242, 246, 255, 1)";

        return () => {
            document.body.style.background = "";
        };
    }, []);


    return <section className='login-section G-align-start'>
        <div className='login-media'>
            <img src={loginMedia} alt=""/>
        </div>

        <div className='login-description  G-column-center'>
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
            <form className='login-form G-column-center'>

                <h2 className='login-title'>Авторизация</h2>
                <div className='login-inputs-box G-flex-column'>

                    <div className='login-input-block'>
                        <label className='login-label'>
                            <input name='login' type="text" placeholder='Логин'/>
                            <i className='icon input-icon user-icon'></i>
                        </label>
                    </div>

                    <div className='login-input-block'>
                        <label className='login-label'>
                            <input name='password' type="password" placeholder='Пароль'/>
                            <i className='icon input-icon user-lock'></i>

                        </label>
                    </div>


                </div>
                <div className='login-bnt'>
                    <Button text='Войти' variant={'btn-green'}/>

                </div>
                <div className='login-tools G-align-center'>
                    <div  onClick={() => setChecked(!checked)} className='remember-me G-align-center'>
                        <div className={`remember-me-icon ${checked ? "checked" : ""}`}></div>
                        <p>Запомнить меня</p>
                    </div>
                    <Link className='forgot' to={'/forgot'}>Забыли пароль?</Link>

                </div>

                <div className='register-tools'>
                    <p>Нет аккаунта?
                        <Link to={'/register'}>Зарегистироваться</Link>
                    </p>
                </div>

            </form>


        </div>

    </section>
};

export default Login;