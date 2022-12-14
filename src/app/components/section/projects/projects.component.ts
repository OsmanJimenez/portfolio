import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      url_photo: 'FusaTour.webp',
      name: 'FusaTour',
      url: 'https://github.com/OsmanJimenez/FusaTour',
      skills: [
        'A-Frame',
        'Bootstrap',
        'JavaScript',
        'Laravel',
        'Materialize',
        'MySql',
        'PWA',
      ],
    },
    {
      url_photo: 'Template_Portafolio.webp',
      name: 'Template Portafolio',
      url: 'https://osmanjimenez.github.io/Template_Portafolio/',
      skills: ['Bootstrap', 'HTML5', 'JavaScript', 'Material Design'],
    },
    {
      url_photo: 'FreskyPan.webp',
      name: 'FreskyPan ERP',
      url: 'https://github.com/OsmanJimenez/FreskyPan',
      skills: ['Bootstrap', 'HTML5', 'JavaScript', 'MySQL', 'PHP'],
    },
    {
      url_photo: 'Template_Restaurante.webp',
      name: 'Template Restaurante',
      url: 'https://osmanjimenez.github.io/Plantilla-Restaurante/',
      skills: ['Bootstrap', 'HTML5', 'JavaScript'],
    },
    {
      url_photo: 'Realidad_Virtual.webp',
      name: 'Realidad Virtual',
      url: 'https://github.com/OsmanJimenez?tab=repositories&q=Aframe&type=&language=&sort=',
      skills: ['A-Frame', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: 'Template_FlexBox.webp',
      name: 'Template Flexbox',
      url: 'https://osmanjimenez.github.io/Template-Flexbox/',
      skills: ['Bootstrap', 'HTML5', 'FlexBpx'],
    },
    {
      url_photo: 'Perceptron.webp',
      name: 'Perceptron',
      url: 'https://github.com/OsmanJimenez?tab=repositories&q=percep&type=&language=&sort=',
      skills: [
        'Bootstrap',
        'HTML5',
        'CSS3',
        'Flask',
        'JavaScript',
        'MySQL',
        'Python',
      ],
    },
    {
      url_photo: 'OWASP_PHP.webp',
      name: 'OWASP PHP',
      url: 'https://github.com/OsmanJimenez/OWASP_PHP',
      skills: [
        'Bootstrap',
        'HTML5',
        'CSS3',
        'JavaScript',
        'JQuery',
        'MySQL',
        'PHP',
      ],
    },
    {
      url_photo: 'Template_Material_Design.webp',
      name: 'Template Material Design',
      url: 'https://osmanjimenez.github.io/Template-for-Blog-Material-Design/',
      skills: ['Bootstrap', 'HTML5', 'Material Design'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
