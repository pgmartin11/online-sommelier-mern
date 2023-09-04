
export class ReviewService {
  // private field
  static #apiurl = "http://localhost:8088/";

  constructor() {}

  // list
  static listReviews() {
    return fetch(`${this.#apiurl}api/reviews`);
  }

  // find
  static getReview(id) {
    return fetch(`${this.#apiurl}api/reviews/${id}`);
  }

  // create
  //createReview(reviewData): Observable<any> {
  //  return this.http.post(`${this.apiurl}api/reviews`, reviewData);
  //}

  // update
  //updateReview(id, reviewData): Observable<any> {
  //  return this.http.put(`${this.apiurl}api/reviews/${id}`, reviewData);
  //}

  // delete
  static deleteReview(id) {
    return fetch(`${this.#apiurl}api/reviews/${id}`, {
      method: 'DELETE'
    });
  }
}