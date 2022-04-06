import { ToggleSidebarService } from './services/toggle-sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public ToggleSidebarService: ToggleSidebarService) { }
}
