import { makeTrue, makeFalse } from "./actionTypes";

const makeTrueFunc = () =>{
     return {
        type: makeTrue
     }
}

const makeFalseFunc = () => {
    return {
        type: makeFalse
    }
}

export {makeTrueFunc, makeFalseFunc};