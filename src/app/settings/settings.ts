import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TurbineSettings {
  id: string;
  name: string;
  limites: {
    velocidadMinima: number;
    velocidadMaxima: number;
    temperaturaMaxima: number;
    eficienciaMinima: number;
  };
  mantenimiento: {
    ultimaRevision: string;
    proximaRevision: string;
    horasOperacion: number;
  };
}

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
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  systemSettings = {
    alertas: {
      notificacionesActivas: true,
      alertasEmail: true,
      alertasSMS: false,
      umbralCritico: 90,
      intervaloNotificaciones: '15'
    },
    monitoreo: {
      monitoreoAutomatico: true,
      intervaloActualizacion: '5',
      guardadoHistorico: true,
      periodoRetencionDatos: '90'
    },
    unidades: {
      velocidadViento: 'ms',
      temperatura: 'C',
      potencia: 'MW'
    },
    visualizacion: {
      temaOscuro: false,
      mostrarGraficosEnTiempoReal: true,
      intervaloActualizacionGraficos: '1'
    }
  };

  turbineSettings: TurbineSettings[] = [
    {
      id: 'T001',
      name: 'Turbina 1',
      limites: {
        velocidadMinima: 3.5,
        velocidadMaxima: 25.0,
        temperaturaMaxima: 75,
        eficienciaMinima: 85
      },
      mantenimiento: {
        ultimaRevision: '2024-02-15',
        proximaRevision: '2024-05-15',
        horasOperacion: 2160
      }
    },
    {
      id: 'T002',
      name: 'Turbina 2',
      limites: {
        velocidadMinima: 3.5,
        velocidadMaxima: 25.0,
        temperaturaMaxima: 75,
        eficienciaMinima: 85
      },
      mantenimiento: {
        ultimaRevision: '2024-03-01',
        proximaRevision: '2024-06-01',
        horasOperacion: 1920
      }
    },
    {
      id: 'T003',
      name: 'Turbina 3',
      limites: {
        velocidadMinima: 3.5,
        velocidadMaxima: 25.0,
        temperaturaMaxima: 75,
        eficienciaMinima: 85
      },
      mantenimiento: {
        ultimaRevision: '2024-03-10',
        proximaRevision: '2024-06-10',
        horasOperacion: 1800
      }
    }
  ];

  intervalosActualizacion = [
    { value: '1', label: '1 minuto' },
    { value: '5', label: '5 minutos' },
    { value: '15', label: '15 minutos' },
    { value: '30', label: '30 minutos' }
  ];

  intervalosNotificacion = [
    { value: '5', label: '5 minutos' },
    { value: '15', label: '15 minutos' },
    { value: '30', label: '30 minutos' },
    { value: '60', label: '1 hora' }
  ];

  unidadesVelocidad = [
    { value: 'ms', label: 'Metros por segundo (m/s)' },
    { value: 'kmh', label: 'Kilómetros por hora (km/h)' },
    { value: 'mph', label: 'Millas por hora (mph)' }
  ];

  unidadesTemperatura = [
    { value: 'C', label: 'Celsius (°C)' },
    { value: 'F', label: 'Fahrenheit (°F)' }
  ];

  periodosRetencion = [
    { value: '30', label: '30 días' },
    { value: '60', label: '60 días' },
    { value: '90', label: '90 días' },
    { value: '180', label: '6 meses' },
    { value: '365', label: '1 año' }
  ];

  onSystemSettingsChange() {
    console.log('Configuración del sistema actualizada:', this.systemSettings);
  }

  onTurbineSettingsChange(turbine: TurbineSettings) {
    console.log(`Configuración de ${turbine.name} actualizada:`, turbine);
  }

  calcularProximaRevision(turbine: TurbineSettings): string {
    const ultimaRevision = new Date(turbine.mantenimiento.ultimaRevision);
    const proximaRevision = new Date(ultimaRevision);
    proximaRevision.setMonth(proximaRevision.getMonth() + 3);
    return proximaRevision.toISOString().split('T')[0];
  }

  getDiasHastaRevision(turbine: TurbineSettings): number {
    const hoy = new Date();
    const proximaRevision = new Date(turbine.mantenimiento.proximaRevision);
    const diferencia = proximaRevision.getTime() - hoy.getTime();
    return Math.ceil(diferencia / (1000 * 3600 * 24));
  }
}