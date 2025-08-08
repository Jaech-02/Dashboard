import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  displayedColumns: string[] = ['timestamp', 'windSpeed', 'power', 'efficiency', 'status'];
  dataSource = [
    { timestamp: '2024-03-15 14:30', windSpeed: '15.7 m/s', power: '2.5 MW', efficiency: '88%', status: 'Óptimo' },
    { timestamp: '2024-03-15 14:00', windSpeed: '14.2 m/s', power: '2.3 MW', efficiency: '87%', status: 'Óptimo' },
    { timestamp: '2024-03-15 13:30', windSpeed: '16.1 m/s', power: '2.6 MW', efficiency: '89%', status: 'Óptimo' },
    { timestamp: '2024-03-15 13:00', windSpeed: '12.8 m/s', power: '2.0 MW', efficiency: '85%', status: 'Normal' },
    { timestamp: '2024-03-15 12:30', windSpeed: '13.5 m/s', power: '2.2 MW', efficiency: '86%', status: 'Normal' }
  ];
}