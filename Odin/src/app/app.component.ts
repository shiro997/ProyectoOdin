import { Component } from '@angular/core';
import { SecurityService } from './security/Service/security-service.service';
import { User } from './core/model/UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Odin';
}
