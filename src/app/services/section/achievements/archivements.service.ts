import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockAchievements from 'src/app/mocks/achievements.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ArchivementsService {

  constructor() { }

  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockAchievements).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}