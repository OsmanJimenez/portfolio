import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private platform: Platform) {
    this.updatePWA();
  }

  installEvent: any = null;

  ngOnInit(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log(`'beforeinstallprompt' event was fired.`, e);
      this.installEvent = e;

      if (this.platform.is('desktop')) {
        this.installByUser();
      }
    });
  }

  installByUser() {
    console.log(this.installEvent);
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta: any) => {
        if (rta.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    }
  }

  updatePWA() {
    this.swUpdate.versionUpdates.subscribe((value) => {
      console.log('update', value);
      window.location.reload();
    });
  }
}
