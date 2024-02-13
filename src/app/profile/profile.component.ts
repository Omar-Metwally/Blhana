import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,SharedModule, SideNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
