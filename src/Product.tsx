
export class Product{
    constructor(private id:Number,private name:string,private description:string){

    }
    Display(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.description);
    }
}