import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/section/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations: any[] = [];
  jsonLdScript: string;

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.loadEducation();
  }

  loadEducation() {
    this.educationService.get().subscribe(
      (res) => {
        if (res) {
          this.educations = res;
          this.generateJsonLdScript();
        }
      }
    );
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Educación de Osman Jimenez",
      "itemListElement": [
        ${this.educations.map((education, index) => {
      return `{
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@type": "EducationalOrganization",
                "name": "${education.name}",
                "description": "${education.institution}",
                "url": "${education.url}"
              }
            }`;
    }).join(',')
      }
      ]
    }`;
  }
}
