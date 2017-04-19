import { Component }   from '@angular/core';
import { AuthService } from '../auth0/auth.service';
import * as moment from 'moment-timezone';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile:any;
  time: any;

  constructor(private auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.time = moment(this.profile.updated_at).tz("Europe/Warsaw").format('YYYY-MM-DD HH:mm:ss');

  }

}
