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
function _delete(categoryId,id) {
    return fetch(`http://5d57b22e91a96a0014758a0f.mockapi.io/api/Category/${categoryId}/Product/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => data)
};
function _post(ojb) {
    return fetch("http://5d78968ba8c27100149861fa.mockapi.io/data", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ojb)
    })
        .then(res => res.json())
        .then(data => data)
};
function _edit(id, obj) {
    return fetch(`http://5d78968ba8c27100149861fa.mockapi.io/data/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => data)
}
export const AppService = {
    _get,
    _search,
    _delete
}