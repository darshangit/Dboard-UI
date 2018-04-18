import { Component, OnInit } from '@angular/core';
import { ServiceRestartService } from '../services/service-restart.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-properties-config',
  templateUrl: './properties-config.component.html',
  styleUrls: ['./properties-config.component.css']
})
export class PropertiesConfigComponent implements OnInit {

  services: SelectItem[];
  selectedService: string;

  selectedEnvironment: string;

  constructor(private serviceRestart: ServiceRestartService) { }

  ngOnInit() {
    this.serviceRestart.getServices().subscribe(resp => {
      this.services = resp;
    });
  }

  loadProperties() {

  }

}
