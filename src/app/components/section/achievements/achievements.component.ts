import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArchivementsService } from 'src/app/services/section/achievements/archivements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AchievementsComponent implements OnInit {
  achievements: any[] = [];
  jsonLdScript: string;

  constructor(private achievementsService: ArchivementsService) {}

  ngOnInit() {
    this.loadAchievements();
  }

  loadAchievements() {
    this.achievementsService.get().subscribe((res) => {
      if (res) {
        this.achievements = res;
        this.generateJsonLdScript();
      }
    });
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Insignias de Osman Jimenez",
      "itemListElement": [
        ${this.achievements
          .map((achievement, index) => {
            return `{
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@type": "CreativeWork",
                "name": "${achievement.name}",
                "description": "${achievement.platform}",
                "url": "https://github.com/OsmanJimenez"
              }
            }`;
          })
          .join(',')}
      ]
    }`;
  }
}
