# Monotype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




---------------------------------------------------------------------------------------------------
# Resources
[Main Tutorial](https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/)
[Why Should I use Reactive Forms?](https://stackoverflow.com/questions/45255218/angular2-4-what-for-should-i-use-reactive-forms-when-there-is-built-in-formsmod)
[Angular Material](https://www.tutorialspoint.com/angular_material/angular_material_overview.htm)
[Changing Entire BG Color](https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular)
[Website Inspiration](https://relativityoftime.net/)
[Angular Animations for Loading](https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554)
[ExpressionChangedAfterItHasBeenChecked](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4)
* This check is a safeguard, not a bug
[Enter Leave Animations](https://medium.freecodecamp.org/how-to-use-animation-with-angular-6-675b19bc3496)
[Free Ink Splatters](https://every-tuesday.com/freebie-mini-ink-splatter-textures/)
[Removing Blue Outline](https://gist.github.com/juliuscsurgo/4440047)
[Inspiration](https://medium.com/new-story)
[Databinding Angular 7](https://www.positronx.io/introduction-data-binding-angular-7/)
[Regex for Accurate wordcount using JS](https://stackoverflow.com/questions/4593565/regular-expression-for-accurate-word-count-using-javascript)
[Form Submission Connection Error](https://stackoverflow.com/questions/42531167/angular-2-form-submission-canceled-because-the-form-is-not-connected)
[Naming Collections in Mongodb](https://stackoverflow.com/questions/9868323/is-there-a-convention-to-name-collection-in-mongodb)
[Supercharge Router Transition Features Using Animation](https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8)

### LifeCycle Hooks

A Component has a lifecycle that is managed by ANGULAR. Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM. Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.

### Digest Cycles 
Angular is a MDC framework. So when the model is changed, the view is automatically updated with the help of a loop called a digest cycle.

### Angular Enter & Leave Animations
:Enter Void => *
:Leave *=> void
We do not need to use ngAfterViewInit(), but we can just use the state(), followed by a transition function to make it work
[Angular Animations with 5 Examples](https://www.youtube.com/watch?v=mVqQDEtRBwA&t=95s)



---------------------------------------------------------------------------------------------------
# Features 
* Perform CRUD Operations on journal entries
* Form Validation 

---------------------------------------------------------------------------------------------------
# Checklist 

- [x] Animation on page load of front page
- [x] Create lite monochrome theme
- [x] Implement Bouncing Title 
- [x] Add word count on the bottom
- [x] ActiveRouteActivated
- [x] Make the lists have a preview of the first 100 words, followed by ...
- [x] Confirmation after a create entry
- [x] Make the edit page clean
- [ ] Make about page
- [ ] Animations on each page to seem dynamic 
- [ ] Make the icons only if on phone


---------------------------------------------------------------------------------------------------
# Notes 
start Using Visual Studio code, apparently best for jS developement

* How to use Angular Services in a module 
    1. import the service 
    2. inject it into the constructor 
    3. Create wrapper functions

### CREATING BACKEND API
Inside the angular root folder, create one folder called api and go inside that folder. Remember, it will be a completely separate project from Angular. So its node_modules are different from an Angular.

### Mongoose ORM
Mongoose is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful. 


### Cannot match any routes 
Us e
`./edit/:_id`

### Google fonts 
font-family: 'Coiny', cursive;
font-family: 'Open Sans', sans-serif;


### Form Warnings which im not gonna use

```
<div *ngIf="angForm.controls['entry_title'].invalid && (angForm.controls['entry_title'].dirty || angForm.controls['entry_title'].touched)" 
class="alert alert-danger warning-container">
<div *ngIf="angForm.controls['entry_title'].errors.required" 
class="warning">
Please enter a title.
</div>
</div>

```

```
<div *ngIf="angForm.controls['entry_body'].invalid && (angForm.controls['entry_body'].dirty || angForm.controls['entry_body'].touched)" 
class="alert alert-danger warning-container">
<div *ngIf="angForm.controls['entry_body'].errors.required"
class="warning">
Please enter a body.
</div>
</div>


```
