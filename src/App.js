import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './form'
import QuestionPage from './questionPage';

//https://opentdb.com/api.php?amount=20&category=23&difficulty=medium

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Form/>}/>
    <Route exact path='/questions' element={<QuestionPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
