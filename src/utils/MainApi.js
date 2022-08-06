const data = {
  url: 'https://api.moviexp.nomoredomains.xyz',
  JWT: localStorage.getItem('JWT'),
};

class MainApi {
  constructor({ url, JWT }) {
    this._url = url;
    this._authorization = `Bearer ${JWT}`;
  }

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  checkValidityToken(JWT) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResponse);
  }

  updateUserInfo(data) {
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
    return fetch(`${this._url}/users/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization,
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  removeMovie(data) {
    return fetch(`${this._url}/users/me/${data._id}`, {
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
