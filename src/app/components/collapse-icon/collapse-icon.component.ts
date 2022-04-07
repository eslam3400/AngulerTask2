import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-icon',
  templateUrl: './collapse-icon.component.html',
  styleUrls: ['./collapse-icon.component.sass']
})
export class CollapseIconComponent {
  opened: boolean = true;

  toggle() {
    this.opened = !this.opened;
  }
}
