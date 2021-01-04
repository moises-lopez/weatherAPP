import React, { Component, createContext } from 'react';

const globalState = {
    city: "",
    result: "",
    chatbot: false
};

const main = createContext(globalState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {...state, chatBot: !state.chatbot}
        case 'CHANGE_CITY':
            return {...state, city: action.payload.city}
        case 'SET_STATE':
            return {...state, result: action.payload.result}
        default: 
            return state
    }
}

export {main, mainStateReducer}