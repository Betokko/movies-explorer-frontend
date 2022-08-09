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

  updateUser(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization,
      },
      body: JSON.stringify(data)
    }).then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponse);
  }
  
  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization,
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  removeMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
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
