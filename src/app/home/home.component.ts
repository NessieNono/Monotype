import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
				animate('1s 300ms ease-out')
  		])
		])
	]
})
export class HomeComponent implements OnInit {

	// Private attribute for animation 
	private left:boolean = true;
	// starts in the left 
	private top:boolean = true;
	// stars black 

	private showTitle:boolean = false;

  constructor() { }

  ngOnInit() {
  	window.setInterval(() => this.left = !this.left, 4000);
  	window.setInterval(()=> this.top =!this.top, 3000);
  }

  dropDown() {
  	this.showTitle = true;
  }
}
