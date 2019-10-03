function  _get (id) {
    return fetch(`http://5d57b22e91a96a0014758a0f.mockapi.io/api/Category/${id}/Product`)
        .then(res => res.json())
        .then(data => data)
};
function _search(id,filter) {
    return fetch(`http://5d57b22e91a96a0014758a0f.mockapi.io/api/Category/${id}/Product?search=${filter}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
}
export const AppService = {
    _get,
    _search
}