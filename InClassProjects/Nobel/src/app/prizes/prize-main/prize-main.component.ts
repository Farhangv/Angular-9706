import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-main',
  templateUrl: './prize-main.component.html',
  styleUrls: ['./prize-main.component.css']
})
export class PrizeMainComponent implements OnInit {


  pageTitle = 'لیست جوایز';

  _filterPhrase = '';
  set filterPhrase(filter:string){
    this._filterPhrase = filter;
    this.perfomFilter(filter);
  }
  get filterPhrase():string{
    return this._filterPhrase;
  }

  constructor() { }

  ngOnInit() {
  }
  perfomFilter(filter: string): any {
    ;
  }
}
