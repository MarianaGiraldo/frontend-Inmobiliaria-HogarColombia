import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { InmuebleModel } from 'src/app/models/parameters/inmueble.model';
import { InmuebleService } from 'src/app/services/parameters/inmueble.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inmuebleList: InmuebleModel[] = [];
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  constructor(private inmuebleService: InmuebleService) {}

  ngOnInit(): void {
    this.GetInmuebleList();
  }

  GetInmuebleList() {
    this.inmuebleService.GetRecordList().subscribe({
      next: (data: InmuebleModel[]) => {
        this.inmuebleList = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
