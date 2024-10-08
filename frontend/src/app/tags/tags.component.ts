import { Component, Input, input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  @Input()
  foodPagetags?:string[];

  @Input()
  justifyContent:string = 'center';
  
  tags?:Tag[] =[];
  constructor(private fs:FoodService){}
  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags = this.fs.getAllTag();
  }
}
