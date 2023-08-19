import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from 'src/app/services/section/experiences/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = [];

  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit() {
    this.loadExperiences()
  }

  loadExperiences() {
    this.experiencesService.get().subscribe(
      res => {
        if (res) {
          this.experiences = res;
        }
      }
    );
  }

}
