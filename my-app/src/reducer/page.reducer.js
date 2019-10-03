import cartStorage from './../storage/cartStorage'
const initState = {
    product: [],
    isLoading: true,
    menuItem : {
        "Cho": [{key: "PKC",value:"Phụ kiện cho chó"}, {key: "NCC", value:"Nhà cho chó"},{ key:"TAC", value:"Thức ăn cho chó"}],
        "Meo": [{key: "PKM", value: "Phụ kiện cho mèo"},{key:"NCM", value: "Nhà cho mèo"},{key:"TAM", value:"Thức ăn cho mèo"}]
    },
    menuName : {
        "Cho": "Mua đồ cho Chó",
        "Meo": "Mua đồ cho Mèo"
    },
    keyword: "",
    catalogName: "",
    selectedItem: {id:"", avatar:"", name:"", price:""},
    badge: cartStorage._getLength(),
}

export function pageReducer(state = initState, action) {
    switch (action.type) {
        case "FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_PRODUCT":
            return {
                ...state,
                product:  [...state.product, ...action.payload],
                isLoading: false,
            }
        case "SET_CATALOG":
            return {
                ...state,
                isLoading: false,
                catalogName: action.payload
            }
        case "GET_SELECTEDITEM":
            return {
                ...state,
                selectedItem: action.payload
            }
        case "SET_BADGE":
            return {
                ...state,
                badge: action.payload
            }
        case "CHANGE_KEYWORD": 
            return {
                ...state,
                keyword: action.payload
            }
    }
    return state
}