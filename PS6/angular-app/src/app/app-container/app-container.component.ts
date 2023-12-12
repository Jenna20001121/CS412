// src/app/app-container/app-container.component.ts
import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent {
  searchResults: any[];

  constructor(private searchService: SearchService) {}

  performSearch(query: string): void {
    this.searchService.search(query).subscribe((data) => {
      this.searchResults = data;
    });
  }
}
