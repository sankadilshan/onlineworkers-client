export class UserInfo{
    fullName:string;
    address:string;
    city:string;
    district:string
    description:string
    jobArea:string
    experiance:string

   public setFullname(fullname:string){
         this.fullName=fullname;
   }
   public setAddress(address:string){
    this.address=address;
   }
   public setCity(city:string){
       this.city=city
   }
   public setDistrict(district:string){
       this.district=district
   }
   public setDescription(description:string){
       this.description=description
   }
   public setArea(area:string){
       this.jobArea=area
   }
   public setExperiance(exp:string){
       this.experiance=exp;
   }

    
}