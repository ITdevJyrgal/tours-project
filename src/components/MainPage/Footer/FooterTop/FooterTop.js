import React from 'react';
import tinkoff from "../../../../images/tinkof.png";
import cberbank from "../../../../images/cber.png";
import visa from "../../../../images/visa.png";
import master from "../../../../images/mastercard.png";
import mir from "../../../../images/mir.png";
import paypal from "../../../../images/paypal.png";

const FooterTop = () => {
    return (
        <>
            <div className="footer-top">
                <h4 className="footer-top-title">
                    Безопасность платежей и защита данных
                </h4>
                <div className="row">
                    <div className="footer-desc">
                        <div className="col-6">

                            <p className='col-6-desc'>
                                Мы работаем с лучшими банками и платежными системами. Они дают возможность проводить
                                онлайн-платежи максимально удобно, быстро и безопасно. За счёт нашей системы шифрования
                                ваши данные банковских карт всегда защищены.
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="footer-banks">
                                <div className="logos">
                                      <span>
                                <img src={tinkoff} alt=""/>
                              </span>
                                    <span>
                                <img src={cberbank} alt=""/>
                              </span>

                                    <span>
                                <img src={visa} alt=""/>
                              </span>
                                </div>

                                <div className="logos">
                                    <span style={{marginLeft: '-30px'}}>
                                <img src={master} alt=""/>
                              </span>
                                    <span>
                                <img src={mir} alt=""/>
                              </span>
                                    <span>
                                <img src={paypal} alt=""/>
                              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FooterTop;