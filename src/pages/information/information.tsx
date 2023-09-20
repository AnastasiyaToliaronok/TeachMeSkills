import './information.css';
import { Button } from '../../components/Button/button';

export const Information = () => {

    return (
        <div>
            <div className='informationDiv'>
                <div className='informTextDiv'>
                    <img src={require('../../assets/icons/logo.png')} className='informaLogo'></img>
                    <h1 className='informCertificate'>ООО "ТендерПро"</h1>
                    <p className='informText'>ООО Сочинское монтажное предприятие «Южтехмонтаж» создано в 2007 году как предприятие, специализирующееся в
                        области монтажно—сварочных работ на объектах нефтехимической и нефтеперерабатывающей промышленности на территории
                        Российской Федерации. Предприятие получило стремительное развитие и зарекомендовало себя в качестве надежного партнера,
                        способного качественно и в срок выполнить широкий спектр работ высокой степени сложности.</p>
                    <h2 className='informTitle'>ПРОЙДЕННЫЙ ПУТЬ</h2>
                        <p className='informText'>С момента создания наша организация выполнила большой объем работ в различных районах Российской Федерации на таких объектах,
                        как: ООО «РН—Туапсинский НПЗ», ООО «Сызранский НПЗ», ООО «Афипский НПЗ», ООО «Ильский НПЗ», ООО «ЛУКОЙЛ- Нижегороднефтеоргсинтез»,
                        ОАО «Новороссийский Морской Торговый Порт», ОАО «Импортпищепром», 000 «Новороссийский мазутный терминал», НПС «Уренгойская» и др.</p>
                </div>
                <img src={require('../../assets/images/elektromontaz.jpg')} className='informationImg' />

            </div>
            <div className='informationDivImg'>
                <img src={require('../../assets/images/certificate1.png')} className='certificateImg'></img>
                <img src={require('../../assets/images/certificate2.png')} className='certificateImg'></img>
                <img src={require('../../assets/images/certificate3.png')} className='certificateImg'></img>
                <img src={require('../../assets/images/certificate4.png')} className='certificateImg'></img>
            </div>

        </div>
    )
}