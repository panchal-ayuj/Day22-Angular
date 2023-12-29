import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../SharedService';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  myForm!: FormGroup;
  @Input() id = "";
  @Output() event = new EventEmitter<string>();
  message!: string;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl(''),
    //   message: new FormControl('', [Validators.required, Validators.minLength(15)])
    // });
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit() {
    console.log(this.id);
    console.log("Submitted feedback");
    this.event.emit(this.myForm.get('message')?.value);
    this.sharedService.getData();
    console.log('this.sharedService ->' + this.sharedService.getData());
  }

  getMessageErrorMessage() {
    const messageControl = this.myForm.get('message');
    if (messageControl?.hasError('minlength')) {
      return 'Message should be at least 15 characters long.';
    }
    return '';
  }
}
