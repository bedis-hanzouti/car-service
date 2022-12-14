import { Component ,OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-matricule',
  templateUrl: './matricule.component.html',
  styleUrls: ['./matricule.component.scss']
})
export class MatriculeComponent implements OnInit {
  
  activedStep = 0;
   state :any
  display=false;

  model :any = {};
  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
        {
          key: 'tel',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Car Data ',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    },

  ];

  // form = new FormArray(this.steps.map(() => new FormGroup({})));
  // form = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  form= new FormGroup({});
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step:any) {
    this.activedStep = step - 1;
  }

  nextStep(step:any) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model.country));
  }

  firstFormGroup = new FormGroup({});
  secondFormGroup=new FormGroup({});
  isEditable = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
