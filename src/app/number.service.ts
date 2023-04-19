import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public ChkPrime():any
  {
    
    var iNo1:number=3;
    var iCnt:number=0;
    for(iCnt=1;iCnt<iNo1;iCnt++)
    {
      if(iNo1 % iCnt==0)
      {
        return("Prime number");
      }
      else
      {
        return("Not Prime Number");
      }

    }
  }
  constructor() { }
}


  

