import { Injectable } from '@angular/core';
import { food } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';

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
    return [
      {name:'All', count:11},
      {name:'FastFood', count: 4},
      {name:'Pizza', count: 2},
      {name:'Lunch', count: 3},
      {name:'SlowFood', count: 2},
      {name:'Soup', count: 1},

    ];
  }
  getAll():food[]{
    return[
      {
        id:1, 
        name:'Salad', 
        cookTime: '10-15 ',
        price: 10,
        favorite: true,
        origins: ['Italy','India'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:2, 
        name:'Burgure', 
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/food-2.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:3, 
        name:'Burgure', 
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:4, 
        name:'Burgure', 
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:5, 
        name:'Icecream', 
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-5.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:6, 
        name:'Noodels', 
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:6, 
        name:'Noodels', 
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-6.jpg',
        tags: ['Pizza','Lunch'],
      },
      
    ]
  }
}
