import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/section/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.getCertificate().subscribe(
      res => {
        if (res) {
          this.projects = res;
          this.addProperty()
        }
      }
    );
  }

  addProperty() {
    this.projects = this.projects.map((i) => {
      i.point = Math.floor(Math.random() * 100);;
      return i;
    });
    this.projects.sort(((a, b) => a.point - b.point));
  }

}
