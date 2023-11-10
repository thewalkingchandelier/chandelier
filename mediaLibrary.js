class Media {
  constructor(title) { //constructor initializes an object instance
   this._title = title;
   this._isCheckedOut = false;
   this._ratings = [];
   
  } get title() {
    return this._title
  } get isCheckedOut() {
    return this._isCheckedOut
  } get ratings() {
    return this._ratings
  } set isCheckedOut(newCheckOut) {
    this._isCheckedOut = newCheckOut

  } toggleCheckOutStatus() {
   this.isCheckedOut = !this.isCheckedOut
  } getAverageRating() {
 let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
 return ratingsSum / this.ratings.length
  } addRating(value) {
    this.ratings.push(value)
  }

}

class Book extends Media {
  constructor(author, title, pages) {
    super(title) // used to call the parent's properties and methods
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director
  }
  get runTime() {
    return this._runTime
  }
}
const historyOfEverything = new Book('Bill Bryson', 'Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())
const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

//static methods can be called without a specific object that owns it and must be called on the parent
//super keyword is usd to inherit from the parent constructor, and is used to set values from the parent constructor