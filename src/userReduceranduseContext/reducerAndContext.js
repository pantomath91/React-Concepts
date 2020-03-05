import { useContext } from "react";
import { useReducer } from "react";

const MyContext = createContext();
const istate = {
    name:"Sachin"
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name:action.payload
            }
        default:
         return state

    }
}

const coder = ()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <h1>I am coder 2</h1>
    <h2>{myName.name}</h2>
            <Coder2/>
        </div>
    )

}

const coder2 = ()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <h1>I am coder 2</h1>
            <h2>{myName.name}</h2>
            <button onClick={()=>myName.dispatch({type:"CHANGE_NAME",payload:"Suresh"})}>let's change it</button>
            <Coder3/>
        </div>
    )

}

const coder3 = ()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <h1>I am coder 3</h1>
            <h2>{myName.name}</h2>
        </div>
    )

}
function App(){
    const [data,dispatch] = useReducer(reducer,istate);
    return(
        <MyContext.Provider value={{name:data.name,changeName:dispatch}}>
            <div className="App">
                <h1>coder's never quit</h1>
            </div>
        </MyContext.Provider>
    )
}