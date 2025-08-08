import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  settings = {
    alertas: true,
    monitoreoAutomatico: true,
    intervaloActualizacion: '5',
    unidadVelocidad: 'ms'
  };

  intervalos = [
    { value: '1', label: '1 minuto' },
    { value: '5', label: '5 minutos' },
    { value: '15', label: '15 minutos' },
    { value: '30', label: '30 minutos' }
  ];

  unidades = [
    { value: 'ms', label: 'Metros por segundo (m/s)' },
    { value: 'kmh', label: 'Kilómetros por hora (km/h)' },
    { value: 'mph', label: 'Millas por hora (mph)' }
  ];
}