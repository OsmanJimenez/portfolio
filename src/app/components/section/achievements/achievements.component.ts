import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/section/education/education.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  educations: any[] = []; // Tu arreglo de proyectos

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.loadEducation();
  }

  loadEducation() {
    this.educationService.get().subscribe(
      (res) => {
        if (res) {
          this.educations = res;

        }
      }
    );
  }

}
