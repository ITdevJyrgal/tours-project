import React from 'react';
import tinkoff from '../../../images/tinkof.png'
import cberbank from '../../../images/cber.png'
import visa from '../../../images/visa.png'
import master from '../../../images/mastercard.png'
import mir from '../../../images/mir.png'
import paypal from '../../../images/paypal.png'
import FooterMenu from "./FooterMenu/FooterMenu";
import FooterTop from "./FooterTop/FooterTop";


const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <FooterTop/>
                <FooterMenu/>
                <div className="services">
                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li><h4>Клиентам</h4></li>
                                <li><a href="">О сервисе</a></li>
                                <li><a href="">Служба поддержки</a></li>
                                <li><a href="">Популярные направления</a></li>
                                <li><a href="">Реквизиты</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li><h4>Партнерам</h4></li>
                                <li><a href="">Авиакомпаниям</a></li>
                                <li><a href="">Отелям</a></li>
                                <li><a href="">Турагентствам</a></li>
                                <li><a href="">Рекламодателям</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;