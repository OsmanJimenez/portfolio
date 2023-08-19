import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockProjects from 'src/app/mocks/projects.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockProjects).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}
