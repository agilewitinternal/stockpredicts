import { NEW } from "../actionTypes"

export const setNewUser = (value: any) => {
    return {
        type: NEW,
        payload: value
    }
}