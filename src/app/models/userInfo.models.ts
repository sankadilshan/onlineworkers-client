export class UserInfo{
    fullname:string;
    address:string;
    city:string;
    district:string
    description:string
    area:string
    experiance:string

   public setFullname(fullname:string){
         this.fullname=fullname;
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
       this.area=area
   }
   public setExperiance(exp:string){
       this.experiance=exp;
   }

    
}