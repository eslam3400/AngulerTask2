import { ToggleSidebarService } from './../../services/toggle-sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent {

  constructor(private ToggleSidebarService: ToggleSidebarService) { }

  toggle() {
    this.ToggleSidebarService.toggleSidebar();
  }
}
