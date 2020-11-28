class Book {
    id;
    name;
    price;
    published_date;

    constructor(id, name, price, published_date) {
        this.id = id;
        this.name = name;
        this. price = price;
        this.published_date = published_date
    }
    property = [this.name, this.price, this.published_date];

}
    
class ComicBook extends Book {
    funny;
    page_number;
    constructor(id, name, price, published_date, funny, page_number) {
        super(id, name, price, published_date);
        this.funny = funny;
        this.page_number = page_number;
    }
}

class TextBook extends Book {
    subject;
    grade;
    constructor(id, name, price, published_date, subject, grade) {
        super(id, name, price, published_date);
        this.subject = subject;
        this.grade = grade;
    }
}

class ScienceBook extends Book {
    major;
    constructor(id, name, price, published_date, major) {
        super(id, name, price, published_date);
        this.major = major;
    }
}

class BookShelf {
    name;
    owner;
    dateModified;


    constructor(name, owner, dateModified) {
        this.name = name;
        this.owner = owner;
        this.dateModified = dateModified;
        this.giaSach = [];
    }

    addBook(book){
        this.giaSach.push(book);
    };

    updateBook(id, thuocTinh, data) {
        for (let i = 0; i < this.giaSach.length; i++) {
            if(this.giaSach[i].id == id) {
                this.giaSach[i].property[thuocTinh] = data;
            }
        }    
    };

    deleteBook(id) {
        for (let i = 0; i < this.giaSach.length; i++) {
            if(this.giaSach[i].id == id) {
                this.giaSach.splice(i,1);
            }
        }
    };
    
    showBooks() {
        console.log(this.giaSach);
    };

    findBooks(name){
        var sachTheoTen = [];
        for (let j = 0; j < this.giaSach.length; j++) {
            if(this.giaSach[j].name == name){
                sachTheoTen.push(this.giaSach[j]);
            }
        }
        return sachTheoTen;
    };

}

var book1 = new Book (1, "sach1", 5000, "20/10/2022")
var book2 = new ComicBook (2, "truyenTranh1", 99999, "20/10/2022", 2, 129)
var book3 = new ScienceBook (3, "khoaHoc1", 12500, "20/10/2022", "Physics")
var book4 = new TextBook (4, "truyenTranh1", 50000, "20/10/2022", "Biology", 12)
var bookshelf = new BookShelf("Hieu", "Beo", "20/10/2022")
bookshelf.addBook(book1);
bookshelf.addBook(book2);
bookshelf.addBook(book3);
bookshelf.addBook(book4);
bookshelf.deleteBook(3);
bookshelf.updateBook(1, 1, "Hieu");
var tuSachTheoTen = bookshelf.findBooks("truyenTranh1")
console.log(tuSachTheoTen);
bookshelf.showBooks();
// Nếu truyền thể hiện của  ComicBook, TextBook, ScienceBook vào addBook thì em nghĩ hoàn toàn được vì tất cả các class này
// đều kế thừa từ class Book (lớp cha)