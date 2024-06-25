import { Component } from '@angular/core';

import{Personal, Books, Campuses} from './ngquocthInterface';
import A2jsondata from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2ngquocth';




  
  ngquocthPersonal: Personal = A2jsondata.a2Personal;
  ngquocthBooks:  Books []  = A2jsondata.myBooks;
  ngquocthCampus: Campuses [] = A2jsondata.campusData;
}
