import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books = [
    { title: 'Book 1', author: 'Author 1', price: 10.99, pageCount: 200,  imageUrl: 'assets/books/book1.png' },
    { title: 'Book 2', author: 'Author 2', price: 15.99, pageCount: 250, imageUrl: 'assets/books/book2.png' },
    { title: 'Book 3', author: 'Author 3', price: 12.99, pageCount: 200,  imageUrl: 'assets/books/book3.png' },
    { title: 'Book 4', author: 'Author 4', price: 58.99, pageCount: 180,  imageUrl: 'assets/books/book4.png' },
    { title: 'Book 5', author: 'Author 5', price: 12.99, pageCount: 120,  imageUrl: 'assets/books/book5.png' }
  ];
  selectedBook: any;

  onSelect(book: any) {
    this.selectedBook = book;
  }
 

}
