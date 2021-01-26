import React, { Component } from 'react'

import TrustCard from './trustCard.js'
import LetsCreate from './letsCreate.js'

export default class WhyUs extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='sectionTitle'>почему нам доверяют проектирование сложных объектов?</h3>
                <TrustCard/>
                <LetsCreate/>
            </div>
        )
    }
}
