class cartStorage {
    constructor(key) {
        this._key = key
    }

    _get() {
        let product = localStorage.getItem(this._key)
        if (product) {
            return JSON.parse(product)
        } else {
            const initProduct = []
            this._set(initProduct)
            return initProduct
        }
    }
    _set(value) {
        value = JSON.stringify(value)
        localStorage.setItem(this._key, value)
    }
    _delete(id) {
        const list = this._get();
        const findItem = list.find(v => {
            return v.id == id
        })
        const newList = list.filter(v => {
            return v != findItem
        })
        this._set(newList)
    }
    _getLength() {
        const currentList = this._get();
        const countQuantity = currentList.reduce((acc, currValue) => {
            const quantity = currValue.quantity;
            const count = acc + quantity;
            return count;
        }, 0)
        return (countQuantity === 0)
            ? ""
            : countQuantity;
    }
    _changeQuantity(id, quantity) {
        const List = this._get()
        const newList = List.map(v => {
            if (v.id === id)
            v.quantity = quantity
            return v
        })
        this._set(newList)
        console.log(List)

    }
    _addProduct(product) {
        const oldList = this._get();
        const isExist = oldList.find(v => v.id === product.id)
        if (!isExist && product.quantity > 0) {
            oldList.push(product)
            this._set(oldList)
        }
    }
}

export default cartStorage = new cartStorage("product");