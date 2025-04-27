import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExperiencesService } from 'src/app/services/section/experiences/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ExperienceComponent implements OnInit {
  experiences = [];
  jsonLdScript: string;

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit() {
    this.loadExperiences();
  }

  loadExperiences() {
    this.experiencesService.get().subscribe((res) => {
      if (res) {
        this.experiences = res.map((experience) => ({
          ...experience,
          showFullDescription: false,
          truncatedDescription: this.truncateDescription(
            experience.job_description
          ),
          fullDescription: experience.job_description,
        }));
        this.generateJsonLdScript();
      }
    });
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

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Experiencia Laboral de Osman Jimenez",
      "itemListElement": [
        ${this.experiences
          .map((experience, index) => {
            return `{
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@type": "JobPosting",
                "title": "${experience.job_position}",
                "datePosted": "${experience.working_period}",
                "hiringOrganization": {
                  "@type": "Organization",
                  "name": "${experience.job_enterprice}",
                  "sameAs": "${experience.job_enterprice_link}",
                  "logo": "${experience.job_enterprice_img}"
                },
                "skills": [
                  ${experience.skills.map((skill) => `"${skill}"`).join(',')}
                ],
                "description": "${experience.job_description}"
              }
            }`;
          })
          .join(',')}
      ]
    }`;
  }
}
