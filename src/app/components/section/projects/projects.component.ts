import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProjectsService } from 'src/app/services/section/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  viewAll = false;
  jsonLdScript: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.get().subscribe((res) => {
      if (res) {
        this.projects = res;
        this.addProperty();
        this.generateJsonLdScript();
      }
    });
  }

  addProperty() {
    this.projects = this.projects.map((i) => {
      i.point = Math.floor(Math.random() * 100);
      return i;
    });
    this.projects.sort((a, b) => a.point - b.point);
  }

  viewMore() {
    this.viewAll = true;
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Proyectos de Osman Jimenez",
      "itemListElement": [
        ${this.projects
          .map((project, index) => {
            return `{
              "@type": "CreativeWork",
              "name": "${project.name}",
              "url": "${project.url}",
              "image": "assets/img/Portafolio/caratulas/${project.url_photo}",
              "description": "Este proyecto realizado por Osman Jimenez incluye las siguientes habilidades: ${project.skills.join(
                ', '
              )}"
            }`;
          })
          .join(',')}
      ]
    }`;
  }
}
