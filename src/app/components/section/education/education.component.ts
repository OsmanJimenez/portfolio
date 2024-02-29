import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/section/education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations: any[] = [];

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.loadEducation();
  }

  loadEducation() {
    this.educationService.get().subscribe(
      (res) => {
        if (res) {
          this.educations = res;

        }
      }
    );
  }

}
