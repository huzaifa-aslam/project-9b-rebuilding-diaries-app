import {useDispatch} from 'react-redux'
import {addUser} from './userSlice'

export const getData=(schma,req)=>{
    const dispatch=useDispatch()

    console.log("req",req.requestBody)
    dispatch(addUser(req.requestBody))
    console.log("dispatvh is called")
}
