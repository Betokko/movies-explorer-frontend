const data = {
  url: 'https://api.moviexp.nomoredomains.xyz',
  JWT: localStorage.getItem('JWT'),
};

class MainApi {
  constructor({ url, JWT }) {
    this._url = url;
    this._authorization = `Bearer ${JWT}`;
  }

  getUser(JWT) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }

  updateUser(data, JWT) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify(data)
    }).then(this._checkResponse);
  }

  getMovies(JWT) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }
  
  addMovie(data, JWT) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  removeMovie(id, JWT) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
}



export const mainApi = new MainApi(data);
