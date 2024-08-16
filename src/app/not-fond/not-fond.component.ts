import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-not-fond',
  templateUrl: './not-fond.component.html',
  styleUrl: './not-fond.component.css'
})
export class NotFondComponent implements OnInit{
  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = 'Data not Found';
  @Input() resetLinkText:string = 'Reset';
  @Input() resetLinkRoute:string ="/";

  constructor(){}

  ngOnInit(): void {
      
  }

}
