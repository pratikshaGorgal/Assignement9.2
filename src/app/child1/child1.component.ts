import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public iRet:any=[];
  constructor(public hobj:NumberService)
  {}
  ngOnInit()
  {
    this.iRet=this.hobj.ChkPrime();

  }

}
