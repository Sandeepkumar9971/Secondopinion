"use client"
import {ReducerContent} from '../dashboard/constant'

export const initialState ={
    name:'sandeep'
}

const statereducer =(state,action)=>{
    switch (action.type){
        case ReducerContent.name:
            return {
                ...state,
                name:action.name
            } 
            break;
        default :
        return state
        break;
    }

}

export default statereducer