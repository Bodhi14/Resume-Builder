import { makeTrue, makeFalse } from "../actionTypes/actionTypes";

const initial = {
    variable : false,
}

export default function reducer(state=initial, action) {
        switch (action.type) {
            case makeTrue:
                    return {
                        ...state, 
                        variable : true,
                    };
                

            case makeFalse: 
                    return {
                        ...state,
                        variable : false,
                    }
                

            default :
                return state;
        };
}