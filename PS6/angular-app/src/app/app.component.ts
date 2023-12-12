// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any; // Use the appropriate type for your data

  constructor(private http: HttpClient) {
    // Uncomment the following line if you have a live backend API
    // this.fetchDataFromBackend();
  }

  fetchDataFromBackend() {
    this.http.get<any>('http://localhost:3000/ps4/route1', { observe: 'response' }).subscribe(
      response => {
        this.data = response.body.data;
      },
      error => {
        console.error('Error fetching data from backend', error);
      }
    );
  }

  simulateFetching() {
    // Simulate fetching data from the PS4 backend (use your mock data)
    this.data = [
      // Mock data here
      { /* ... */ },
      { /* ... */ },
      { /* ... */ }
    ];
  }
}
