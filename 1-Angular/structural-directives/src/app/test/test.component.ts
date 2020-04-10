import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  //------------------------------------*ngIf------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------------------------
  // template: `
  //             <h2 *ngIf="displayName;  else elseBlock">

  //             hilel attia
  //             </h2> 


  //           <ng-template #elseBlock >
  //             <h2>
  //             Name is hidden
  //             </h2>
  //           </ng-template>
           
  // `,
  //--------------------------------------------------------------------------------------
  //  template: `
  //       <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  //           <ng-template #thenBlock >
  //             <h2>
  //           hilel attia
  //             </h2>
  //           </ng-template>

  //           <ng-template #elseBlock>
  //           <h2>Hiiiden</h2>
  //           </ng-template>
            
           
  // `,
  //------------------------------------*ngswitch------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------------------------
    // template: `
    // <div [ngSwitch]="color">
    //   <div *ngSwitchCase="'red'">you picked red color</div>
    //   <div *ngSwitchCase="'blue'">you picked red color</div>
    //   <div *ngSwitchCase="'green'">you picked red color</div>
    //   <div *ngSwitchDefault>pick again</div>
    //   </div>
    //    `,
//------------------------------------------------------ngFor-----------------------------------------------------------------------------
//------even--odd--let color of colors --last---index--------------------------------------------------------------------------------------------------------------------------
// template: `
//   <div *ngFor ="let color of colors; odd as o "> 
// <h2> {{o}} {{color}}</h2>
//        `,
//   </div>
     //--------------------------------------------component iteraction child to parent input and --paretnt to child ---------------------------------------------------------------------------------------
     //-----------------------------------------------------------------------------------------------------------------------------------

// template: `
// <h2>

// {{"hello "+  name}}
// <button (click)="fireEvent()" >Send Event</button>

// </h2>
     
//        `,
 //-----------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------
 template: `
<h2>{{ name }}</h2>
<h2>{{ name |lowercase}}</h2>
<h2>{{ name |uppercase }}</h2>
<h2>{{ message | titlecase }}</h2>
<h2>{{ name |slice:3 }}</h2>
<h2>{{ name |slice:3:5 }}</h2>
<h2>{{ person |json }}</h2>

<h2>{{ 5.678 |number:'1.2-3' }}</h2>
<h2>{{ 5.678 |number:'3.4-5' }}</h2>
<h2>{{ 5.678 |number:'3.1-2' }}</h2>

<h2>{{ 0.25 |percent }}</h2>

<h2>{{ 0.25 |currency }}</h2>
<h2>{{ 0.25 |currency: 'GBP' }}</h2>
<h2>{{ 0.25 |currency: 'EUR':'code' }}</h2>

<h2>{{ date }}</h2>

<h2>{{ date | date:'short' }}</h2>
<h2>{{ date | date:'shortDate' }}</h2>
<h2>{{ date | date:'shortTime' }}</h2>

       `,
  styles: []
})
export class TestComponent implements OnInit {
//property 

// displayName= true;ngif
// public color ="orange";
//public colors= ["red", "blue", "green", "yellow"];ngfor

 //---------------------------------------------compnent intercation --------------------------------------------------------------------------------------

  // @Input( 'parentData') public name;

  // @Output() public childEvent= new EventEmitter();
  //----------------------------------------------- --------------------------------------------------------------------------------------
public name="hilel attia" ; 

public message =" welcome to HILEL ATTIA " ;

public person={
  "fisrtName":"yassine",
  "lastName": "elouny"
}
public date =new Date();
  constructor() { }

  ngOnInit() {
  }
  // fireEvent(){
  //   this.childEvent.emit('hey hilel attia');
  // }

}
