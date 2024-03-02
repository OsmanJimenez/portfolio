import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/section/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [];
  jsonLdScript: string;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skillsService.get().subscribe(
      res => {
        if (res) {
          this.skills = res;
          this.generateJsonLdScript();
        }
      }
    );
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Conocimientos de Osman Jimenez",
      "itemListElement": [
        ${this.skills.map((skill, index) => {
      return `{
              "@type": "DefinedTerm",
              "name": "${skill.name}"
            }`;
    }).join(',')
      }
      ]
    }`;
  }
}
