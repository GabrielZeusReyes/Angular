import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
	<div>
		<h2 [class]="successClass">Hello {{name}}!</h2>
		<p>Interpolation</p>
		<p>// Interpolation doesn't work on boolean properties, use Property binding instead</p>
		<p>Concatination: {{"Welcome " + name}}</p>
		<p>Length: {{name.length}}</p>
		<p>.toUppercase: {{name.toUpperCase()}}</p>
		<p>Function: {{greetUser()}}</p>
		<p>{{siteUrl}}</p>
		<p>Property Binding</p>
		<input type="text" [id]="myId" />
		<input [disabled]="isDisabled" type="text" id="{{myId}}" />
		<input bind-disabled="isDisabled" type="text" id="{{myId}}" />
		<p>Class binding</p>
		<p>//Single Class</p>
		<h2 [class.text-danger]="hasError">Code Master</h2>
		<p>//Multiple Classes</p>
		<h2 [ngClass]="messageClasses">Codevolution</h2>
	</div>
  `,
  // styleUrls: ['./test.component.css']
  styles: [`
  	div {
  		color: #020202;
  	}
  	.text-success {
  		color: green;
  	}
  	.text-danger {
  		color: red;
  	}
  	.text-special {
  		font-style: italic;
  	}
  `]
})
export class TestComponent implements OnInit {
  
  public name = 'Codevolution';
  public siteUrl = window.location.href;
  public myId = "tedId";
  public isDisabled = true;
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
  	"text-success": !this.hasError,
  	"text-danger": this.hasError,
  	"text-special": this.isSpecial
  }

  age:number;
  
  constructor() { }

  ngOnInit() {
  	this.age = 21;
  }

  greetUser() {
  	return "Hello " + this.name + ", you are " + this.age + " years old!";
  }

}
