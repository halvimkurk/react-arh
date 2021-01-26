import React, { Component } from 'react'

import './ContactForm.css'

export default class Cooperation extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='sectionTitle'>как начать взаимовыгодное сотрудничество?</h3>
                <p className='cooperationSubContent'>для начала работы нам надо поговорить и договориться о первой встрече <br /> достаточно рассказать о своей задумке, указать контакты, и мы свяжемся с вами, чтобы все обсудить</p>
                <form>
                        <input type="text" name="name" placeholder='как к вам обращаться?' className='cooperationForm'/>
                        <input type="text" name="project" placeholder='что будем делать?' className='cooperationForm'/>
                        <input type="text" name="phone" placeholder='ваш номер телефона?' className='cooperationForm'/>
                </form>
                <h2 className="sendDataButton">жду звонка</h2>
            </div>
        )
    }
}
