/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkillsService } from './skills.service';

describe('Service: DataSkills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsService]
    });
  });

  it('should ...', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
