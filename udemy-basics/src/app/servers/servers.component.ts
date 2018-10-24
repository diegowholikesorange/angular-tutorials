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

  constructor() {
    setTimeout(() => this.addDisabled = false, 2000)
  }

  getTime() {
    return Date.now();
  }

  onAddButtonClick() {
    this.addDisabled = true
    console.log("Add button was clicked")
    console.log()
  }

  onMouseOver() {
    console.log("Button under mouse")
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }
}
