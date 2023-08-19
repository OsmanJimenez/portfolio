import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/section/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.loadSkills()
  }

  loadSkills() {
    this.skillsService.getCertificate().subscribe(
      res => {
        if (res) {
          this.skills = res;
        }
      }
    );
  }
}
