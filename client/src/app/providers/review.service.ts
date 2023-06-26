import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class ReviewService {
  private apiurl: string = environment.apiurl;

  constructor(private http: HttpClient) {}

  // list
  listReviews(): Observable<any> {
    return this.http.get(`${this.apiurl}api/reviews`);
  }

  // find
  getReview(id): Observable<any> {
    return this.http.get(`${this.apiurl}api/reviews/${id}`);
  }

  // create
  createReview(reviewData): Observable<any> {
    return this.http.post(`${this.apiurl}api/reviews`, reviewData);
  }

  // update
  updateReview(id, reviewData): Observable<any> {
    return this.http.put(`${this.apiurl}api/reviews/${id}`, reviewData);
  }

  // delete
  deleteReview(id): Observable<any> {
    return this.http.delete(`${this.apiurl}api/reviews/${id}`);
  }
}
