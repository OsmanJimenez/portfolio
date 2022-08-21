import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CardProfileComponent } from './header/card-profile/card-profile.component';

registerLocaleData(es);

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent, CardProfileComponent],
  exports: [ToolbarComponent, NavbarComponent, CardProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule {}
