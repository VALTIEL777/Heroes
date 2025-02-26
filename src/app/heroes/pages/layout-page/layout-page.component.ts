import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: '/heroes/list' },
    { label: 'Añadir', icon: 'add', url: '/heroes/new-hero' },
    { label: 'Buscar', icon: 'search', url: '/heroes/search' },
 ]

}
