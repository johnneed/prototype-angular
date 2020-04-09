import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {
  @Output() onToggleNav: EventEmitter<any> = new EventEmitter();
  @Output() onToggleSearch: EventEmitter<any> = new EventEmitter();

  navWasClicked(): void {
    this.onToggleNav.emit(true);
  }

  searchWasClicked(): void {
    this.onToggleSearch.emit(true);
  }

  ngOnInit(): void {

  }
}
