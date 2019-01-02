import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class ReactiveStateService {

  public people: Person[] = [
    {
      'Name': 'Alberto',
      'Surname': 'Arpini'
    },
    {
      'Name': 'John',
      'Surname': 'Doe'
    }
  ];

  private peopleSource: Subject<Person> = new Subject<Person>();

  public peopleObsevable$: Observable<Person>;

  constructor() {
    this.peopleObsevable$ = this.peopleSource.asObservable();
  }

  getPeople(): Person[] {
    return this.people;
  }

  setCurrentPerson(person: Person) {
    this.peopleSource.next(person);
  }

  addNewPerson(person: Person) {
    this.people.push(person);
    this.peopleSource.next(person);
  }

}
