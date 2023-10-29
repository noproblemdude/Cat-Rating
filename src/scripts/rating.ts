export class Rating {
    private id: number;
    private name: string;
    private rating: number;
    private email: string;

    constructor(id : number ,name : string, rating : number, email : string) {
       this.id = id;
       this.name= name;
       this.rating=rating;
       this.email=email;
    }

    getid(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getRating(){
        return this.rating;
    }
    
    getEmail(){
        return this.email;
    }

}



export class RatingsList {
    public ratings: Rating[];
 
    constructor() {
       this.ratings = [];
    }

    public copyRatings(newRatings : Object[]){
        let rats: Rating[];
        rats = [];
        
        for (let i = 0;i<newRatings.length;i++){
            let ratStr = JSON.stringify(newRatings[i])
            let newRat = new Rating(0,"",0,"");
            Object.assign(newRat,JSON.parse(ratStr));
            rats.push(newRat);
        }
        this.ratings = rats;
    }
 
    public addTolist(rating: Rating) {

       this.ratings.push(rating);

    }
 
    public removeFromList(id: number) {
       const filteredArray = this.ratings.filter((it) => it.getid() !== id);
       this.ratings = filteredArray;
    }

 }