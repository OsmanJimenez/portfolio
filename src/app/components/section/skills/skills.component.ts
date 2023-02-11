import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      icon: 'devicon-ansible-plain colored',
      name: 'A-Frame',
    },
    {
      icon: 'devicon-angularjs-plain colored',
      name: 'Angular',
    },
    {
      icon: 'devicon-fsharp-plain colored',
      name: 'Ant Design',
    },
    {
      icon: 'devicon-bootstrap-plain colored',
      name: 'Bootstrap',
    },
    {
      icon: 'devicon-embeddedc-plain colored',
      name: 'Capacitor',
    },
    {
      icon: 'devicon-csharp-plain colored',
      name: 'C#',
    },
    {
      icon: 'devicon-css3-plain colored',
      name: 'CSS3',
    },
    {
      icon: 'devicon-html5-plain colored',
      name: 'HTML5',
    },
    {
      icon: 'devicon-git-plain colored',
      name: 'Git',
    },
    {
      icon: 'devicon-ionic-original colored',
      name: 'Ionic',
    },
    {
      icon: 'devicon-javascript-plain colored',
      name: 'JavaScript',
    },
    {
      icon: 'devicon-laravel-plain colored',
      name: 'Laravel',
    },
    {
      icon: 'devicon-markdown-original colored',
      name: 'Markdown',
    },
    {
      icon: 'devicon-microsoftsqlserver-plain colored',
      name: 'Microsoft Sql Server',
    },
    {
      icon: 'devicon-mysql-plain colored',
      name: 'MySql',
    },
    {
      icon: 'devicon-dotnetcore-plain colored',
      name: '.Net',
    },
    {
      icon: 'devicon-python-plain colored',
      name: 'Python',
    },
    {
      icon: 'devicon-shopware-original colored',
      name: 'PWA',
    },
    {
      icon: 'devicon-typescript-plain colored',
      name: 'TypeScript',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
