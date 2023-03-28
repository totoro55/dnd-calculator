const defaultState = {
    components: [],
}

const SET_COMPONENTS = "SET_COMPONENTS"




export const calculatorComponentsReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case SET_COMPONENTS:
            return {...state, components: action.payload}
        default:
            return state
    }
}

export const setComponentsAction = (payload) => ({type:SET_COMPONENTS, payload})

