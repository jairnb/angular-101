import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Output() notify = new EventEmitter();

  constructor() { }

  
  ngOnInit(): void {
  }

  onClicked(login: any) : void {
    console.log('form submitted' ,login)

    this.notify.emit()

  }
}
