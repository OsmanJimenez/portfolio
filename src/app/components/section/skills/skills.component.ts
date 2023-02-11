import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      icon: '',
      src: 'angular.svg',
      name: 'Angular',
    },
    {
      icon: '',
      src: 'ng-zorro.svg',
      name: 'Ant Design',
    },
    {
      icon: '',
      src: 'bootstrap.svg',
      name: 'Bootstrap',
    },
    {
      icon: '',
      src: 'capacitor-js.svg',
      name: 'Capacitor',
    },
    {
      icon: '',
      src: 'c-sharp.svg',
      name: 'C#',
    },
    {
      icon: '',
      src: 'css3.svg',
      name: 'CSS3',
    },
    {
      icon: 'devicon-html5-plain colored',
      src: 'html5.svg',
      name: 'HTML5',
    },
    {
      icon: 'devicon-git-plain colored',
      src: '',
      name: 'Git',
    },
    {
      icon: 'devicon-ionic-original colored',
      src: '',
      name: 'Ionic',
    },
    {
      icon: 'devicon-javascript-plain colored',
      src: '',
      name: 'JavaScript',
    },
    {
      icon: 'devicon-laravel-plain colored',
      src: '',
      name: 'Laravel',
    },
    {
      icon: 'devicon-markdown-original colored',
      src: '',
      name: 'Markdown',
    },
    {
      icon: 'devicon-microsoftsqlserver-plain colored',
      src: '',
      name: 'Microsoft Sql Server',
    },
    {
      icon: 'devicon-mysql-plain colored',
      src: '',
      name: 'MySql',
    },
    {
      icon: 'devicon-dotnetcore-plain colored',
      src: '',
      name: '.Net',
    },
    {
      icon: '',
      src: 'python.svg',
      name: 'Python',
    },
    {
      icon: '',
      src: 'pwa.png',
      name: 'PWA',
    },
    {
      icon: 'devicon-typescript-plain colored',
      src: '',
      name: 'TypeScript',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
