import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'], 
  animations: [
  	trigger( 'sideToSide', [
			// Define our states
		  state('left', style({ left: '-5%'})),
		  state('right', style({ left: '5%'})),
			transition('left => right', [ animate('4s')]),
			transition('right => left', [ animate('4s')]),		
		]), 
  	trigger( 'topToBottom', [
			// Define our states
		  state('top', style({ top: '-10px'})),
		  state('bottom', style({ top: '10px'})),
			transition('top => bottom', [ animate('3s ease-out')]),
			transition('bottom => top', [ animate('3s ease-out')]),		
		]),
		trigger('showTitle', [
			state('flyIn', style({ transform: 'translateY(0)' })),
			transition(':enter', [
				style({ transform: 'translateY(-100%)' }),
				animate('3s ease-out', keyframes([
					style({ transform: 'translateY(-100%)', offset:0 }), 
					style({ transform: 'translateY(-5%)', offset:0.7 }), 
					style({ transform: 'translateY(5%)', offset:0.8 }), 
					style({ transform: 'translateY(-4%)', offset: 0.85}), 
					style({ transform: 'translateY(4%)', offset: 0.9}), 
					style({ transform: 'translateY(-1%)', offset: 0.95}), 
					style({ transform: 'translateY(0%)', offset: 1}), 
					]))
  		])
		])
	]
})
export class HomeComponent implements OnInit {

	// Private attribute for animation 
	private left:boolean = false;
	// starts in the left 
	private top:boolean = true;
	// stars black 
	private showTitle:boolean = false;

  constructor() { }

  ngOnInit() {
  	this.left = ! this.left; 
  	window.setInterval(() => this.left = !this.left, 4000);
  	this.top = ! this.top;
  	window.setInterval(()=> this.top =!this.top, 3000);
  }


  dropDown() {
  	this.showTitle = true;
  }
}
