import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/section/projects/projects.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  projects: any[] = []; // Tu arreglo de proyectos
  pagedProjects: any[] = []; // Arreglo de proyectos paginados
  itemsPerPage = 6; // Cantidad de elementos por página
  totalPages = 0; // Total de páginas
  currentPage = 1; // Página actual
  pages: number[] = []; // Array de números de página

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.get().subscribe(
      (res) => {
        if (res) {
          this.projects = res;
          this.addProperty();
          this.totalPages = Math.ceil(this.projects.length / this.itemsPerPage);
          this.generatePages();
          this.changePage(1); // Mostrar la primera página al iniciar
        }
      }
    );
  }

  addProperty() {
    this.projects = this.projects.map((i) => {
      i.point = Math.floor(Math.random() * 100);
      return i;
    });
    this.projects.sort((a, b) => a.point - b.point);
  }

  generatePages() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      const startIndex = (page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.pagedProjects = this.projects.slice(startIndex, endIndex);
    }
  }
}
