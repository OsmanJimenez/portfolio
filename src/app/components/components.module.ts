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
import { SkillsComponent } from './section/skills/skills.component';
import { ToolsComponent } from './section/tools/tools.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { ProjectsComponent } from './section/projects/projects.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    CardProfileComponent,
    SkillsComponent,
    ToolsComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    CardProfileComponent,
    SkillsComponent,
    ToolsComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule {}
