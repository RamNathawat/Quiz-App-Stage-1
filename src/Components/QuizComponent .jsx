import React, { Component } from 'react'
import HomeComponent from './HomeComponent '

export default class  extends Component {


  render() {
    return (
        <>
            <div className='innerDiv'>
                <h2 className='questionhead'>Question</h2>
                <p className='qnNo'>1 of 15</p>
                <p className='question'>Which is the only mammel can jump?</p> 
                <div className='buttons'>
                    <button>
                        Dog
                    </button>
                    <button>
                        Elephant
                    </button>
                    <button>
                        Goat
                    </button>
                    <button>
                        Lion
                    </button>
                </div>
                <div className='downbuttons'>
                    <button className='previous'>Previous</button> <button className='next'>Next</button> <button className='quit'>Quit</button>
                </div>
            </div>
        </>
    )
  }
}
