import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'count'
})
export class CounterPipe implements PipeTransform{
    transform(counter:any, args?:any){
         if(counter>=1000 && counter<10000){
             return (counter/1000).toString().substring(0,1)+'K'
         }
         else if(counter>=10000){
             return (counter/10000).toString().substring(0,1)+'M';
         }
         else{
             return counter;
         }
    }
}