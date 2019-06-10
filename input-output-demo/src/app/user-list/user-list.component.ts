import { Component, OnInit } from '@angular/core';
import { UserInformationModel } from '../models/user-info-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private user_information_list ;

  constructor() {
    this.user_information_list = [
      {
      'name' : 'Vinay',
      'middle_name' : 'T',
      'surname' : 'jadhav',
      'designation' : 'SE-1'
    },{
      'name' : 'Nikhil',
      'middle_name' : 'K',
      'surname' : 'Pansare',
      'designation' : 'SE-2'
    },{
      'name' : 'Ram',
      'middle_name' : 'T',
      'surname' : 'Deo',
      'designation' : 'SE-3'
      }
    ];
  }

  ngOnInit() {
  }

}
