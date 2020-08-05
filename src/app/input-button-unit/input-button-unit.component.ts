import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input class="todo-input"
       #inputElementRef
       [value]="title"
       (keyup.enter)="submitValue($event.target.value)">

  <button class="button" (click)="submitValue(inputElementRef.value)">
    ADD TASK
  </button>
`,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {}
  
  submitValue(newTitle: string) {
	this.submit.emit(newTitle);
  }
}
