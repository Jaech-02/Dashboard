import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
  protected isMenuOpen = signal(true);

  protected readonly menuItems = [
    { icon: 'home', label: 'Inicio', route: '/home' },
    { icon: 'analytics', label: 'Analíticas', route: '/analytics' },
    { icon: 'assessment', label: 'Reportes', route: '/reports' },
    { icon: 'settings', label: 'Configuración', route: '/settings' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
