import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-ghana-map',
  templateUrl: './ghana-map.component.html',
  styleUrls: ['./ghana-map.component.css'],
})
export class GhanaMapComponent implements OnInit {
 
  public populationData = [
    { id:"greater-accra", region: 'Greater Accra', population: 5316503 },
    { id:"ashanti", region: 'Ashanti', population: 4758136 },
    { id:"western", region: 'Western', population: 2373601 },
    { id:"eastern", region: 'Eastern', population: 3308141 },
    { id:"central", region: 'Central', population: 2132472 },
    { id:"northern", region: 'Northern', population: 2984721 },
    { id:"volta", region: 'Volta', population: 2405835 },
    { id:"upper-east", region: 'Upper East', population: 1073817 },
    { id:"upper-west", region: 'Upper West', population: 702408 },
    { id:"bono-east", region: 'Bono East', population: 880582 },
    { id:"ahafo", region: 'Ahafo', population: 484023 },
    { id:"bono", region: 'Bono', population: 821602 },
    { id:"savannah", region: 'Savannah', population: 207150 },
    { id:"oti", region: 'Oti', population: 610186 },
    { id:"north-east", region: 'North East', population: 567036 },
    { id:"western-north", region: 'Western North', population: 935187 }
  ];

  // Track the currently hovered region
  hoveredRegion: any = null;

  // Function to handle hover events
  onRegionHover(event: MouseEvent, region: string) {
      this.hoveredRegion = region;

  }
   

  
  
  
  
  
  

  constructor() {}

  ngOnInit(): void {
    
  }

 
}
