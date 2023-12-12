// src/app/search-result/search-result.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() results: any[];

  // Add any additional logic or formatting as needed
}
