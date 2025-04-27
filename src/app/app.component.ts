import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import {
  IonApp,
  IonRouterOutlet,
  IonCard,
  IonCardContent,
  IonButton,
  IonSpinner,
  IonLabel,
} from '@ionic/angular/standalone'; // Importa componentes individuales de Ionic
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonApp,
    IonRouterOutlet,
    IonCard,
    IonCardContent,
    IonButton,
    IonSpinner,
    IonLabel,
  ], // Importa solo los componentes que se usan
})
export class AppComponent implements OnInit {
  deferredPrompt: any;
  showUpdateMessage = false;
  private dtrumLoaded = false;
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.handlePWAInstallationPrompt();
    this.handleUpdates();
  }

  handlePWAInstallationPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
  }

  showInstallPrompt(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario rechazó la instalación');
        }
        this.deferredPrompt = null;
      });
    }
  }

  dismissPrompt(): void {
    this.deferredPrompt = null;
  }

  handleUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(
          filter(
            (evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'
          )
        )
        .subscribe(() => {
          this.showUpdateMessage = true;
          // Esperar un breve momento antes de recargar para que el usuario vea el mensaje
          setTimeout(() => document.location.reload(), 2000);
        });
    }
  }
}
