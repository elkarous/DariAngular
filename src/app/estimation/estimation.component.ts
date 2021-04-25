import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { House } from '../model/house';
import { EstimationServiceService } from '../services/estimation-service.service';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  house !: House;
   
  
  constructor( private estimationservise:EstimationServiceService) { }

  ngOnInit(): void {
  }
estimation(){
this.estimationservise.estimation(this.house);
}
}
