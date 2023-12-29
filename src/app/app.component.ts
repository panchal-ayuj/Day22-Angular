import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './DataService';
import { SharedService } from './SharedService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project1';
  // id: string = "Name";
  id!: string;
  gifts: string[] = ["Portable Speaker", "Portable Charger"];
  isSubmitted: boolean = false;

  constructor(private sharedService: SharedService) {
  }

  onSubmit() {
    console.log(this.id);
    console.log("onSubmit");
    this.isSubmitted = true;
    this.sharedService.setData(this.id);
    console.log('this.sharedService ->'+this.sharedService.getData());
  }

  onReset() {
    this.id = "";
  }

  onEvent(newEvent: any) {
    console.log("Received feedback: " + newEvent);
  }
}
