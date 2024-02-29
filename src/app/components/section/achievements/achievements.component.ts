import { Component, OnInit } from '@angular/core';
import { ArchivementsService } from 'src/app/services/section/achievements/archivements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  achievements: any[] = [];

  constructor(private achievementsService: ArchivementsService) { }

  ngOnInit() {
    this.loadAchievements();
  }

  loadAchievements() {
    this.achievementsService.get().subscribe(
      (res) => {
        if (res) {
          this.achievements = res;

        }
      }
    );
  }

}
