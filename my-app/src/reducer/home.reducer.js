const initState = {
    product: [],
    id: [{ name: "PKC" }, { name: "PKM" }, { name: "TAC" }, { name: "TAM" }, { name: "NCC" }, { name: "NCM" }],
    quantity: "",
    category: [{ key: "PKC", name: "Phụ kiện cho chó" },
    { key: "NCC", name: "Nhà cho chó" },
    { key: "TAC", name: "Thức ăn cho chó" },
    { key: "PKM", name: "Phụ kiện cho mèo" },
    { key: "NCM", name: "Nhà cho mèo" },
    { key: "TAM", name: "Thức ăn cho mèo" }
    ]
}

export function homeReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                product: [...state.product, ...action.payload]
            }
        default:
            return state;
    }
}