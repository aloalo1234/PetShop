class userStorage {
    constructor(key){
        this._key = key
    }
    _get() {
        let users = localStorage.getItem(this._key)
        if (users) {
            return JSON.parse(users)
        } else {
            const userAdmin = [{ username: 'admin', password: 'admin' }]
            this._set(userAdmin)
            return userAdmin
        }
    }
    _set(value) {
        value = JSON.stringify(value)
        localStorage.setItem(this._key, value)
    }
}
export default userStorage = new userStorage('users');