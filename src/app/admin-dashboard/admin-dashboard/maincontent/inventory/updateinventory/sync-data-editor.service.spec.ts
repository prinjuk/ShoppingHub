import { TestBed } from '@angular/core/testing';

import { SyncDataEditorService } from './sync-data-editor.service';

describe('SyncDataEditorService', () => {
  let service: SyncDataEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncDataEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
