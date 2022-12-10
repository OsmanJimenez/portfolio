import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any = [
    {
      url_photo: '01_Tarjetas_Arrastrables.webp',
      name: 'Tarjetas Arrastables',
      url: 'https://github.com/OsmanJimenez/Tarjetas_Arrastrables',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '02_Tarjeta_Responsive.webp',
      name: 'Tarjeta Responsive',
      url: 'https://github.com/OsmanJimenez/Tarjeta-Adaptable',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '03_Skills_Bar.webp',
      name: 'Skills Bar',
      url: 'https://github.com/OsmanJimenez/Skills_Bar',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '04_Tarjetas_Presentacion.webp',
      name: 'Tarjeta de Presentación',
      url: 'https://github.com/OsmanJimenez/FusaTour',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '05_Widget_Clima.webp',
      name: 'Widget Clima',
      url: 'https://github.com/OsmanJimenez/Widget_Clima',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '06_Social_Meida_Neu.webp',
      name: 'Botones Social Media',
      url: 'https://github.com/OsmanJimenez/Social_Media_Neumorphism',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Neumorphism'],
    },
    {
      url_photo: '07_Login_Neu.webp',
      name: 'Login Adaptable',
      url: 'https://github.com/OsmanJimenez/Login_Neumorphism',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Neumorphism'],
    },
    {
      url_photo: '08_Checkbox_Neu.webp',
      name: 'Checkbox',
      url: 'https://github.com/OsmanJimenez/Checkbox_Neumorphism',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Neumorphism'],
    },
    {
      url_photo: '09_Menu_Circular_Neu.webp',
      name: 'Menu Circular',
      url: 'https://github.com/OsmanJimenez/Menu_Circular_Neumorphism',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Neumorphism'],
    },
    {
      url_photo: '10_Calculadora_Neu.webp',
      name: 'Calculadora',
      url: 'https://github.com/OsmanJimenez/Calculadora_Neumorphism',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Neumorphism'],
    },
    {
      url_photo: '11_Reproductor_Design.webp',
      name: 'Reproductor Sencillo',
      url: 'https://github.com/OsmanJimenez/Reproductor_Lite',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '13_Reproductor_Design.webp',
      name: 'Reproductor Design',
      url: 'https://github.com/OsmanJimenez/Reproductor_Lite',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '14_Tarjeta_Responsiva.webp',
      name: 'Tarjeta Responsive',
      url: 'https://github.com/OsmanJimenez/Tarjeta-Presentacion-CSS',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      url_photo: '15_Template_CV.webp',
      name: 'Template CV',
      url: 'https://github.com/OsmanJimenez/FusaTour',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
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
      url_photo: 'Template_A-frame.webp',
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

  ngOnInit() {
    this.addProperty()
  }

  addProperty(){
     this.projects = this.projects.map((i) => {
      i.point =  Math.floor(Math.random() * 100);;
      return i;
    });
    this.projects.sort(((a, b) => a.point - b.point));
  }

}
