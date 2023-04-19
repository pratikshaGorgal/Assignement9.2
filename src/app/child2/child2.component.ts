import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public CountC:any
  constructor(public hobj1:StringService)
  {

  }
  ngOnInit()
  {
  this.CountC=this.hobj1.Count()

  }
}
