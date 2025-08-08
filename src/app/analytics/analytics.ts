import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {
  // Datos de ejemplo para las gráficas
  analyticsData = {
    powerGeneration: {
      titulo: 'Generación de Energía (24h)',
      datos: [2.1, 2.3, 2.4, 2.2, 2.5, 2.6, 2.4, 2.3, 2.5, 2.7, 2.6, 2.4]
    },
    windSpeed: {
      titulo: 'Velocidad del Viento (24h)',
      datos: [12, 14, 15, 13, 16, 17, 15, 14, 16, 18, 17, 15]
    },
    efficiency: {
      titulo: 'Eficiencia del Aerogenerador',
      datos: [85, 87, 86, 84, 88, 89, 87, 86, 88, 90, 89, 87]
    },
    windDirection: {
      titulo: 'Dirección del Viento',
      datos: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    }
  };
}