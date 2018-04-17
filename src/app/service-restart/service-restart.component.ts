import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ServiceRestartService } from '../services/service-restart.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-service-restart',
  templateUrl: './service-restart.component.html',
  styleUrls: ['./service-restart.component.css']
})
export class ServiceRestartComponent implements OnInit {
  environment: SelectItem[];
  services: SelectItem[];

  selectedEnvironment: string;
  selectedService: string;
  isLoading = false;
  tabSelected = 'serviceRestart';

  msgs: Message[] = [];

  constructor(private serviceRestart: ServiceRestartService) {}

  ngOnInit(): void {
    this.serviceRestart.getEnvironments().subscribe(resp => {
      this.environment = resp;
    });

    this.serviceRestart.getServices().subscribe(resp => {
      this.services = resp;
    });
  }

  restart() {
    this.isLoading = true;
    this.serviceRestart
      .restart(this.selectedService, this.selectedEnvironment)
      .subscribe(resp => {
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Yehaa',
          detail: 'Service: ' + this.selectedService + ', Restarted Successfully'
        });

        this.selectedEnvironment = null;
        this.selectedService = null;
        this.isLoading = false;
      }, resp => {
        this.msgs = [];
        this.msgs.push({
          severity: 'error',
          summary: 'oops',
          detail: 'Service: ' + this.selectedService + ', Restart Failed. Contact Dev Team.'
        });

        this.selectedEnvironment = null;
        this.selectedService = null;
        this.isLoading = false;
      });

    console.log('restart', this.selectedEnvironment, this.selectedService);
  }
}
