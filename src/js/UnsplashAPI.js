export class UnsplashAPI {
    _BASE_URL = "https: //api.unsplash.com/search/photos";
    _API_KEY = "gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58";

    getPopularsFhotos(page) {
        const url = `${this._BASE_URL}?query=popular&page=${page}&per_page=12&orientation=portrait&client_id=${this._API_KEY}`

        return fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }).catch(err => console.log("error"))
    }
}