import { Component, Input } from '@angular/core';
import { Personal } from '../ngquocthInterface';

@Component({
  selector: 'app-footer-ngquocth',
  templateUrl: './footer-ngquocth.component.html',
  styleUrl: './footer-ngquocth.component.css'
})
export class FooterNgquocthComponent {


  @Input() ngquocthMyData: any;
}
