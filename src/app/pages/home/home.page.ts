import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CardProfileComponent } from 'src/app/components/header/card-profile/card-profile.component';
import { NavbarComponent } from 'src/app/components/header/navbar/navbar.component';
import { ToolbarComponent } from 'src/app/components/header/toolbar/toolbar.component';
import { AchievementsComponent } from 'src/app/components/section/achievements/achievements.component';
import { CertificationsComponent } from 'src/app/components/section/certifications/certifications.component';
import { EducationComponent } from 'src/app/components/section/education/education.component';
import { ExperienceComponent } from 'src/app/components/section/experience/experience.component';
import { ProjectsComponent } from 'src/app/components/section/projects/projects.component';
import { SkillsComponent } from 'src/app/components/section/skills/skills.component';
import { ToolsComponent } from 'src/app/components/section/tools/tools.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CardProfileComponent,
    SkillsComponent,
    ToolsComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    EducationComponent,
    AchievementsComponent,
    CertificationsComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
