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
      {name:'All', count: 7},
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
        origins: ['India'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['Salad'],
      },
      {
        id:2, 
        name:'FruitBall', 
        cookTime: '15-20',
        price: 5,
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
        tags: ['FastFood'],
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
        tags: ['FastFood','Lunch'],
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
        tags: ['FastFood'],
      },
      {
        id:7, 
        name:'Creamy Vegetable Soup', 
        cookTime: '20-35',
        price: 10,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: 'assets/Soup-1.jpeg',
        tags: ['Soup','Snacks'],
      },
      {
        id:8, 
        name:'Vegetable Soup', 
        cookTime: '15-20',
        price: 10,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: 'assets/Soup-2.jpg',
        tags: ['Soup','Snacks'],
      },
      {
        id:9, 
        name:'Hamburger', 
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Germani','American'],
        star: 4.5,
        imageUrl: 'assets/hamburger-cheese.webp',
        tags: ['FastFood','Snacks'],
      },
      {
        id:10, 
        name:'Margherita Pizza', 
        cookTime: '15-20',
        price: 10,
        favorite: true,
        origins: ['Italian'],
        star: 4.5,
        imageUrl: 'assets/margherita-pizza.webp',
        tags: ['FastFood','Pizza'],
      },
      
    ]
  }
}
