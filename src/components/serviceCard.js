import React, { Component } from 'react'

import './serviceCard.css'
import serviceImage1 from './img/serviceImage1.png'

export default class serviceCard extends Component {
    render() {
        return (
            <div className='columnServices'>
                <div className='contentServices'>
                    <img className='imageServices' src={serviceImage1} />
                    <div className='captionServices'>
                        <h4>современную архитектуру</h4>
                        <p className='captionDescription'>начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то</p>
                    </div>
                </div>
                <div className='contentServices'>
                    <img className='imageServices' src={serviceImage1} />
                    <div className='captionServices'>
                        <h4>мы создаем</h4>
                        <p className='captionDescription'>начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то</p>
                    </div>
                </div>
                <div className='contentServices'>
                    <img className='imageServices' src={serviceImage1} />
                    <div className='captionServices'>
                        <h4>благоустройство вашего участка</h4>
                        <p className='captionDescription'>начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то</p>
                    </div>
                </div>
                <div className='contentServices'>
                    <img className='imageServices' src={serviceImage1} />
                    <div className='captionServices'>
                        <h4>дома, в которых хочется жить</h4>
                        <p className='captionDescription'>начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то начиная от такого-то и заканчивая таким-то</p>
                    </div>
                </div>
            </div>
        )
    }
}
