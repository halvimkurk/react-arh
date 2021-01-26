import React, { Component } from 'react'

import './OurAims.css'
import sketch from './img/sketchImg.png'

export default class Phil extends Component {
    render() {
        return (
                <div className='container'>
                    <h3 className='sectionTitle'>наша философия</h3>
                    <div className='aimsRow'>
                        <img className='aimsImage' src={ sketch } alt='before after' />
                        <div className='aimsTextSection'>
                            <h5 className='aimsTextTitle'>- полная прозрачность</h5>
                            <p className='aimsText'>orem ipsum dolor sit amet, consectetur adipiscing elitoremipsum dolor sit amet, consectetur adipiscing elit</p>
                            <h5 className='aimsTextTitle'>- полная прозрачность</h5>
                            <p className='aimsText'>orem ipsum dolor sit amet, consectetur adipiscing elitoremipsum dolor sit amet, consectetur adipiscing elit</p>
                            <h5 className='aimsTextTitle'>- полная прозрачность</h5>
                            <p className='aimsText'>orem ipsum dolor sit amet, consectetur adipiscing elitoremipsum dolor sit amet, consectetur adipiscing elit</p>
                            <h5 className='aimsTextTitle'>- полная прозрачность</h5>
                            <p className='aimsText'>orem ipsum dolor sit amet, consectetur adipiscing elitoremipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
        )
    }
}