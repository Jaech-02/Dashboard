import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TurbineRecord {
  turbineId: string;
  turbineName: string;
  timestamp: string;
  windSpeed: string;
  power: string;
  efficiency: string;
  status: 'Óptimo' | 'Normal' | 'Advertencia' | 'Error';
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    FormsModule
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  displayedColumns: string[] = ['turbineName', 'timestamp', 'windSpeed', 'power', 'efficiency', 'status'];
  
  selectedTurbines: string[] = ['all'];
  timeRange: string = '24h';

  turbines = [
    { id: 'all', name: 'Todos los aerogeneradores' },
    { id: 'T001', name: 'Turbina 1' },
    { id: 'T002', name: 'Turbina 2' },
    { id: 'T003', name: 'Turbina 3' }
  ];

  timeRanges = [
    { value: '24h', label: 'Últimas 24 horas' },
    { value: '7d', label: 'Última semana' },
    { value: '30d', label: 'Último mes' }
  ];

  // Datos de ejemplo
  dataSource: TurbineRecord[] = [
    {
      turbineId: 'T001',
      turbineName: 'Turbina 1',
      timestamp: '2024-03-15 14:30',
      windSpeed: '15.7 m/s',
      power: '2.5 MW',
      efficiency: '88%',
      status: 'Óptimo'
    },
    {
      turbineId: 'T002',
      turbineName: 'Turbina 2',
      timestamp: '2024-03-15 14:30',
      windSpeed: '14.2 m/s',
      power: '2.3 MW',
      efficiency: '87%',
      status: 'Normal'
    },
    {
      turbineId: 'T003',
      turbineName: 'Turbina 3',
      timestamp: '2024-03-15 14:30',
      windSpeed: '12.8 m/s',
      power: '2.0 MW',
      efficiency: '85%',
      status: 'Advertencia'
    },
    {
      turbineId: 'T001',
      turbineName: 'Turbina 1',
      timestamp: '2024-03-15 14:00',
      windSpeed: '16.1 m/s',
      power: '2.6 MW',
      efficiency: '89%',
      status: 'Óptimo'
    },
    {
      turbineId: 'T002',
      turbineName: 'Turbina 2',
      timestamp: '2024-03-15 14:00',
      windSpeed: '13.5 m/s',
      power: '2.2 MW',
      efficiency: '86%',
      status: 'Normal'
    }
  ];

  getFilteredData(): TurbineRecord[] {
    if (this.selectedTurbines.includes('all')) {
      return this.dataSource;
    }
    return this.dataSource.filter(record => 
      this.selectedTurbines.includes(record.turbineId)
    );
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace('ó', 'o').replace('í', 'i');
  }
}