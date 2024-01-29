import { Injectable } from '@angular/core';
import { Cocktail } from './cocktails';
import { COCKTAILS } from './cocktail-list/mock-cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor() {}

  public getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
}
