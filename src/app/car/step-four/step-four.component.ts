import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  public stepFourForm: FormGroup;
state:any
  constructor(private fb: FormBuilder) {
    this.stepFourForm = this.fb.group({
      phoneNumber: this.fb.control(''),
      email: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepFourSubmit() {
    this.state = 'done';
  }

}
