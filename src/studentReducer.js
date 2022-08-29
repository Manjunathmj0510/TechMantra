import { createSlice } from '@reduxjs/toolkit'
export const studentSlice = createSlice({
name:'student',
initialState:{
    studentQuestions:[]
},
reducers:{
    studentQuestion:(state,action)=>{
        state.studentQuestions = action.payload
    }
}
})

export const {studentQuestion} = studentSlice.actions
export default studentSlice.reducer