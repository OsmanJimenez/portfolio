import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockExperiences from 'src/app/mocks/experience.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor() { }

  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockExperiences).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}
