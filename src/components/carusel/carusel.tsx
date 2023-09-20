import React from "react";


export const Caresel = () => {


    return (
        <div>
            <div id="carouselControls" className="carousel slide carousel-fade" data-bs-ride="carousel"
                data-bs-interval='2000'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../../assets/images/main.png')} style={{height:650 }} className="d-block w-100"  />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../assets/images/carusel1.jpg')} style={{height:650 }} className="d-block w-100"  />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../assets/images/carusel2.jpg')} style={{height:650 }} className="d-block w-100"  />
                    </div>
                </div>
            </div>
        </div>
    )


}



