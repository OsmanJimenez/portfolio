import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockSkills from 'src/app/mocks/skills.mock.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getCertificate(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockSkills).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}
