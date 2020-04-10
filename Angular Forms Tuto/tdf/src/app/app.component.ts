import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics = ['Angular', 'React' , 'Vue'];
 topicHasError= true;
 submitted=false;
  errorMSg='';
 userModel= new User ('hilel','hilel@gmail.com', 9652147836, 'default', 'morning', true );

constructor(private _enrrollmentService :EnrollmentService) { }

 validateTopic(value){
   if (value === 'default'){
     this.topicHasError=true;
   }else{
     this.topicHasError=false;
   }
 }

 onSubmit(userForm){
  this.submitted = true;
   console.log(userForm);
  this._enrrollmentService.enroll(this.userModel)
  .subscribe(
    data =>console.log('succes!!!!', data),
    error =>this.errorMSg =error.statusText
  )
 }
}
