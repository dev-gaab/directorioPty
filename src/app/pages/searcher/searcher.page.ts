import { Component, OnInit } from '@angular/core';
import { Search } from '../../services/search.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.page.html',
  styleUrls: ['./searcher.page.scss'],
})
export class SearcherPage implements OnInit {

  search: Search = {
    search: '',
    city: ''
  };

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.search);
  }

}
