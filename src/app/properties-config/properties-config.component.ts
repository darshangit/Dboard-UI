import { Component, OnInit } from '@angular/core';
import { ServiceRestartService } from '../services/service-restart.service';
import { SelectItem } from 'primeng/primeng';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-properties-config',
  templateUrl: './properties-config.component.html',
  styleUrls: ['./properties-config.component.css']
})
export class PropertiesConfigComponent implements OnInit {

  services: SelectItem[];
  selectedProperties: SelectItem[];

  selectedService: string;

  selectedEnvironment: string;

  displayProperty = false;

  newProperty: any = [];

  key: string;
  value: string;

  constructor(private serviceRestart: ServiceRestartService) { }

  ngOnInit() {
    this.serviceRestart.getServices().subscribe(resp => {
      this.services = resp;
    });
  }

  loadProperties() {

  }

  addProperty() {
    this.displayProperty = true;
    this.newProperty = {};

    if (!isNullOrUndefined(this.key) && !isNullOrUndefined(this.value)) {
      const addItem: SelectItem = {
        label: this.key,
        value: this.value
      };
      this.services.push(addItem);
      this.displayProperty = false;
      this.key = null;
      this.value = null;
    }
  }

  closeProperty() {
    this.displayProperty = false;
    this.key = null;
      this.value = null;
  }

  update() {
    console.log('this.services', this.services);
    console.log('this.selectedProperties', this.selectedProperties);
  }

}
