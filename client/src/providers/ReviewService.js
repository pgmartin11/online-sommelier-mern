
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
  static createReview(reviewData) {
    return fetch(`${this.#apiurl}api/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
  }

  // update
  static updateReview(id, reviewData) {
    return fetch(`${this.#apiurl}api/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
  }

  // delete
  static deleteReview(id) {
    return fetch(`${this.#apiurl}api/reviews/${id}`, {
      method: 'DELETE'
    });
  }
}