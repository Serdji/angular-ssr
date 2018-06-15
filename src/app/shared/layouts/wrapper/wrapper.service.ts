import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WrapperService {

  public subjectToggle = new Subject();

  constructor() { }

  toggle() {
    this.subjectToggle.next();
  }
}
