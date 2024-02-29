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
    this.loadExperiences();
  }

  loadExperiences() {
    this.experiencesService.get().subscribe(
      res => {
        if (res) {
          this.experiences = res.map(experience => ({
            ...experience,
            showFullDescription: false, 
            truncatedDescription: this.truncateDescription(experience.job_description),
            fullDescription: experience.job_description
          }));
        }
      }
    );
  }

  truncateDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 32) {
      return words.slice(0, 32).join(' ') + '...';
    }
    return description;
  }

  showFullDescription(index: number) {
    this.experiences[index].showFullDescription = true;
  }
}
