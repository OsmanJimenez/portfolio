import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      url_photo: 'devicon-angularjs-plain colored',
      name: 'FusaTour',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-dotnetcore-plain colored',
      name: 'Template Portafolio',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-html5-plain colored',
      name: 'FreskyPan ERP',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-css3-plain colored',
      name: 'Template Restaurante',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-javascript-plain colored',
      name: 'Realidad Virtual',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-typescript-plain colored',
      name: 'Template Flexbox',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-microsoftsqlserver-plain colored',
      name: 'Perceptron',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-git-plain colored',
      name: 'OWASP PHP',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
    {
      url_photo: 'devicon-ionic-original colored',
      name: 'Template Material Design',
      url: '#',
      skills: ['uno', 'dos', 'tres'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
