class MovieApi {
  getCards() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
      if (!res.ok) {
        throw new Error(`Статус ошибки: ${res.status}`);
      }
      return res.json();
    });
  }
}
const movieApi = new MovieApi();
export default movieApi;
