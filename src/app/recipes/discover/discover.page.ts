import { Component, OnInit } from '@angular/core';
import { RecipesService } from  '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[]
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewWillEnter(){
    this.recipes =  this.recipesService.getAllRecipes()
  }

}
