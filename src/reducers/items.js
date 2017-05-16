import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM
} from "../actions/items";

const initialState = {
    items: []
}

export function items(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return  {
                ...state,
                items: [...state.items, action.item]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.index),
                    ...state.items.slice(action.index + 1)
                ]
            };
        case UPDATE_ITEM:
            return {
              ...state,
                items: state.items.map((item, i) =>{
                  return i === action.index ? action.item : item
              })
            };
        default:
            return state;
    }
}