import { createSlice } from '@reduxjs/toolkit';

const user=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,{payload}){
            console.log("state",state)
            return state=payload
        }
    }
})

export const {addUser}=user.actions;
export default user.reducer
