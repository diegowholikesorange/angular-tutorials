import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  message = "Server is up"
  addDisabled = true
  serverName
  serverWasCreated = false;

  constructor() {
    setTimeout(() => this.addDisabled = false, 2000)
  }

  getTime() {
    return Date.now();
  }

  onAddButtonClick() {
    this.addDisabled = true
    this.serverWasCreated = true
    console.log("Add button was clicked")
  }

  onMouseOver() {
    console.log("Button under mouse")
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }
}
