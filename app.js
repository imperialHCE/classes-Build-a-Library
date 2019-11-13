/* INTERMEDIATE JAVASCRIPT

Build a Library

Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you’re looking for a challenge, try to create the four classes without using the steps below. */

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    set isCheckedOut(check) {
      this._isCheckedOut = check;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this._ratings.length;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    addRating(rating) {
      if ( rating >= 1 && rating <= 5 ) {
        this._ratings.push(parseInt(rating));
      } else {
        console.log('A rating should be an integer between 1 and 5.')
      }
    }
  }
  
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages () {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() {
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }
    
    shuffle() {
      for (let i = this._songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]];
        }
      return this._songs;
      }
    }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());

  
  const speed = new Movie('Speed', 'Jan de Bont', 116);

  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);

  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());

  
  const songsAboutJane = new CD('Songs About Jane', 'Maroon 5', ['Harder to Breathe', 'This Love', 'Must Get Out', 'Sunday Morning', 'The Sun']);

  console.log(songsAboutJane.isCheckedOut);

  songsAboutJane.addRating(3);
  songsAboutJane.addRating(5);
  songsAboutJane.addRating(4);
  console.log(songsAboutJane.getAverageRating());
  
  console.log(songsAboutJane.shuffle());