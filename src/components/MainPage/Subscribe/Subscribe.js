import React from 'react';
import alean from '../../../images/алеан 1.png'
import ostrovok from '../../../images/ostrovok.png'

const Subscribe = () => {
    return (
        <>
            <section className='subscribe'>
                <div className="container">
                    <div className="subscribe-suptitle">
     <span className='subscribeLine line'>
    <svg width="119" height="8" viewBox="0 0 119 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M0 3.78182C0 1.82073 1.58978 0.230957 3.55087 0.230957H115.403C117.364 0.230957 118.954 1.82073 118.954 3.78182C118.954 5.74291 117.364 7.33269 115.403 7.33269H3.55086C1.58977 7.33269 0 5.74291 0 3.78182Z"
    fill="#353234"/>
</svg>
</span>

                        <h1 className='subscribe-title'>Любите путешествовать? <br/>
                            Подписывайтесь! </h1>
                    </div>

                    <p className='subscribe-desc'>
                        Наши подписчики первыми узнают о выгодных ценах <br/> и спецпредложениях
                    </p>


                    <div className="subscribe-input">
                        <input type="email" className='user-input' placeholder='Электрона почта'/>
                        <button className="subscribe-btn">
                            Подписаться
                        </button>
                    </div>


                </div>
            </section>
            <div className="container">
                <div className="partner-companies">
                    <div className='firstc'>
                        <img src={alean} alt=""/>
                        <h2 className='alean'>Алеан</h2>
                    </div>

                        <img src={ostrovok} alt=""/>


                </div>

            </div>
        </>

    );
};

export default Subscribe;