import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'wsb-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;
  public text: string;
  public type = 'success';
  public alertSubscription: Subscription;

  constructor(private alertService: AlertService) { }
  ngOnDestroy(): void {
    if(this.alertSubscription){
      this.alertSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.alertSubscription =  this.alertService.alert$.subscribe(alert=>{
      this.text = alert.text;
      this.type = alert.type;
      const timeout = setTimeout(()=>{
        clearTimeout(timeout)
        this.text = '';
      }, this.delay)
    })
  }

}
