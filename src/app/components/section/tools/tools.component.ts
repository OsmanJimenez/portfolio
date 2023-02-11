import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  tools = [
    {
      icon: '',
      src: 'adobe-xd.svg',
      name: 'Adobe XD',
    },
    {
      icon: '',
      src: 'bitbucket.svg',
      name: 'Bitbuquet',
    },
    {
      icon: '',
      src: 'clicdata-logo.webp',
      name: 'Clic Data',
    },
    {
      icon: '',
      src: 'draw-io.png',
      name: 'Draw.io',
    },
    {
      icon: '',
      src: 'figma.svg',
      name: 'Figma',
    },
    {
      icon: 'devicon-jira-plain colored',
      src: '',
      name: 'Jira',
    },
    {
      icon: '',
      src: 'gitlab.svg',
      name: 'GitLab',
    },
    {
      icon: '',
      src: 'github.svg',
      name: 'GitHub',
    },
    {
      icon: '',
      src: 'sql-server.webp',
      name: 'SQL Server',
    },
    {
      icon: 'devicon-wordpress-plain colored',
      src: '',
      name: 'Wordpress',
    },
    {
      icon: 'devicon-windows8-original colored',
      src: '',
      name: 'Windows',
    },
    {
      icon: 'devicon-ubuntu-plain colored',
      src: '',
      name: 'Ubuntu',
    },
    {
      icon: '',
      src: 'postman.svg',
      name: 'Postman',
    },
    {
      icon: 'devicon-vscode-plain colored',
      src: '',
      name: 'VSCode',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
