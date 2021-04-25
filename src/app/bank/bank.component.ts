import { Component, OnInit } from '@angular/core';
import { Bank } from '../model/bank';
import { BankServiceService } from '../services/bank-service.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  banks: Bank[] = [];

  constructor(private bankservice:BankServiceService) { }

  ngOnInit(): void {
    this.bankservice.getAll().subscribe((data: Bank[])=>{
    console.log(data);
    this.banks = data;
  }
    )
  }

}
