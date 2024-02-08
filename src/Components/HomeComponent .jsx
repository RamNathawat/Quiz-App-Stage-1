import React, { Component } from 'react'
import QuizComponent from './QuizComponent '
import './components.css'

export default class HomeComponent  extends Component {

  render() {
    return (
      <> 
        <div className='Body'>
            <h2 className='Quizapp'>Quiz App</h2>
            <button className='PlayButton' onClick={this.QuizComponent}>Play</button>
        </div>
      </>
    )
  }
}
