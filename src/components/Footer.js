import React, { Component } from 'react'

import fbicon from './img/fbicon.png'
import insticon from './img/insticon.png'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footerSection'>
            <div className='container'>
                <div className='footerRow'>
                    <div className='leftFooterColumn'>
                        <h5 className='textFooter'>наши координаты</h5>
                        <p>г. Рязань, ул. Пушкина, д. Колотушкина</p>

                        <h5 className='textFooter'>наш мобильный</h5>
                        <p>+79106112121</p>

                        <h5 className='textFooter'>наш электронный ящик</h5>
                        <p>help@arhprocentr.ru</p>
                    </div>
                    <div className='middleFooterColumn'>
                        <h5 className='textFooter'>мы ведем социальные сети</h5>
                        <div>
                            <img src={ fbicon } alt="fbIcon" className='socialFooter'/>
                            <img src={ insticon } alt="fbIcon" className='socialFooter'/>
                        </div>
                        <h5 className='textFooter'>мы работаем над вашими проектами</h5>
                        <p>с пн-пт с 10 утра до 19 вечера</p>
                    </div>
                    <div>
                        <h2 className='footerLogo'>arhprocentr</h2>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
