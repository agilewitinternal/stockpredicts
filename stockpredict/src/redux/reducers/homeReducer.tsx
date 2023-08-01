import { NEW } from "../actionTypes"

export type HomeProps = {
    new: string
}
const initialState: HomeProps = {
    new: "" 
}
const homeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case NEW: {
            return {
                ...state,
                new: action.payload
            }
        }
        default: 
        return state
        }
    }

export default homeReducer