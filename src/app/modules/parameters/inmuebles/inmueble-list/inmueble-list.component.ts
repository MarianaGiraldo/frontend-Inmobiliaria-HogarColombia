import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

@Component({
  selector: 'app-inmueble-list',
  templateUrl: './inmueble-list.component.html',
  styleUrls: ['./inmueble-list.component.css']
})
export class InmuebleListComponent implements OnInit {

  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: InmuebleModel[] = [];

  constructor(
    private service: InmuebleService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: InmuebleModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      }
    });
  }

}
