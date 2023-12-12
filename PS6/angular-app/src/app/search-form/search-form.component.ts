// src/app/search-form/search-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      query: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  search(): void {
    if (this.searchForm.valid) {
      this.searchEvent.emit(this.searchForm.value.query);
    }
  }
}
