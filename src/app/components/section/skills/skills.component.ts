import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      icon: 'devicon-angularjs-plain colored',
      name: 'Angular',
    },
    {
      icon: 'devicon-dotnetcore-plain colored',
      name: '.Net',
    },
    {
      icon: 'devicon-html5-plain colored',
      name: 'HTML 5',
    },
    {
      icon: 'devicon-css3-plain colored',
      name: 'CSS 3',
    },
    {
      icon: 'devicon-javascript-plain colored',
      name: 'JavaScript',
    },
    {
      icon: 'devicon-typescript-plain colored',
      name: 'TypeScript',
    },
    {
      icon: 'devicon-microsoftsqlserver-plain colored',
      name: 'Sql Server',
    },
    {
      icon: 'devicon-git-plain colored',
      name: 'Git',
    },
    {
      icon: 'devicon-gitlab-plain colored',
      name: 'GitLab',
    },
    {
      icon: 'devicon-github-plain colored',
      name: 'GitHub',
    },
    {
      icon: 'devicon-ionic-original colored',
      name: 'Ionic',
    },
    {
      icon: 'devicon-csharp-plain colored',
      name: 'C#',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
