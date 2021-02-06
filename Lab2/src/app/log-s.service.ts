import { Inject, Injectable } from '@angular/core';
import { ApiConfig } from './apiConfig';
import { apiconfigvalue } from './apiConfig.value';

@Injectable({
  providedIn: 'any'
})
export class LogSService {

  private static LogSServiceCounter=0;
  ObjectID=0;
  constructor(@Inject(apiconfigvalue) private config:ApiConfig) {
    LogSService.LogSServiceCounter = LogSService.LogSServiceCounter+1;
    this.ObjectID=LogSService.LogSServiceCounter;
    console.log("LogSService Craeted no = ",LogSService.LogSServiceCounter)
   }

  logData(data:String){
    console.log(data);
    return data+" from "+this.ObjectID+" logSService object"
  }

  getApiDetails(){
    return this.config;
  }
}
