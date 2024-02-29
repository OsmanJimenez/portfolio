import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockEducations from 'src/app/mocks/education.mock.json';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockEducations).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}

