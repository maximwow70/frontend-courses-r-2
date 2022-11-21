import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public contactsForm: FormGroup = new FormGroup({
    text: new FormControl('I want to know smth...', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[^s@]+@[^s@]+.[^s@]+$'),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    if (this.contactsForm.valid) {
      // ...
    }
  }
}
