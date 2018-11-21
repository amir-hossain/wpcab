import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { Router } from '@angular/router'
import { AngularFireDatabase } from "angularfire2/database";
import 'firebase/storage';
import { FirebaseApp } from 'angularfire2';
import { DropDownItemsService } from '../drop-down-items.service';
import { CommunicationService } from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
import { LinkService } from '../link/link.service';
import { User } from '../model/User';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DropDownItemsService]
})
export class RegistrationComponent implements OnInit {
  activeUserRole;
  storageRef;
  uploding = false;
  registrationForm: FormGroup;
  photo;
  total;
  roles;
  phoneList = [];
  autoInfo = [];
  footerError = false;
  picError = false;
  otherOccupationSelected = false;
  marriedSelected = false;
  spouseWpcabMember = false;

  // preview profile  url
  url = './assets/img/add.png';

  // drop down source
  names = [];
  districts = [];
  bloodGroups = [];
  subDistricts = [];
  months = [];
  zones = [];

  //drop down suggestion
  filteredNames = [];
  filteredDistricts = [];
  filteredSubDistricts = [];
  filteredZone = [];

  get fullName() { return this.registrationForm.get('userInfo').get('fullName'); }

  get gender() { return this.registrationForm.get('userInfo').get('gender'); }

  get month() { return this.registrationForm.get('userInfo').get('month'); }

  get day() { return this.registrationForm.get('userInfo').get('day'); }

  get year() { return this.registrationForm.get('userInfo').get('year'); }

  get fatherName() { return this.registrationForm.get('userInfo').get('fatherName'); }

  get husbandName() { return this.registrationForm.get("userInfo").get("husbandName"); }

  get motherName() { return this.registrationForm.get('userInfo').get('motherName'); }

  get maritalStatus() { return this.registrationForm.get('userInfo').get('status'); }

  get spouseName() { return this.registrationForm.get('userInfo').get('spouseName'); }

  get bloodGroup() { return this.registrationForm.get('userInfo').get('bloodGroup'); }

  get occupation() { return this.registrationForm.get('userInfo').get('occupation'); }

  get otherOccupation() { return this.registrationForm.get('userInfo').get('otherOccupation'); }

  get inviter() { return this.registrationForm.get('userInfo').get('inviter'); }

  get permanentAddressVillage() { return this.registrationForm.get('permanentAddress').get('village'); }

  get permanentAddressHouse() { return this.registrationForm.get('permanentAddress').get('house'); }

  get permanentAddressRoad() { return this.registrationForm.get('permanentAddress').get('road'); }

  get permanentAddressSector() { return this.registrationForm.get('permanentAddress').get('sector'); }

  get permanentAddressBlock() { return this.registrationForm.get('permanentAddress').get('block'); }

  get permanentAddressDistrict() { return this.registrationForm.get('permanentAddress').get('district'); }

  get permanentAddressSubDistrict() { return this.registrationForm.get('permanentAddress').get('subDistrict'); }

  get permanentAddressPostOffice() { return this.registrationForm.get('permanentAddress').get('postOffice'); }

  get permanentAddressPostalCode() { return this.registrationForm.get('permanentAddress').get('postalCode'); }

  get permanentAddressCountry() { return this.registrationForm.get('permanentAddress').get('country'); }

  get permanentAddressNationality() { return this.registrationForm.get('permanentAddress').get('nationality'); }

  get permanentAddressnId() { return this.registrationForm.get('permanentAddress').get('nId'); }

  get presentAddressVillage() { return this.registrationForm.get('presentAddress').get('village'); }

  get presentAddressHouse() { return this.registrationForm.get('presentAddress').get('house'); }

  get presentAddressRoad() { return this.registrationForm.get('presentAddress').get('road'); }

  get presentAddressSector() { return this.registrationForm.get('presentAddress').get('sector'); }

  get presentAddressBlock() { return this.registrationForm.get('presentAddress').get('block'); }

  get presentAddressDistrict() { return this.registrationForm.get('presentAddress').get('district'); }

  get presentAddressSubDistrict() { return this.registrationForm.get('presentAddress').get('subDistrict'); }

