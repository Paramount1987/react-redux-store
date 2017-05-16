export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_DEG = "CHANGE_DEG";
export const UPDATE_ITEM = "UPDATE_ITEM";


export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}

export function removeItem(i) {
    return {
        type: REMOVE_ITEM,
        index: i
    };
}

export function updateItem(item, i){
    return {
        type: UPDATE_ITEM,
        index: i,
        item
    }
}


