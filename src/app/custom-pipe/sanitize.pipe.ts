import { Pipe } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({name:"safeHtml",pure:true})
export class SafeHtml{
    constructor(private _sanitizer: DomSanitizer){}
    transform(html){
        return this._sanitizer.bypassSecurityTrustResourceUrl(html);
    }

}