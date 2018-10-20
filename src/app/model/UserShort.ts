export class UserShort {

    private fullName;
    private zone;
    private subDistrict;

    constructor(fullName, zone?, subDistrict?) {

            this.fullName=fullName ,

            this.zone=zone ,
        
            this.subDistrict=subDistrict
        }

        get FullName(){ return this.fullName; }

        get Zone(){ return this.zone; }

        get SubDistrict(){ return this.subDistrict; }
}