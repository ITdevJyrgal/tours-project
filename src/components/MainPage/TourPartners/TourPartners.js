import React, {useState} from 'react';
import TourCard from "./TourCard/TourCard";

import alean from '../../../images/алеан 1.png'
import ostrovok from '../../../images/ostrovok.png'


const TourPartners = () => {

    const [tabState, setTabState]  = useState(1)

    const toggleTab = (index ) => {
        setTabState(index)
    }
    const activeTabs = () => {

    }


    return (
        <section className='partners'>
<div className="container">

    <div className="partners-suptitle">
        <span className="partners-line line">
          <svg width="119" height="8" viewBox="0 0 119 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3.78182C0 1.82073 1.58978 0.230957 3.55087 0.230957H115.403C117.364 0.230957 118.954 1.82073 118.954 3.78182C118.954 5.74291 117.364 7.33269 115.403 7.33269H3.55086C1.58977 7.33269 0 5.74291 0 3.78182Z" fill="#F0F5FA"/>
</svg>

        </span>
        <h1 className='partners-title'>Туры наших партнеров </h1>

    </div>


    <div className="block-tabs">

        <div className="buttons">
            <button  className={tabState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                Греция
            </button>
            <button className={tabState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                Россия
            </button>
            <button className={tabState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>
                Италия
            </button>
            <button className={tabState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}>
                Европа
            </button>
        </div>
          <button className='tourBtn'>

                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31" height="31.9999" rx="8.68419" fill="#F0F5FA"/>
                <g clipPath="url(#clip0)">
                    <path d="M23.6299 25.5103L23.6299 12.5701C24.6865 12.2143 25.45 11.2149 25.45 10.0399C25.45 8.86479 24.6865 7.86537 23.6299 7.50961L23.6299 5.48975C23.6299 5.02054 23.2495 4.64014 22.7803 4.64014C22.3111 4.64014 21.9307 5.02054 21.9307 5.48975L21.9307 7.50966C20.8741 7.86542 20.1107 8.86485 20.1107 10.0399C20.1107 11.215 20.8741 12.2144 21.9307 12.5702L21.9307 25.5103C21.9307 25.9796 22.3111 26.36 22.7803 26.36C23.2495 26.36 23.6299 25.9796 23.6299 25.5103ZM21.8099 10.0399C21.8099 9.50477 22.2452 9.06943 22.7803 9.06943C23.3154 9.06943 23.7507 9.50477 23.7507 10.0399C23.7507 10.5749 23.3154 11.0103 22.7803 11.0103C22.2452 11.0103 21.8099 10.5749 21.8099 10.0399Z" fill="#6821D4"/>
                    <path d="M16.3496 25.5103L16.3496 23.4904C17.4063 23.1346 18.1697 22.1351 18.1697 20.9601C18.1697 19.7851 17.4063 18.7857 16.3496 18.4299L16.3496 5.48975C16.3496 5.02054 15.9692 4.64014 15.5 4.64014C15.0308 4.64014 14.6504 5.02054 14.6504 5.48975L14.6504 18.4299C13.5938 18.7857 12.8304 19.7852 12.8304 20.9602C12.8304 22.1352 13.5938 23.1347 14.6504 23.4904L14.6504 25.5103C14.6504 25.9796 15.0308 26.36 15.5 26.36C15.9692 26.36 16.3496 25.9796 16.3496 25.5103ZM14.5296 20.9602C14.5296 20.4251 14.965 19.9897 15.5 19.9897C16.0351 19.9897 16.4705 20.4251 16.4705 20.9602C16.4705 21.4953 16.0351 21.9306 15.5 21.9306C14.965 21.9306 14.5296 21.4953 14.5296 20.9602Z" fill="#6821D4"/>
                    <path d="M9.06937 25.5103L9.06937 16.2102C10.126 15.8545 10.8894 14.855 10.8894 13.68C10.8894 12.5049 10.126 11.5055 9.06937 11.1497L9.06937 5.48975C9.06937 5.02054 8.68898 4.64014 8.21976 4.64014C7.75055 4.64014 7.37016 5.02053 7.37016 5.48975L7.37016 11.1497C6.31353 11.5055 5.55012 12.5049 5.55012 13.68C5.55012 14.855 6.31353 15.8545 7.37016 16.2102L7.37016 25.5103C7.37016 25.9795 7.75055 26.3599 8.21976 26.3599C8.68897 26.3599 9.06937 25.9795 9.06937 25.5103ZM7.24928 13.68C7.24928 13.1449 7.68462 12.7096 8.21971 12.7096C8.75479 12.7096 9.19013 13.1449 9.19013 13.68C9.19013 14.2151 8.75485 14.6504 8.21976 14.6504C7.68468 14.6504 7.24928 14.2151 7.24928 13.68Z" fill="#6821D4"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect x="30" y="1" width="29" height="29" rx="10" transform="rotate(90 30 1)" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

          </button>


    </div>

    <div className="tabs-content">
        <div
            className={tabState === 1 ? "content  active-content" : "content"}
        >

        </div>


        <div
            className={tabState === 2 ? "content  active-content" : "content"}
        >
<div className="tours">
    <div className="row">
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>

    </div>
</div>




        </div>

        <div
            className={tabState === 3 ? "content  active-content" : "content"}
        >

        </div>

        <div
            className={tabState === 4 ? "content  active-content" : "content"}
        >

        </div>
    </div>




</div>
        </section>
    );
};

export default TourPartners;