import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlantService]
    });
  });

  it('should be created', () => {
    const service: PlantService = TestBed.inject(PlantService);
    expect(service).toBeTruthy();
  });
});