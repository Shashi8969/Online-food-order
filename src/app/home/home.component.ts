import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { CommonModule } from '@angular/common';
import { food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  foods:food[]=[];
  constructor(private fs:FoodService, private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
        if(params['searchItem'])
          this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        else if(params['tag'])
          this.foods = this.fs.getAllFoodByTag(params['tag'])
        else
          this.foods=this.fs.getAll(); //Done
    })
    
  }
}
