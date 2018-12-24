import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() displayDetail: boolean;
  @Input() hitNumber: number;
  @Output() filterValueChanged: EventEmitter<string> =
      new EventEmitter<string>();

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(val: string) {
    this._listFilter = val;
    this.filterValueChanged.emit(val);
  }

  hitMessage: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // Scatta ogni qual volta cambia una varibile marchiata come
  // @Input, oppure [ngModel]
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitNumber'] && !changes['hitNumber'].currentValue) {
      this.hitMessage = 'No matches';
    } else {
      this.hitMessage = 'Hit: ' + this.hitNumber;
    }
  }

  ngAfterViewInit(): void {
    if (this.filterElementRef.nativeElement) {
      this.filterElementRef.nativeElement.focus();
    }
  }
}
