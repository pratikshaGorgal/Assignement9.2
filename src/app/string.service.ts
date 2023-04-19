import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public Count():any
  {
    var str="MY Name Is Pratiksha";
  var numUpper=(str.match(/[A-Z]/g)||[]).length
  return numUpper;
  }
  

  constructor() { }
}
