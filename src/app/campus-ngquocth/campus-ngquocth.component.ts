import { Component, Input } from '@angular/core';
import { Campuses } from '../ngquocthInterface';

@Component({
  selector: 'app-campus-ngquocth',
  templateUrl: './campus-ngquocth.component.html',
  styleUrl: './campus-ngquocth.component.css'
})
export class CampusNgquocthComponent {

  @Input() campusData991720991!: Campuses[];

  campusName = "Davis";

  campusArray: { campus: string, street: string, city: string }[] = [];

  ngOnInit() {
    for (let x of this.campusData991720991) {     
      if (x.campus === "Davis") {
        this.campusArray.push({
          "campus": x.campus,
          "street": x.street,
          "city": x.city
        });
      }
    }
  }


 

  buildArray(campusName: string) {
    this.campusArray = [];
    for (let x of this.campusData991720991) {
      if (x.campus === String(campusName)) {
        this.campusArray.push({
          "campus": x.campus,
          "street": x.street,
          "city": x.city
        });
      }
    }
  }

}
