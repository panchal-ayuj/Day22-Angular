import { Injectable } from '@angular/core';
@Injectable()
export class SharedService {
    private data:any = undefined;
    setData(data:any){
        this.data = data;
    }
    getData():any{
        return this.data;
    }
}