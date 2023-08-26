import { TestBed } from '@angular/core/testing';

import { ArchivementsService } from './archivements.service';

describe('ArchivementsService', () => {
  let service: ArchivementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
