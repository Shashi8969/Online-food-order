export class food{
    id!: number;
    price!:number;
    name!:string;
    favorite:boolean =false;
    star:number = 1;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}