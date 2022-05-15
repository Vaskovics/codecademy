class Media{
    constructor(title, isCheckOut ){
        this._title = title;
        this._isCheckOut = isCheckOut;
        this._ratings = [];

    }
    get tittle(){
        return this._title;
    }
    get isCheckOut(){
        return this._isCheckOut;
    }
    get ratings(){
        return this._ratings;
    }
    set isCheckOut(bool){
        this._isCheckOut = bool;
    }
    toggleCheckOutStatus(){
        if(this._isCheckOut){
            this._isCheckOut = false;
        }else{this._isCheckOut = true;}
    }
    getAverageRating(){
        const sum = this._ratings.reduce((acum, currentValue)=>acum + currentValue, 0);
        return sum / this._ratings.length;
    }
    addRating(rating){
        this._ratings.push(rating);
    }
}

class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }

}

class Movie extends Media{
    constructor(director, title, runTime, isCheckOut){
        super(title, isCheckOut);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTimt(){
        return this._runTime;
    }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed._isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());




// const book2 = new Book('Viktor', 'JavaScript', 60, true);
// book2.addRating(10);
// console.log(book2.ratings);

// const book1 = new Media('Viktor', false);
// book1.toggleCheckOutStatus();
// console.log(book1.isCheckOut);
// book1.addRating(4);
// console.log(book1.getAverageRating());




