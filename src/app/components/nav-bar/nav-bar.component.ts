import { Component, Input } from '@angular/core';
// import iconSunLight from '../../../assets/images/icon-sun-light.svg';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Input() logo: string | undefined = '';
  isDark: boolean = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark');
  }
}
