import { Component, OnInit } from '@angular/core';
import { ReactiveStateService } from './reactive-state.service';
import { Person } from './person';

@Component({
  selector: 'app-reactive-state-source',
  templateUrl: './reactive-state-source.component.html'
})
export class ReactiveStateSourceComponent implements OnInit {

  constructor(private reactiveStateService: ReactiveStateService) { }

  get people(): Person[] {
    return this.reactiveStateService.getPeople();
  }

  ngOnInit() {
  }

  onPersonSelected(person: Person) {
    this.reactiveStateService.setCurrentPerson(person);
  }

  onAddPerson() {
    this.reactiveStateService.addNewPerson({Name: 'Test', Surname: 'Test'});
  }

}
