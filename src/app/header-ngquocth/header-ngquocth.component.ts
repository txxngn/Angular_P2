import { Component, Input } from '@angular/core';
import { Personal } from '../ngquocthInterface';


@Component({
  selector: 'app-header-ngquocth',
  templateUrl: './header-ngquocth.component.html',
  styleUrl: './header-ngquocth.component.css'
})
export class HeaderNgquocthComponent {

  @Input() ngquocthMyData: any;
}
