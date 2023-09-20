import { Forms } from '../form/form';
import './button.css';
import { Contacts } from '../../pages/contacts/contacts';
import { Link, Route, Routes } from 'react-router-dom';

export const Button = () => {
    return (
        <div>
            <button className="Button">
                <Link to="contacts" className='ButtonText'>Связаться с нами</Link>
                </button>


        </div>
    )
}