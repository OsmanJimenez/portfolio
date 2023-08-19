import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockTools from 'src/app/mocks/tools.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockTools).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}
