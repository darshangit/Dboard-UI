import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

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

    visibleSidebar1;

    ngOnInit(): void {
    }

    constructor() {
        this.environment = [
            {label: 'Dev', value: 'Dev'},
            {label: 'BATest1', value: 'BATest1'},
            {label: 'BATest2', value: 'BATest2'},
            {label: 'UAT', value: 'UAT'},
            {label: 'LikeProd', value: 'LikeProd'}
        ];

        this.services = [
          {label: 'watchlist-propose', value: 'watchlist-propose'},
          {label: 'reports', value: 'reports'},
          {label: 'user', value: 'user'},
          {label: 'authorization', value: 'authorization'},
          {label: 'apigateway', value: 'apigateway'},
          {label: 'config-server', value: 'config-server'}
        ];
    }

    restart() {
      console.log('restart', this.selectedEnvironment, this.selectedService);
    }
}
