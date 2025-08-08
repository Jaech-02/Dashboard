import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

interface TurbineData {
  id: string;
  name: string;
  powerGeneration: number[];
  windSpeed: number[];
  efficiency: number[];
  windDirection: string[];
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonToggleModule
  ],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {
  selectedTurbines: string[] = ['T001'];
  timeRange: string = '24h';

  turbines: TurbineData[] = [
    {
      id: 'T001',
      name: 'Turbina 1',
      powerGeneration: [2.1, 2.3, 2.4, 2.2, 2.5, 2.6],
      windSpeed: [12, 14, 15, 13, 16, 17],
      efficiency: [85, 87, 86, 84, 88, 89],
      windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW']
    },
    {
      id: 'T002',
      name: 'Turbina 2',
      powerGeneration: [2.0, 2.2, 2.3, 2.1, 2.4, 2.5],
      windSpeed: [11, 13, 14, 12, 15, 16],
      efficiency: [84, 86, 85, 83, 87, 88],
      windDirection: ['NE', 'E', 'SE', 'S', 'SW', 'W']
    },
    {
      id: 'T003',
      name: 'Turbina 3',
      powerGeneration: [1.9, 2.1, 2.2, 2.0, 2.3, 2.4],
      windSpeed: [10, 12, 13, 11, 14, 15],
      efficiency: [83, 85, 84, 82, 86, 87],
      windDirection: ['E', 'SE', 'S', 'SW', 'W', 'NW']
    }
  ];

  timeRanges = [
    { value: '24h', label: 'Últimas 24 horas' },
    { value: '7d', label: 'Última semana' },
    { value: '30d', label: 'Último mes' }
  ];

  getTurbineName(turbineId: string): string {
    const turbine = this.turbines.find(t => t.id === turbineId);
    return turbine ? turbine.name : '';
  }

  getAverageValue(turbineId: string, metric: keyof TurbineData): string {
    const turbine = this.turbines.find(t => t.id === turbineId);
    if (!turbine || !Array.isArray(turbine[metric])) return '0';
    
    const values = turbine[metric] as number[];
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    
    switch(metric) {
      case 'powerGeneration':
        return `${average.toFixed(1)} MW`;
      case 'windSpeed':
        return `${average.toFixed(1)} m/s`;
      case 'efficiency':
        return `${average.toFixed(1)}%`;
      default:
        return '0';
    }
  }

  getMaxValue(turbineId: string, metric: keyof TurbineData): string {
    const turbine = this.turbines.find(t => t.id === turbineId);
    if (!turbine || !Array.isArray(turbine[metric])) return '0';
    
    const values = turbine[metric] as number[];
    const max = Math.max(...values);
    
    switch(metric) {
      case 'powerGeneration':
        return `${max.toFixed(1)} MW`;
      case 'windSpeed':
        return `${max.toFixed(1)} m/s`;
      case 'efficiency':
        return `${max.toFixed(1)}%`;
      default:
        return '0';
    }
  }

  getPredominantDirection(turbineId: string): string {
    const turbine = this.turbines.find(t => t.id === turbineId);
    if (!turbine) return 'N/A';
    
    const directions = turbine.windDirection;
    const dirCount = directions.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(dirCount)
      .sort((a, b) => b[1] - a[1])[0][0];
  }
}