  get presentAddressPostOffice() { return this.registrationForm.get('presentAddress').get('postOffice'); }

  get presentAddressPostalCode() { return this.registrationForm.get('presentAddress').get('postalCode'); }

  get presentAddressCountry() { return this.registrationForm.get('presentAddress').get('country'); }

  get presentAddressZone() { return this.registrationForm.get('presentAddress').get('zone'); }

  get userName() { return this.registrationForm.get('auth').get('userName'); }

  get password() { return this.registrationForm.get('auth').get('password'); }

  get conPassword() { return this.registrationForm.get('auth').get('conPassword'); }

  get phone() { return this.registrationForm.get('auth').get('phone'); }

  get email() { return this.registrationForm.get('auth').get('email'); }

  get role() { return this.registrationForm.get('auth').get('role'); }


  constructor(private builder: FormBuilder, private db: AngularFireDatabase, private router: Router,
    private fb: FirebaseApp, private ddis: DropDownItemsService, private communicationService: CommunicationService,
    private ts: TranslateService, private link: LinkService) {
    let lan = this.getSelectedLanguage();
    this.ts.use(lan);
    this.notifyRoot();
    this.roles = this.ddis.getRoles();
    this.districts = this.ddis.getDistricts();
    this.subDistricts = this.ddis.getSubDistricts();
    this.zones = this.ddis.getZones();
    this.bloodGroups = this.ddis.getBloodGroups();
    this.months = this.ddis.getMonths();
  }

  private getSelectedLanguage() {
    return localStorage.getItem('lan');
  }

  notifyRoot() {
    CommunicationService.navBar = true;
    this.communicationService.emitChange();
  }

  ngOnInit() {
    this.activeUserRole = localStorage.getItem('activeUserRole');
    this.registrationForm = this.builder.group({
      userInfo: this.builder.group({
        photo: [""],
        fullName: ["", Validators.required],
        gender: ['', Validators.required],
        dob: [""],
        day: ["", [Validators.required, Validators.pattern('^\\d+$')]],
        month: ["", Validators.required],
        year: ["", [Validators.required, Validators.pattern('^\\d+$')]],
        fatherName: [""],
        husbandName: [""],
        motherName: [""],
        status: ["", Validators.required],
        spoouseWpcabMember: [false],
        spouseName: '',
        inviter: ["", Validators.required],
        occupation: ["", Validators.required],
        otherOccupation: [''],
        bloodGroup: [''],
      },
        {
          validator: this.dinamicField.bind(this)
        },
      ),

      permanentAddress: this.builder.group({
        village: [""],
        house: [""],
        road: [""],
        sector: [""],
        block: [""],
        subDistrict: [""],
        district: [""],
        postOffice: [""],
        postalCode: [""],
        country: [""],
        nationality: [""],
        nId: ["", Validators.pattern('^\\d+$')]
      }),

      presentAddress: this.builder.group({
        village: [""],
        house: [""],
        road: [""],
        sector: [""],
        block: [""],
        subDistrict: ["", [Validators.required, this.subDistrictDoesNotExist.bind(this)]],
        district: ["", [Validators.required, this.districtDoesNotExist.bind(this)]],
        postOffice: [""],
        postalCode: [""],
        country: [""],
        zone: ["", [Validators.required, this.zoneDoesNotExist.bind(this)]],

      }),

      auth: this.builder.group({
        userName: ['', [this.existUserName.bind(this)]],
        password: ["", Validators.required],
        conPassword: ["", Validators.required],
        phone: ["", [Validators.required, this.existPhone.bind(this), Validators.pattern('^\\d+$')]],
        role: ['', Validators.required],
        email: ['', [this.emailOrEmpty, this.existEmail.bind(this)]],
      }, {
          validator: this.matchPassword
        })
    });



    this.resetRadioButton();



    let userInfoGroup = <FormGroup>this.registrationForm.controls.userInfo;
    this.nameAutoSuggestion(userInfoGroup, 'fatherName');
    this.nameAutoSuggestion(userInfoGroup, 'motherName');
    this.nameAutoSuggestion(userInfoGroup, 'inviter');
    this.nameAutoSuggestion(userInfoGroup, 'spouseName');


    this.districtAutoSuggestion();
    this.subDistrictAutoSuggestion();
    this.zoneAutoSuggestion();

  }

