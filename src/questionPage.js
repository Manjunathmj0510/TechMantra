import Raect, { useState } from 'react'
import { useSelector } from 'react-redux';

const QuestionPage = () =>{
    const [checked,setChecked] = useState('')
    const [answers,setAnswers] = useState([])
    const [wronganswers,setWronganswers] = useState([])
    const [rightanswers,setRightanswers] = useState([])
    const questions = useSelector(state=>state.persistedReducer.studentQuestions)
    const setAnswer = (e,answer) =>{
      let getanswers = []
      let wrong = []
      let right = []
      if(e.target.checked){
      getanswers.push(answer)
      setAnswers([...answers,...getanswers])
      for (let i = 0; i < questions.length;i++){
          if(answer == questions[i].incorrect_answers[i]){
              wrong.push(answer)
          }else if(answer == questions[i].correct_answer){
              right.push(answer)
          }
      }
      setWronganswers([...wronganswers,...wrong])
      setRightanswers([...rightanswers,...right])
    }else{
        setAnswers(answers.filter(res=>res != answers))
        setWronganswers(wronganswers.filter(res=>res != answers))
      setRightanswers(rightanswers.filter(res=>res != answers))
    }
    console.log(answers)
    console.log(wronganswers)
    console.log(rightanswers)
    }
     const findAnswers = (e) =>{
         e.preventDefault();
        if(wronganswers.length < rightanswers.length){
            alert('you have given correct answers for' + "" + rightanswers.length + "" + 'questions')
        }else{
            alert('you have given correct answers for' + "" + rightanswers.length + "" + 'questions' + 'but failed! to answers more')
        }
     }
    return (
        <div style={{textAlign:'left'}}>
        <form onSubmit={findAnswers}>
        {questions.map((res,index) =>
            <>
        <label>{index+1}. {res.question.replace('%27',"").replace('%27%20','').replace('%3F',"").replace('%20','')}</label><br/>
        {res.type == 'boolean' ? <><input id='inputs' type='checkbox' onChange={(e)=>setAnswer(e,e.target.value)} value='true'/><strong>True</strong><br/>
        <input id='inputs' type='checkbox' onChange={(e)=>setAnswer(e,e.target.value)} value='true'/><strong>True</strong></> :''}
        {res.type != 'boolean' ?  <><input id='inputs' type='checkbox' onChange={(e)=>setAnswer(e,res.correct_answer)} value={res.correct_answer}/><strong>{res.correct_answer.replace('%20',"").replace('%2',"").replace('%3',"").replace('%3',"")}</strong>
        {res.incorrect_answers.map((res1,i) =>
        <><input id='inputs' type='checkbox' onChange={(e)=>setAnswer(e,res1)} key={i} value={res1}/><strong>{res1.replace('%20',"").replace('%2',"").replace('%3',"")}</strong></>
        )}<br/>
        </>:''}
        </>
        )}
        <button type='submit'>submit your answers</button>
        </form>
        </div>
    )
}
export default QuestionPage