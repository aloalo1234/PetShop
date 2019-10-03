const initState = {
    product: [],
    id: [{ name: "PKC" }, { name: "PKM" }, { name: "TAC" }, { name: "TAM" }, { name: "NCC" }, { name: "NCM" }],
    quantity: ""
}

export function homeReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                product: [...state.product, ...action.payload]
            }
        default :
            return state;
    }
}