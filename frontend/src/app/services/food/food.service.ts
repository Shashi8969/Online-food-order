import { Injectable } from '@angular/core';
import { food } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';
import { sample_foods, sample_tags } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):food[]{
   /* if(tag== 'all')
      return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));*/

  //Write this statement is very simple type lets do it.
  return tag =="All" ?
    this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return sample_tags
  }
  getAll():food[]{
    return sample_foods;
  }
}
