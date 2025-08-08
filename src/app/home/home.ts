import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import * as L from 'leaflet';

interface Turbine {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    altitude: number;
  };
  data: {
    windSpeed: string;
    power: string;
    temperature: string;
    rpm: string;
  };
  status: 'active' | 'warning' | 'error';
  lastUpdate: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  private map!: L.Map;
  private markers: { [key: string]: L.Marker } = {};

  turbines: Turbine[] = [
    {
      id: 'T001',
      name: 'Turbina 1',
      location: {
        lat: 40.7128,
        lng: -74.0060,
        altitude: 100
      },
      data: {
        windSpeed: '15.7 m/s',
        power: '2.5 MW',
        temperature: '25°C',
        rpm: '15.3'
      },
      status: 'active',
      lastUpdate: new Date().toLocaleString()
    },
    {
      id: 'T002',
      name: 'Turbina 2',
      location: {
        lat: 40.7138,
        lng: -74.0070,
        altitude: 105
      },
      data: {
        windSpeed: '14.2 m/s',
        power: '2.3 MW',
        temperature: '24°C',
        rpm: '14.8'
      },
      status: 'active',
      lastUpdate: new Date().toLocaleString()
    },
    {
      id: 'T003',
      name: 'Turbina 3',
      location: {
        lat: 40.7148,
        lng: -74.0080,
        altitude: 98
      },
      data: {
        windSpeed: '12.5 m/s',
        power: '1.8 MW',
        temperature: '26°C',
        rpm: '13.2'
      },
      status: 'warning',
      lastUpdate: new Date().toLocaleString()
    }
  ];

  selectedTurbine: Turbine | null = null;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([40.7128, -74.0060], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.turbines.forEach(turbine => {
      this.addTurbineMarker(turbine);
    });
  }

  private addTurbineMarker(turbine: Turbine): void {
    const marker = L.marker([turbine.location.lat, turbine.location.lng])
      .bindPopup(this.createPopupContent(turbine));
    
    marker.on('click', () => {
      this.selectTurbine(turbine);
    });

    this.markers[turbine.id] = marker;
    marker.addTo(this.map);
  }

  private createPopupContent(turbine: Turbine): string {
    return `
      <div class="turbine-marker">
        <h3>${turbine.name}</h3>
        <p>
          <strong>Velocidad del viento:</strong> ${turbine.data.windSpeed}<br>
          <strong>Potencia:</strong> ${turbine.data.power}<br>
          <strong>Estado:</strong> <span class="turbine-marker-${turbine.status}">${turbine.status}</span>
        </p>
      </div>
    `;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active': return '#4CAF50';
      case 'warning': return '#FF9800';
      case 'error': return '#F44336';
      default: return '#9E9E9E';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active': return 'check_circle';
      case 'warning': return 'warning';
      case 'error': return 'error';
      default: return 'help';
    }
  }

  selectTurbine(turbine: Turbine) {
    this.selectedTurbine = turbine;
    
    this.map.setView([turbine.location.lat, turbine.location.lng], 14);
    
    this.markers[turbine.id].openPopup();
  }
}