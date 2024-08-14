import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
  food!:food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService) {
      activatedRoute.params.subscribe(params => {
        if(params['id'])
          this.food = foodService.getFoodById(params['id'])
     })
    }
  }
