import { Component, Input } from '@angular/core';
import { filter, map,  } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)="pipeFonction()">Pipe Fonction</button>
  <button (click)="mapFonction()">Map Fonction</button>
  Regarder la console pour le resultat
  
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(){}

  pipeFonction() {
    const nums = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

// Create an Observable that will run the filter and map functions
const squareOdd = squareOddVals(nums);

// Subscribe to run the combined functions
squareOdd.subscribe(x => console.log(x));

  }

mapFonction(){
  const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));
}

  
  
}


