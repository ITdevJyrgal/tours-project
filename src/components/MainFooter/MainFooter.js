import React from 'react';
import FooterMenu from "../MainPage/Footer/FooterMenu/FooterMenu";



const MainFooter = () => {
    return (
        <section className='footer pad'>
            <div className="container">
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

export default MainFooter;