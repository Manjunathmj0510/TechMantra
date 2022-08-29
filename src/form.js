import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { studentQuestion } from './studentReducer';
import { useNavigate } from 'react-router';


const Form = () => {
    const [amount,setAmount] = useState('')
  const [category,setCategory] = useState('')
  const [difficulty,setDifficulty] = useState('')
  const [encode,setEncode] = useState('')
  const [type,setType] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
//   useEffect(()=>{
//     axios.get('https://opentdb.com/api.php?' + amount=='' ?'':`amount=${amount}`+ category == '' ? '': `&category=${category}`+ difficulty == '' ? '':`&difficulty=${difficulty}`+ encode == '' ? '':`&encode=${encode}` + type==''?'':`&type=${type}`).then(res=>console.log(res))
//   },[])

  const Formsubmit = (e) => {
      e.preventDefault();
      axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&encode=${encode}&type=${type}`)
      .then(res=>{
          if(res.data.response_code == 0){
            console.log(res.data.results)
              dispatch(studentQuestion(res.data.results))
              navigate('/questions')
          }else{
            navigate('/')
          }
      })

  }

    return (
        <div>
        <form onSubmit={Formsubmit}>
      <label>Number of students:</label><br/>
      <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option>Select category</option>
      <option value={18}>science</option>
      <option value={19}>entertainment</option>
      <option value={20}>sports</option>
      </select><br/>
      <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
      <option>Select difficulty</option>
      <option value='easy'>easy</option>
      <option value='medium'>medium</option>
      <option value='hard'>hard</option>
      </select><br/>
      <select value={type} onChange={(e)=>setType(e.target.value)}>
      <option>Select type</option>
      <option value='multiple'>multiple choice</option>
      <option value='boolean'>true/false</option>
      </select><br/>
      <select value={encode} onChange={(e)=>setEncode(e.target.value)}>
      <option>Select encoding</option>
      <option value='base64'>Legacy URL Encoding</option>
      <option value='url3986'>URL Encoding(RFC 3936)</option>
      <option value='base64'>base64 Encoding</option>
      </select><br/>
      <button type='submit'>generate</button>
      </form>
      </div>
    )
}

export default Form