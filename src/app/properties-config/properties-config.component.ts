import { Component, OnInit } from '@angular/core';
import { ServiceRestartService } from '../services/service-restart.service';
import { SelectItem, ConfirmationService, Message } from 'primeng/primeng';
import { isNullOrUndefined } from 'util';
import { PropertiesService } from '../services/properties.service';
import { PropertiesModel } from '../models/properties-response.model';
import { MessageService } from 'primeng/components/common/messageservice';

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

  showTable = false;

  constructor(private serviceRestart: ServiceRestartService, private propertiesService: PropertiesService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

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
    this.selectedProperties = [];
    if (!isNullOrUndefined(this.selectedService) && !isNullOrUndefined(this.selectedEnvironment)) {
    this.showTable = true;
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
        this.callService(this.selectedProperties, this.selectedService, this.selectedEnvironment, this.selectedEnvironment);
        this.selectedProperties = [];
      }
  });
  } else {
    this.messageService.add({
      severity: 'error',
      summary: 'Oops',
      detail: 'Please select the properties to update'
    });
  }
  }

  confirm() {
    if (!isNullOrUndefined(this.selectedProperties) && this.selectedProperties.length > 0) {
    this.confirmationService.confirm({
        message: 'Are you sure to update across all environments?',
        accept: () => {
          this.callService(this.selectedProperties, this.selectedService, this.selectedEnvironment, this.selectedEnvironment);
          this.callService(this.selectedProperties, this.selectedService, 'env1', this.selectedEnvironment);
          this.callService(this.selectedProperties, this.selectedService, 'env2', this.selectedEnvironment);
          this.callService(this.selectedProperties, this.selectedService, 'env3', this.selectedEnvironment);
          this.callService(this.selectedProperties, this.selectedService, 'env4', this.selectedEnvironment);
          this.selectedProperties = [];
        }
    });
  } else {
    this.messageService.add({
      severity: 'error',
      summary: 'Oops',
      detail: 'Please select the properties to update'
    });
  }
}

  callService(propertiesList: PropertiesModel[], serviceName, environment: string, currentEnvironment: string) {
    this.propertiesService.updateProperties(propertiesList, serviceName, environment).subscribe(resp => {
      if (currentEnvironment === environment) {
        this.loadedProperties = resp;
      }
      this.messageService.add({
        severity: 'success',
        summary: 'Yehaa',
        detail: 'Property(s) update of : ' + serviceName + ' on : ' + environment + ' Successful'
      });

    }, resp => {
      this.messageService.add({
        severity: 'error',
        summary: 'Oops',
        detail: 'Failed on : ' + serviceName
      });
    });
  }

  remove() {
    this.selectedProperties.forEach(element => {
      element.type = 'DELETE';
    });

    this.update();
  }

  removeAll() {
    this.selectedProperties.forEach(element => {
      element.type = 'DELETE';
    });

    this.confirm();
  }

}
