
import './Header.css';
import { NavLink } from 'react-router-dom';
import { CustomLink } from '../../Layout/CustomLink';



export const Header = () => {

    return (
            <header className="headerDiv">
                <img src={require('../../assets/icons/logo.png')} className="headerLogo" />
                <nav className="headerNavDiv">
                    <CustomLink to="/" className="headerNav">Главная</CustomLink>
                    <CustomLink to ="/services" className="headerNav">Услуги</CustomLink>
                    <CustomLink to="/orders" className="headerNav">Проекты</CustomLink>
                    <CustomLink to="/information" className="headerNav">О компании</CustomLink>
                    <CustomLink to="/contacts" className="headerNav">Контакты</CustomLink>
                </nav>
                <div className='headerContacts'>
                    <img src={require('../../assets/icons/telephone.png')} style={{height:50}}/>
                    <CustomLink to="tel:+375296043184" className='headerTelefone'>+375(29)6043184</CustomLink>
                </div>
            </header>
    )
}