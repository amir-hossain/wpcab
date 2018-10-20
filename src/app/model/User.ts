export class User {
    // id will be auto generated so no need to set by constracture
    id;

    fullName;

    gender;

    fatherName;

    motherName;

    DOB;

    maritalStatus;

    spouseName;

    inviter;

    bloodGroup;

    occupation;

    parmanentAddress;

    zone;

    subDistrict;

    district;

    country;

    nationality;

    nID;

    userName;

    password;

    phone;

    email;

    role;

    constructor(fullName, gender?, fatherName?, motherName?, DOB?, maritalStatus?, spouseName?, inviter?, bloodGroup?, occupation?, parmanentAddress?, zone?,
        subDistrict?, district?, country?, nationality?, nID?, userName?, password?, phone?, email?, role?) {

            this.fullName=fullName ,

            this.gender=gender ,
        
            this.fatherName=fatherName ,
        
            this.motherName=motherName ,
        
            this.DOB=DOB ,
        
            this.maritalStatus=maritalStatus ,
        
            this.spouseName=spouseName ,
        
            this.inviter=inviter ,
        
            this.bloodGroup=bloodGroup ,
        
            this.occupation=occupation ,
        
            this.parmanentAddress=parmanentAddress ,
        
            this.zone=zone ,
        
            this.subDistrict=subDistrict ,
        
            this.district=district ,
        
            this.country=country ,
        
            this.nationality=nationality ,
        
            this.nID=nID ,
        
            this.userName=userName ,
        
            this.password=password ,
        
            this.phone=phone ,
        
            this.email=email ,
        
            this.role=role
    }
}