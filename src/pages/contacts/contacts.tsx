import './contacts.css';

import { Forms } from '../../components/form/form';

export const Contacts = () => {

    return (
        <div className='contacts'>
            <div className="contactInformation">
                <div>
                    <img src={require('../../assets/icons/logo.png')} className="imgContactInformation"></img>
                    <h1 className="NameContactInformation"> ООО "ТендерПро"</h1>
                </div>
                <div>
                    <p className="textContactInformation">Для нас важно пристальное внимание к подготовке собственных кадров, долгосрочные отношения с заказчиками, взаимовыгодные отношения с партнерами и высокое качество предоставляемых услуг.
                        Мы строим надежные решения на годы, выстраивая надежные отношения на десятилетия.</p>
                </div>
                <div>
                    <img src={require('../../assets/icons/telephone.png')} className="iconsTelefone"></img>
                    <span className="numberContactInformation"> +375297716694</span>
                </div>
                <div>
                    <img src={require('../../assets/icons/mail.png')} className="iconsMail"></img>
                    <span className="numberContactInformation"> tendeRPRO@tut.by</span>
                </div>
                <div>
                    <img src={require('../../assets/icons/nav.png')} className="iconeNav"></img>
                    <span className="numberContactInformation"> г.Минск Первомайская 22</span>
                </div>
            </div>
            <div  className='contactsForm'>
                <Forms />
            </div>
        </div>
    )
}


