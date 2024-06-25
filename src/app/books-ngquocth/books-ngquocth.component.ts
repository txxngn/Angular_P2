import { Component, Input } from '@angular/core';
import { Books } from '../ngquocthInterface';

@Component({
  selector: 'app-books-ngquocth',
  templateUrl: './books-ngquocth.component.html',
  styleUrl: './books-ngquocth.component.css'
})
export class BooksNgquocthComponent {

  @Input() myBooks991720991!: Books [];


  displayedColumns: string[] = ['AuthorName','BookTitle','Published'];

}
