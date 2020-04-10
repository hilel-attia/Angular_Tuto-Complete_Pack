import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //template: ' <h1>{{name}}</h1> <h2>{{3+3}}</h2> <h2>{{"welcome " +name }}</h2> <h2>{{name.length}}</h2> <h2>{{name.toUpperCase()}}</h2> <h2>{{myFunction() }}</h2>{{ }}<h2></h2>',
  // template :`<h1> welcome {{name}}</h1>
  //         <input  [id]="myId" type="text" value="hilel">
  //          <input  bind-disabled="isDisabled" id="{{myId}}" type="text" value="hilel">
  //              `,


  //------------------------------------------------------------------------------------------------------------------------------------
//----------------INTERPOLATION------------------------------------------------------------------------------------

  // template :`<h1> welcome {{name}}</h1>
  // <h2 class="text-success">Hilelattia</h2>
  // <h2 [class]="successClass">Hilelattia</h2>
  // <h2 [class.text-danger]="hasError">Hilelattia</h2>

  // <h2 [ngClass]="messageClass">Hilelattia</h2>
  // `,

  //------------------------------------------------------------------------------------------------------------------------------------
  //----------------Event Binding------------------------------------------------------------------------------------
        // template :`<h1> welcome {{name}}</h1>
        // <button (click)="onClick($event)">Greet</button>
        // <button (click)="greeting='welcome Hilel'">Greet</button>
        // {{greeting}}
        // `,
//------------------------------------------------------------------------------------------------------------------------------------
//----------------Template reference -----------------------------------------------------------------------------------
//   template :`<h1> welcome {{name}}</h1>
//  <input #myInput  type="text">
//   <button (click)="logMessage(myInput.value)">Log</button>
//   `,


  template :`<input [(ngModel)]="name"  type="text">
              {{name}}

  `,


  styles: [`



  `]
})
export class TestComponent implements OnInit {

  public name =" ";
  // public myId ="testID";
  // public isDisabled=true;
//   public successClass ="text-success";
//   public hasError =true;
//   public isSpecial =true;
//   public messageClass={
// "text-success": !this.hasError,
// "text-danger": this.hasError,
// "text-special":  this.isSpecial
//   }
// public greeting ="";


  constructor() { }

  ngOnInit() {

  }
    // myFunction(){
    // return "Hello " + this.name;
    // }
  //-------------------------------------------------------
    // onClick(event){
    //   console.log(event);
    //   this.greeting =event.type ;
    // }
//-------------------------------------------------------
logMessage(value){
  console.log(value);
}
//-------------------------------------------------------
}
