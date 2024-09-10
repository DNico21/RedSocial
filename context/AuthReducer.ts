import { useReducer } from "react"



export interface AuthState{
    user?:any,
    isLogged: boolean,
}


type ActionsProps = {type:"LOGIN", payload: any} | {type:"LOGOUT"}


export const AuthReducer = (state: any, actions:any)=>{

    

    switch(actions.type){
        case "LOGIN":
            return{
                ...state,
                user: undefined,
                isLogged: true
            }
            case "LOGOUT":
            return{
                ...state,
                user: undefined
            }
            default:
                return state
        }
}