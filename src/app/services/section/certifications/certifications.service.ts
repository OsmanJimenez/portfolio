import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import mockCertifications from 'src/app/mocks/certifications.mock.json';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  constructor() { }

  get(): Observable<any> {
    // Simula una petición HTTP y devuelve el mock JSON
    return of(mockCertifications).pipe(
      catchError(error => {
        console.error('Error fetching certificate:', error);
        return of(null);
      })
    );
  }
}