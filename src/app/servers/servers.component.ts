import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
//template: '<app-server></app-server><app-server></app-server>',
// template: `
//             <app-server></app-server>
//             <app-server></app-server>
//           `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!"
  serverName ='Test Server';
  serverCreated = false;

  constructor() { 
    setTimeout(() => { this.allowNewServer = true; },1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus ="Server was Created! Name is " + this.serverName;
  }

  onUpdateServerName(event : Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
