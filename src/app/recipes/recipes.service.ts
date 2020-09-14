import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1515557737/asxtrr2ga1os4abfmuoe.jpg',
      ingredients: ['Nasi','Bawang Putih','Kecap','Cabai']
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2019/01/gado-gado-MAHI-780x440.jpg',
      ingredients: ['Lontong','Tempe','Tahu','Timun']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })}
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
