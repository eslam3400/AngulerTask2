import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  isSidebarDisplayed: boolean = true;

  toggleSidebar() {
    this.isSidebarDisplayed = !this.isSidebarDisplayed;
  }
}
