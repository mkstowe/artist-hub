import { Component } from '@angular/core';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { jamBell, jamHeart } from '@ng-icons/jam-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [provideIcons({ jamHeart, jamBell })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
