import React, { Component } from 'react'

import './Header.css'
import fbicon from './img/fbicon.png'
import insticon from './img/insticon.png'

export default class Header extends Component {
    render() {
        return (
            <div className='headerSection'>
                <div className='container'>
                    <nav>
                        <h1 className='navLogo'>arhprocentr</h1>
                        <button className='navButton'>заказать звонок</button>
                        <img className='navItem' src={fbicon} />
                        <img className='navItem' src={insticon} />
                    </nav>
                    <div className='heroText'>
                        <h2>спроектируем и построим современный загородный дом премиум класса</h2>
                        <h4>объектами проектирования являются частные дома, виллы, усадьбы, коммерческие объекты</h4>
                        <button className='headerButton'>записаться на встречу с архитектором</button>
                    </div>
                </div>
            </div>
        )
    }
}
