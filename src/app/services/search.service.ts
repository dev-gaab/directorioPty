import { Injectable } from '@angular/core';

export interface Search {
  search: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
}
