import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktails';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailServiceService) {}
  getCoktails(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

  ngOnInit(): void {
    this.getCoktails();
  }
}
