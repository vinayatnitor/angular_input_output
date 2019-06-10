import { Component, OnInit, Input } from '@angular/core';
import {UserInformationModel} from '../models/user-info-model';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user_info: UserInformationModel;
  constructor() { }

  ngOnInit() {

  }

}
