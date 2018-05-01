import { Component, OnInit } from '@angular/core';
import { ServiceRestartService } from '../services/service-restart.service';
import { SelectItem, ConfirmationService, Message } from 'primeng/primeng';
import { isNullOrUndefined } from 'util';
import { PropertiesService } from '../services/properties.service';
import { PropertiesModel } from '../models/properties-response.model';

@Component({
  selector: 'app-properties-config',
  templateUrl: './properties-config.component.html',
  styleUrls: ['./properties-config.component.css']
})
export class PropertiesConfigComponent implements OnInit {

  services: SelectItem[];
  selectedProperties: PropertiesModel[];

  selectedService: string;

  selectedEnvironment: string;

  displayProperty = false;

  newProperty: any = [];

  key: string;
  value: string;

  loadedProperties: PropertiesModel[] = [];

  msgs: Message[] = [];

  cols: any[];

  constructor(private serviceRestart: ServiceRestartService, private propertiesService: PropertiesService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.serviceRestart.getServices().subscribe(resp => {
      this.services = resp;
    });

    this.cols = [
      { field: 'key', header: 'Key' },
      { field: 'value', header: 'Value' }
  ];
  }



  loadProperties() {
    if (!isNullOrUndefined(this.selectedService) && !isNullOrUndefined(this.selectedEnvironment)) {
    this.propertiesService.loadProperties(this.selectedService, this.selectedEnvironment).subscribe(resp => {
      this.loadedProperties = resp;
    });
  } else {
    this.msgs.push({
      severity: 'error',
      summary: 'Select Service and Environment'
    });
  }
  }

  addProperty() {
    this.displayProperty = true;
    this.newProperty = {};

    if (!isNullOrUndefined(this.key) && !isNullOrUndefined(this.value)) {
      const addItem: PropertiesModel = {
        key: this.key,
        value: this.value
      };
      this.loadedProperties.push(addItem);
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

    if (!isNullOrUndefined(this.selectedProperties) && this.selectedProperties.length > 0) {
    this.confirmationService.confirm({
      message: 'Are you sure of this update?',
      accept: () => {
        this.propertiesService.updateProperties(this.selectedProperties, this.selectedService, this.selectedEnvironment).subscribe(resp => {
          this.loadedProperties = resp;
          this.msgs = [];
          this.msgs.push({
            severity: 'success',
            summary: 'Yehaa',
            detail: 'Property(s) update of : ' + this.selectedService + ' on : ' + this.selectedEnvironment + ' Successful'
          });
        });

        this.selectedProperties = [];
      }
  });
  } else {
    this.msgs = [];
    this.msgs.push({
      severity: 'error',
      summary: 'Oops',
      detail: 'Please select the properties to update'
    });
  }
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure to update across all environments?',
        accept: () => {

        }
    });
}

}
