import { types } from "../Types/Index";

export const AuthReducer = (state = {}, action) => {

    switch (action?.type) {
        case types.login:
            
            return {
                ...action.payload,
                logeado : true
            }
        case types.logout:
            
            return {
                logeado : false
            }
    
        default:
            return state;
    }

};
