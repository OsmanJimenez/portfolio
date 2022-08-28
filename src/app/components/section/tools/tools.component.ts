import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  tools = [
    {
      icon: 'devicon-vscode-plain colored',
      name: 'VSCode',
    },
    {
      icon: 'devicon-jira-plain colored',
      name: 'Jira',
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
      icon: 'devicon-wordpress-plain colored',
      name: 'Wordpress',
    },
    {
      icon: 'devicon-windows8-original colored',
      name: 'Windows',
    },
    {
      icon: 'devicon-ubuntu-plain colored',
      name: 'Ubuntu',
    },
    {
      icon: 'devicon-fastapi-plain colored',
      name: 'Postman',
    },
    {
      icon: 'devicon-minitab-plain colored',
      name: 'Clic Data',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
