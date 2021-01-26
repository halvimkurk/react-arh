import React, { Component } from 'react'

import ServiceCard from './serviceCard'

export default class Services extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='sectionTitle'>мы создаем</h3>
                <ServiceCard/>
            </div>
        )
    }
}
