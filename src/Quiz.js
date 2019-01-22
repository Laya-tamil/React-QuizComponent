import React,{ Component } from 'react'

let quizData = requried('./quiz_data.json')

    class Quiz extends Component {
    constructor(props){
    super(props)
    this.state= {quiz_position:1}
    }

render (){
        return (
            <div><div className="quizQuestion">{quizdata.quiz_question[0].instruction_text}</div></div>
        )
        }
    }
export default Quiz
