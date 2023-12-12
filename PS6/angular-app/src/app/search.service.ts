// src/app/search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = '/ps4/search';  // Update with your backend API endpoint

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { query });
  }
}
