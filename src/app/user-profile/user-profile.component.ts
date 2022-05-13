import { Component, OnInit } from '@angular/core';
import { myData } from '../interface/myInterface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userDetails: myData={
       firstname : "Nelson",
       lastname : "Mandela",
       country : "South Africa",
       titles : ["Nobel Laureate", "President","Teacher", "Lawyer"],
       dateOfBirth : "July 18, 1918"};

}
