import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  logoYoutube,
  logoGitlab,
  logoGithub,
  logoLinkedin,
  logoTwitter,
} from 'ionicons/icons';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CardProfileComponent implements OnInit {
  iconSocial = [
    {
      link: 'https://www.youtube.com/channel/UCyCmKYbu7sKcpj82Zj6ieag',
      icon: 'logo-youtube',
      name: 'Youtube',
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
  ];
  constructor() {
    addIcons({
      'logo-youtube': logoYoutube,
      'logo-github': logoGithub,
      'logo-linkedin': logoLinkedin,
    });
  }

  ngOnInit() {}
}
