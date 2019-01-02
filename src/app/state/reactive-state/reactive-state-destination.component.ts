import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { ReactiveStateService } from './reactive-state.service';

@Component({
  selector: 'app-reactive-state-destination',
  templateUrl: './reactive-state-destination.component.html'
})
export class ReactiveStatedestinationComponent implements OnInit {

  person: Person;

  constructor(private reactiveStateService: ReactiveStateService) { }

  ngOnInit() {
    this.reactiveStateService.peopleObsevable$.subscribe( person => {
      this.person = person;
    });
  }

}
