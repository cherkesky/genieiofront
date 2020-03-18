const remoteURL = "http://localhost:8000";


export default {

  delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "DELETE",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("genieio_token")}`
      }
    });
  },
  
  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("genieio_token")}`
      }
    }).then(result => result.json());
  },
//no token
  getAllNoAuth(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`, {
      "method": "GET"
    }).then(result => result.json());
  },
  
  get(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("genieio_token")}`
      }
    }).then(result => result.json());
  },
  getNoAuth(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      "method": "GET"
    }).then(result => result.json());
  },

    update(route, editedItem) {
    return fetch(`${remoteURL}/${route}/${editedItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("genieio_token")}`
      },
      body: JSON.stringify(editedItem)
    })
    // .then(data => data.json());
  },

  post(endpoint, object) {
    return fetch(`${remoteURL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("genieio_token")}`
        },
        body: JSON.stringify(object)
    }).then(data => data.json())
}
};

