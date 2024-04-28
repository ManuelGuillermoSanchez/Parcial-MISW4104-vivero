import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../services/plant.service';



@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;

    });
  }

}
