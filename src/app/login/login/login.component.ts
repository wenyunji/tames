import { Component, OnInit } from '@angular/core';
import { Form,FormGroup,Validators,FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form=this.fb.group({
      email:new FormControl('wen@qq.com',Validators.compose([Validators.required,Validators.email])),
      possword:new FormControl('',Validators.required)
    })
  }
  onSubmit({value,valid},ev:Event){
   ev.preventDefault();
   console.log(JSON.stringify(value))
   console.log(valid)
  }
}
