import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-up-skills';

  submit(){
    alert ("Thank you for giving your details");
  }

  months = ["Welcome", "Rhanzu","Bafana","Mother"];

  isavailable = true;

  angForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['',Validators.required]
    });
  }

}
