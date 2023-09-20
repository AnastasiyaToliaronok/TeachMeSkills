import './orders.css';
import { Model } from '../../components/model/model';
import { useState } from 'react';
import { OrderStrateg } from '../../components/orderStrateg/orderStreteg';
import { OrderVitalur } from '../../components/orderVitalur/orderVitalur';

export const Orders = () => {

const [strateglActive, setStrateglActive] = useState(false);
const [vitalurActive, setVitalurActive] = useState(false);




    return (
        <div className="orders">
            <div className='ordersDiv'>
                <div className="ordersDivs" onClick={() => setStrateglActive(true)} >
                <img src={require('../../assets/icons/strategLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/vitalurLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/DobronomLogo2.png')} className='imgStyle'></img>
                <img src={require('../../assets/icons/dobronomLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/bsbLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/belmedLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/hyundaiLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/promstroiLogo.png')} className='imgStyle'></img>
                </div>
                <div className="ordersDivs" onClick={() => setVitalurActive(true)}>
                <img src={require('../../assets/icons/torgLogo.png')} className='imgStyle'></img>
                </div>
            </div>
            <Model active={strateglActive} setActive={setStrateglActive}>
                <OrderStrateg/>
            </Model>
            <Model active={vitalurActive} setActive={setVitalurActive}>
                <OrderVitalur/>
            </Model>
            <Model active={vitalurActive} setActive={setVitalurActive}>
            <OrderVitalur/>
            </Model>
            <Model active={strateglActive} setActive={setStrateglActive}>
            <OrderVitalur/>
            </Model>
            <Model active={strateglActive} setActive={setStrateglActive}>
                <OrderStrateg/>
            </Model>
            <Model active={strateglActive} setActive={setStrateglActive}>
                <OrderStrateg/>
            </Model>
            <Model active={strateglActive} setActive={setStrateglActive}>
                <OrderStrateg/>
            </Model>
            <Model active={strateglActive} setActive={setStrateglActive}>
                <OrderStrateg/>
            </Model>
        </div>
    )
}