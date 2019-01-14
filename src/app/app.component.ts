import { Component, ViewEncapsulation } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router'; // for animating the navbar 
// Import animations for sliding transitions
import { trigger, state, style,animate, transition, query, group} from '@angular/animations';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [
    trigger('routerTransition', 
      [
        transition('* <=> *', [
          /* 1 */ query(':enter, :leave', style({width:'100%' })
                , { optional: true }),
          /* 2 */ group([  // animations execute parallel
                    query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('3s', // enter slowly
                      style({ transform: 'translateX(0%)' }))], { optional: true }),
                  query(':leave', [ // leave quickly
                    style({ transform: 'translateX(0%)' }), 
                    animate('1s'), 
                    style({ transform: 'translateX(-100%)'})], { optional: true})]
      )])]
    )
  ]
})
export class AppComponent {
	title = 'monotype';

constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }


  // For Router Animations
  getState(outlet) {
    console.log("getting the router!!", outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }

}
