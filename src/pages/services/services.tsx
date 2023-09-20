import './services.css';
import { Button } from '../../components/Button/button';
import { Caresel } from '../../components/carusel/carusel';


export const Services = () => {

    return (
        <div className='servicesDiv'>
            <div className='servicesImgDiv'>
                <div>
                    <img src={require('../../assets/images/services1.png')}/>
                </div>
            </div>
            <div className='servicesList'>
                <div className='servicesHeader'>
                    <img src={require('../../assets/icons/logo.png')} className='servicesHeaderImg' />
                    <h1 className='servicesHeaderText'> Наши услуги </h1>
                </div>
                <div className='servicesList'>
                    <div className='servicesLists'>
                        <span className='servicesListNumber'>1</span>
                        <p className='servicesLisText'>Монтаж силового электрооборудования и электроосвещения</p>
                    </div>
                    <div className='servicesLists'>
                        <span className='servicesListNumber'>2</span>
                        <p className='servicesLisText'>Монтаж и обслуживание охранно-пожарных сигнализаций</p>
                    </div>
                    <div className='servicesLists'>
                        <span className='servicesListNumber'>3</span>
                        <p className='servicesLisText'>Монтаж слаботочных сетей (телефонизация, видеонаблюдение, контроль доступа)</p>
                    </div>
                    <div className='servicesLists'>
                        <span className='servicesListNumber'>4</span>
                        <p className='servicesLisText'>Электрические подстанции</p>
                    </div>
                    <div className='servicesLists'>
                        <span className='servicesListNumber'>5</span>
                        <p className='servicesLisText'>Пусконалодчные работы</p>
                    </div>
                </div>
            </div>

        </div>
    )
}