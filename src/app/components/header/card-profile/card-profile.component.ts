import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
})
export class CardProfileComponent implements OnInit {
  iconSocial = [
    {
      link: 'https://www.youtube.com/channel/UCyCmKYbu7sKcpj82Zj6ieag',
      icon: 'logo-youtube',
      name: 'Youtube',
    },
    {
      link: 'https://gitlab.com/Osman.Jimenez',
      icon: 'logo-gitlab',
      name: 'GitLab',
    },
    {
      link: 'https://github.com/OsmanJimenez',
      icon: 'logo-github',
      name: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/in/osmanjimenez/',
      icon: 'logo-linkedin',
      name: 'Linkedin',
    },
    {
      link: 'https://twitter.com/osmanjimenezdev',
      icon: 'logo-twitter',
      name: 'Twitter',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
