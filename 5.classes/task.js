class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
	}

    set state(bookYear){
       
        if (bookYear < 0){ return this._state = 0;}
        if (bookYear > 100){ return this._state = 100;}
        else {this._state = bookYear};
    }

    get state(){
        return this._state;
    }
   
   
    fix(){
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name,releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name,releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author,name,releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author,name,releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}
class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30){
        this.books.push(book);}
    }
    findBookBy(type, value){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value && this.books[i].hasOwnProperty(type))
            {
                return this.books[i];
            } 
        
        }
        return null;

    }
    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName)
            {
                const book = this.books[i];
                this.books.splice(i,1);
                return book;
            }
            
        } 
        return null;    

    }
    
}
