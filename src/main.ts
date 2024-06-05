import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));







///////
/*

export class Customer {
/!*  private id: number = 1;
  optionalId?: number; // fragezeichen sollte nur eine option sein wenn es sonst nicht anders geht
  nonNullID!: number // Non-Null Assertion , dieser wert wird nicht undefinded

  constructor(idx: number) {
    this.id = idx;
  }  *!/

// shorthand
  constructor(private id: number) { }

  fooBar(arg: number): string{
    setTimeout(  () => {
      console.log("Customer number: ", arg);
    }, 2000);
    return ''
  }
}

const myCustomer = new Customer(5);
myCustomer.fooBar(2)

const foo = function (arg:number): number{
  return arg + 1
}
//shorthand
const foo2 = (arg:number) =>  arg + 1



const result = foo(5);


*/