  private resetRadioButton() {
    this.gender.setValue(false);
    this.maritalStatus.setValue(false);
    this.occupation.setValue(false);
  }

  zoneDoesNotExist(ac: AbstractControl): ValidationErrors | null {
    let data = this.zones.find(zone => zone.toLowerCase() === (ac.value.toLowerCase()));
    console.log(data);
    if (data) {
      return null;
    } else {
      return { zoneDoesNotExist: true }
    }
  }

  districtDoesNotExist(ac: AbstractControl): ValidationErrors | null {
    let data = this.districts.find(zone => zone.toLowerCase() === (ac.value.toLowerCase()));
    console.log(data);
    if (data) {
      return null;
    } else {
      return { districtDoesNotExist: true }
    }
  }

  subDistrictDoesNotExist(ac: AbstractControl): ValidationErrors | null {
    let data = this.subDistricts.find(zone => zone.toLowerCase() === (ac.value.toLowerCase()));
    console.log(data);
    if (data) {
      return null;
    } else {
      return { subDistrictDoesNotExist: true }
    }
  }

  zoneAutoSuggestion() {
    this.presentAddressZone.valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredZone = [];
        } else {
          this.filteredZone = this.zones.filter(option =>
            option.toLowerCase().includes(val.toLowerCase()))

        }
      })
  }

  districtAutoSuggestion() {

    this.presentAddressDistrict.valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredDistricts = [];
        } else {
          this.filteredDistricts = this.districts.filter(option => option.toLowerCase().startsWith(val.toLowerCase()));
        }
      });

    this.permanentAddressDistrict.valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredDistricts = [];
        } else {
          this.filteredDistricts = this.districts.filter(option => option.toLowerCase().startsWith(val.toLowerCase()));
        }
      });



  }

  subDistrictAutoSuggestion() {

    this.presentAddressSubDistrict.valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredSubDistricts = [];
        } else {
          this.filteredSubDistricts = this.subDistricts.filter(option => option.toLowerCase().startsWith(val.toLowerCase()));
        }
      })

    this.permanentAddressSubDistrict.valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredSubDistricts = [];
        } else {
          this.filteredSubDistricts = this.subDistricts.filter(option => option.toLowerCase().startsWith(val.toLowerCase()));
        }
      })
  }

  nameAutoSuggestion(fg: FormGroup, controlName: string) {
    fg.get(controlName).valueChanges
      .subscribe(val => {
        if (!val) {
          this.filteredNames = [];
        } else {
          this.filteredNames = this.names.filter(item =>
            item.name.toLowerCase().startsWith(val.toLowerCase()));
        }
      });
  }

  emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
  }
  existPhone(control: AbstractControl):
    ValidationErrors | null {
    return control.value === '' ? null : this.existenceCheck(this.autoInfo, control, 'phone')
  }

  existUserName(control: AbstractControl):
    ValidationErrors | null {
    return control.value === '' ? null : this.existenceCheck(this.autoInfo, control, 'userName')
  }

  existEmail(control: AbstractControl):
    ValidationErrors | null {
    return control.value === '' ? null : this.existenceCheck(this.autoInfo, control, 'email')
  }

  existenceCheck(list: any[], control: AbstractControl, fieldName) {
    let error = null;
    list.forEach(val => {
      if (val[fieldName].toString().startsWith(control.value)) {
        // console.log('true');
        error = { exist: true };
      }
    })

    return error;
  }

  readUrl(event: any) {
    this.url = './assets/img/add.png';
    this.photo = null;
    if (event.target.files && (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg')) {
      this.picError = false;
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
        // console.log(this.url.);
      }

      reader.readAsDataURL(event.target.files[0]);
      this.photo = event.target.files[0];
    } else {
      this.picError = true;
    }
  }

  matchPassword(ac: FormGroup) {
    let password = ac.controls.password.value;
    let conPasswordCon = ac.controls.conPassword;
    if (password != conPasswordCon.value) {
      conPasswordCon.setErrors({ missMatchPassword: true });
    } else {
      return null;
    }
    // console.log(password);
  }

  dinamicField(ac: FormControl) {
    let occupation = ac.get('occupation');
    let otherOccupation = ac.get('otherOccupation');
    let status = ac.get('status');
    let spoouseWpcabMember = ac.get('spoouseWpcabMember');
    let spouseName = ac.get('spouseName');
    // console.log(this.registrationForm)
    if (occupation.value === 'Other' || occupation.value === 'অন্যান্য') {
      this.otherOccupationSelected = true;
      if (!otherOccupation.value) {
        otherOccupation.setErrors(Validators.required);
      } else {
        otherOccupation.setErrors(null);
      }

    } else {
      this.otherOccupationSelected = false;
      otherOccupation.setErrors(null);
    }

    if (status.value === 'Married' || status.value === 'বিবাহিত') {
      this.marriedSelected = true;
      // console.log(spoouseWpcabMember.value);
      if (spoouseWpcabMember.value) {
        this.spouseWpcabMember = true;
        if (!spouseName.value) {
          spouseName.setErrors(Validators.required);
        } else {
          spouseName.setErrors(null);
        }
      } else {
        this.spouseWpcabMember = false;
      }
    } else {
      this.marriedSelected = false;
      spouseName.setErrors(null);
    }
  }

  uploadPhoto(key) {
    let storageRef = this.fb.storage().ref('img/' + this.photo.name);
    var task = storageRef.put(this.photo);
    task.on('state_changed',
      snap =>
        console.log(snap)
      ,
      err => console.log(err)
      , () => {
        // push to userinfo table
        this.db.database.ref('/users/' + key + '/userInfo').update({
          photo: task.snapshot.downloadURL
        }).then(val => {
          this.uploding = false;
          this.router.navigateByUrl('registration-sucessfull')
        });

      })
  }






  getDob() {
    return this.day.value + "/" + this.month.value + "/" + this.year.value;
  }

  getOccupation() {
    if (this.otherOccupationSelected) {

      return this.otherOccupation.value;

    } else {


      return this.occupation.value;

    }

  }



  signup() {
    if (this.registrationForm.valid) {

      this.uploding = true;

      let user = this.getUserObject();

      this.link.insertUser(user)
        .subscribe(val => {
          if (val) {
            this.uploding = false;
            this.router.navigateByUrl('registration-sucessfull');
          }
        })

    } else {
      Object.keys(this.registrationForm.controls).forEach(groupName => {
        let formGroup = <FormGroup>this.registrationForm.get(groupName);
        // console.log()
        if (formGroup.controls) {
          Object.keys(formGroup.controls).forEach(controlName =>
            formGroup.get(controlName).markAsTouched({ onlySelf: true })
          )
        }

      })
      this.footerError = true;
    }

  }
  getUserObject(): any {

    return new User(

      this.fullName.value,

      this.fatherName.value,

      this.husbandName.value,

      this.motherName.value,

      this.gender.value,

      this.getDob(),

      this.maritalStatus.value,

      this.spouseName.value,

      this.inviter.value,

      this.bloodGroup.value,

      this.getOccupation(),

      this.permanentAddressVillage.value,

      this.permanentAddressHouse.value,

      this.permanentAddressRoad.value,

      this.permanentAddressSector.value,

      this.permanentAddressBlock.value,

      this.permanentAddressSubDistrict.value,

      this.permanentAddressDistrict.value,

      this.permanentAddressPostOffice.value,

      this.permanentAddressPostalCode.value,

      this.permanentAddressCountry.value,

      this.permanentAddressNationality.value,

      this.permanentAddressnId.value,

      this.presentAddressVillage.value,

      this.presentAddressHouse.value,

      this.presentAddressRoad.value,

      this.presentAddressSector.value,

      this.presentAddressBlock.value,

      this.presentAddressSubDistrict.value,

      this.presentAddressDistrict.value,

      this.presentAddressPostOffice.value,

      this.presentAddressPostalCode.value,

      this.presentAddressCountry.value,

      this.presentAddressZone.value,

      this.userName.value,

      this.password.value,

      this.phone.value,

      this.email.value,

      this.role.value
    )
  }

}
