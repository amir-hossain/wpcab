import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Location } from '@angular/common';
import { DropDownItemsService } from '../drop-down-items.service';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import { Router,ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { TranslateService } from '@ngx-translate/core';
import { LinkService } from '../link/link.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DropDownItemsService]
})
export class EditComponent implements OnInit {
  otherOccupationSelected = false;
  loding = false;
  picError = false;
  activeUserRole;
  dateSegment;
  photo;
  //temporary profile url
  url = '';
  userChanges = 0;
  user;
  userId;
  // fetch full auth table data
  authFull = [];

  //drop down list
  selectedRole;
  roles;
  districts;
  subDistricts;
  zones;
  bloodGroups;
  months;
  names = [];

  // filtered list
  filteredName = [];
  filteredDistrict = [];
  filteredsubDistrict = [];
  filteredZone = [];

  //editing flag
  nameEditing = false;
  genderEditing = false;
  dobEditing = false;
  fatherNameEditing = false;
  motherNameEditing = false;
  maritalEditing = false;
  invitedByEditing = false;
  occupationEditing = false;
  bloodGroupEditing = false;
  phoneEdition = false;
  passwordEditing = false;
  emailEditing = false;
  userNameEditing = false;
  roleEditing = false;
  zoneEditing = false;
  subDistrictEditing = false;
  permanentAddressEditing = false;
  districtEditing = false;
  countryEditing = false;
  nationlityEditing = false;
  nidEditing = false;

  //forms
  nameForm;
  genderForm;
  dobForm;
  fatherNameForm;
  motherNameForm;
  maritalForm;
  invitedByForm;
  occupationForm;
  bloodGroupForm;
  phoneForm;
  passwordForm;
  emailForm;
  userNameForm;
  roleForm;
  zoneForm;
  subDistrictForm;
  districtForm;
  permanentAddressForm;
  countryForm;
  nationalityForm;
  nidForm;
  uploding: boolean=false;

  constructor(private db: AngularFireDatabase, private loc: Location, private ddis: DropDownItemsService, private fb: FormBuilder, private fa: FirebaseApp, private router: Router, private communicationService: CommunicationService, private ts: TranslateService, private LinkService: LinkService,activeRoute:ActivatedRoute) {

    this.loadLanguage();

  }
  private loadLanguage() {
    let lan = localStorage.getItem('lan');
    this.ts.use(lan);
  }

  hideNavBar() {
    CommunicationService.navBar = false;
    this.communicationService.emitChange();
  }

  ngOnInit() {
    this.userId = localStorage.getItem('key');
    this.hideNavBar();
    this.loding = true;
    this.activeUserRole = localStorage.getItem('activeUserRole');

    this.LinkService.getUserById(this.userId).subscribe(user => {
      this.user = user
      this.loding = false;
         this.initializeForm();
    });
    // get dropdown items
    this.roles = this.ddis.getRoles();
    this.districts = this.ddis.getDistricts();
    this.subDistricts = this.ddis.getSubDistricts();
    this.bloodGroups = this.ddis.getBloodGroups();
    this.zones = this.ddis.getZones();
    this.months = this.ddis.getMonths();

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

  existPhone(control: AbstractControl):
    ValidationErrors | null {
    return control.value === '' ? null : this.existenceCheck(this.authFull, control, 'phone')
  }


  emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
  }

  existEmail(control: AbstractControl):
    ValidationErrors | null {
    return control.value === '' ? null : this.existenceCheck(this.authFull, control, 'email')
  }

  existenceCheck(list: any[], control: AbstractControl, fieldName) {
    // console.log(fieldName);
    let error = null;
    list.forEach(val => {
      // console.log(val);
      if (val[fieldName].toString().startsWith(control.value)) {
        // console.log('true');
        error = { exist: true };
      }
    })

    return error;
  }
  uploadPhoto() {
    this.loding = true;
    let storageRef = this.fa.storage().ref('img/' + this.photo.name);
    var task = storageRef.put(this.photo);
    task.on('state_changed',
      snap =>
        console.log(snap)
      ,
      err => console.log(err)
      , () => {
        // push to userinfo table
        this.db.database.ref('/users/' + this.userId + '/userInfo').update({
          photo: task.snapshot.downloadURL
        }).then(val => {
          this.loding = false;
          this.router.navigateByUrl('details');
        });

      })
  }
  back() {
      if (this.userChanges) {
        this.loding=true;
        this.LinkService.editUser(this.user)
        .subscribe(response=>{
          if(response){
            this.loding=false;
            this.router.navigateByUrl('details');
          }
        })
        
      }else{
        this.router.navigateByUrl('details');
      }

      
  }
  edit(): any {

  }

  initializeForm() {
    this.nameForm = this.fb.group({
      fullName: [this.user.fullName, Validators.required]
    });
    this.genderForm = this.fb.group({
      gender: [this.user.gender]
    });
    // spite dd/mm/yy

    if(this.user.dob){
      this.dateSegment = (<string>this.user.dob).split('/');
      this.dobForm = this.fb.group({
        day: [this.dateSegment[0], Validators.required],
        month: [this.dateSegment[1]],
        year: [this.dateSegment[2], Validators.required]
  
      });
    }else{
      this.dobForm = this.fb.group({
        day: ["", Validators.required],
        month: [""],
        year: ["", Validators.required]
  
      });
    }
    
 
    this.fatherNameForm = this.fb.group({
      fatherName: [this.user.fatherName, Validators.required]
    });
    this.motherNameForm = this.fb.group({
      motherName: [this.user.motherName, Validators.required]
    });
    this.maritalForm = this.fb.group({
      status: [this.user.maritalStatus],
      member: [this.user.spouseName],
      spouseName: [this.user.spouseName]
    },
      {
        validator: this.dinamicField.bind(this)
      });



    this.invitedByForm = this.fb.group({
      invitedBy: [this.user.invitedBy, Validators.required]
    });

    if (this.user.occupation === 'Student' || this.user.occupation === 'Job holder' || this.user.occupation === 'Businessman') {
      this.occupationForm = this.fb.group({
        occupation: [this.user.occupation],
        otherOccupation: [''],
      },
        {
          validator: this.isOtherOccupation.bind(this)
        })
    } else {
      this.occupationForm = this.fb.group({
        occupation: ['Others'],
        otherOccupation: [this.user.occupation],
      },
        {
          validator: this.isOtherOccupation.bind(this)
        });
    }

    this.bloodGroupForm = this.fb.group({
      bloodGroup: [this.user.bloodGroup]
    });
    this.phoneForm = this.fb.group({
      phone: [this.user.phone, [Validators.required, this.existPhone.bind(this), Validators.pattern('^\\d+$')]]
    });
    this.passwordForm = this.fb.group({
      password: [this.user.password, Validators.required],
      conPassword: [this.user.password, Validators.required],
    },
      {
        validator: this.matchPassword
      });
    this.emailForm = this.fb.group({
      email: [this.user.email, [this.emailOrEmpty, this.existEmail.bind(this)]]
    });
    this.userNameForm = this.fb.group({
      userName: [this.user.userName]
    });
    this.roleForm = this.fb.group({
      role: [this.user.role]
    });
    this.zoneForm = this.fb.group({
      zone: [this.user.zone, [Validators.required, this.zoneDoesNotExixt.bind(this)]]
    });
    this.subDistrictForm = this.fb.group({
      subDistrict: [this.user.subDistrict, [Validators.required, this.subDistrictDoesNotExixt.bind(this)]]
    });
    this.permanentAddressForm = this.fb.group({
      permanentAddress: [this.user.permanentAddress, Validators.required]
    });
    this.districtForm = this.fb.group({
      district: [this.user.district, [Validators.required, this.districtDoesNotExixt.bind(this)]]
    });
    this.countryForm = this.fb.group({
      country: [this.user.country]
    });
    this.nationalityForm = this.fb.group({
      nationality: [this.user.nationality]
    });
    this.nidForm = this.fb.group({
      nid: [this.user.nid, Validators.pattern('^\\d+$')]
    });
  }

  marriedSelected;
  spouseWpcabMember;

  dinamicField(ac: FormControl) {
    let status = ac.get('status');
    let spoouseWpcabMember = ac.get('member');
    let spouseName = ac.get('spouseName');
    // console.log(this.registrationForm)

    if (status.value === 'Married') {
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

  isOtherOccupation(ac: FormControl) {
    let occupation = ac.get('occupation');
    let otherOccupation = ac.get('otherOccupation');
    // console.log(this.registrationForm)
    if (occupation.value === 'Others') {
      this.otherOccupationSelected = true;
      if (!otherOccupation.value) {
        otherOccupation.setErrors(Validators.required);
      } else {
        otherOccupation.setErrors(null);
      }

    } else {
      this.otherOccupationSelected = false;
      otherOccupation.setErrors(null);
      // return null;



    }
  }


  zoneDoesNotExixt(ac: AbstractControl): ValidationErrors | null {
    let data = this.zones.find(zone => zone.toLowerCase() === ac.value.toLowerCase());
    console.log(data);
    if (data) {
      return null;
    } else {
      return { zoneDoesNotExixt: true }
    }
  }

  districtDoesNotExixt(ac: AbstractControl): ValidationErrors | null {
    let data = this.districts.find(zone => zone.toLowerCase() === ac.value.toLowerCase());
    console.log(data);
    if (data) {
      return null;
    } else {
      return { districtDoesNotExixt: true }
    }
  }

  subDistrictDoesNotExixt(ac: AbstractControl): ValidationErrors | null {
    let data = this.subDistricts.find(zone => zone.toLowerCase() === ac.value.toLowerCase());
    console.log(data);
    if (data) {
      return null;
    } else {
      return { subDistrictDoesNotExixt: true }
    }
  }

  matchPassword(ac: FormGroup) {
    let password = ac.controls.password.value;
    let conPasswordCon = ac.controls.conPassword;
    if (password != conPasswordCon.value) {
      conPasswordCon.setErrors({ missMatchedPassword: true });
    } else {
      return null;
    }
    // console.log(password);
  }

  done(formName, fieldName, tableName, flagName, changesFlag) {
    this[flagName] = false;
    if (this[formName].valid && this[formName].get(fieldName).dirty) {
      // console.log(this[formName].get(fieldName).value);
        let val = this[formName].get(fieldName).value;
      (<Object>this[tableName])[fieldName] = val;
        this[changesFlag]++;
        console.log("changed");
        this[formName].get(fieldName).markAsPristine();
    }
  }

  statusDone() {

    this.maritalEditing = false;
    if (this.maritalForm.valid && this.maritalForm.get('status').dirty) {
        let status = this.maritalForm.get('status').value;
        let spouseName = this.maritalForm.get('spouseName').value;
        this.user.status = status;
        if (spouseName) {
          this.user.spouseName = spouseName;
        }
        
        this.userChanges++;
        this.maritalForm.get("status").markAsPristine();
        console.log("changed");

    }
  }

  occupationDone() {
    this.occupationEditing = false;

    if (this.occupationForm.valid && this.occupationForm.get('occupation').dirty ) {
      if (this.otherOccupationSelected) {
        this.user.occupation = this.occupationForm.controls.otherOccupation.value;
      } else {
        this.user.occupation = this.occupationForm.controls.occupation.value;
      }
     
      this.userChanges++;

      console.log("changes");

      this.occupationForm.get('occupation').markAsPristine();
    }
  }

  dobDone() {
    
    this.dobEditing = false;

    if (this.dobForm.valid && (this.dobForm.get("day").dirty || this.dobForm.get("month").dirty || this.dobForm.get("year").dirty) ) {
      // console.log(this.dobForm.controls.day.value);
      // console.log(this.dobForm.controls.month.value);
      // console.log(this.dobForm.controls.year.value);
      let day = this.dobForm.controls.day.value;

      let month = this.dobForm.controls.month.value;

      let year = this.dobForm.controls.year.value;

      this.dateSegment[0] = day;

      this.dateSegment[1] = month;

      this.dateSegment[2] = year;

      this.user.dob = day + "/" + month + "/" + year;
      
      this.userChanges++;

      console.log("changed");

      this.dobForm.controls.day.markAsPristine();

      this.dobForm.controls.month.markAsPristine();

      this.dobForm.controls.year.markAsPristine();
    }
  }

  cencel(formName, fieldName, tableName, flagName) {
    this[formName].setValue({
      [fieldName]: this[tableName][fieldName]
    })
    this[flagName] = false;
  }

  cencelStatus() {
    this.maritalForm.setValue({
      status: this.user.maritalStatus,
      member: [false],
      spouseName: [this.user.spouseName]

    })
    this.maritalEditing = false;
  }



  cencelOccupation() {
    if (this.user.occupation === 'Student' || this.user.occupation === 'Job holder' || this.user.occupation === 'Businessman') {
      this.occupationForm.setValue({
        occupation: this.user.occupation,
        otherOccupation: this.user.occupation
      })
    } else {
      this.occupationForm.setValue({
        occupation: 'Others',
        otherOccupation: this.user.occupation
      })
    }
    this.occupationEditing = false;
  }
  cencelPassword() {
    this.passwordForm.setValue({
      password: this.user.password,
      conPassword: this.user.password,
    })
    this.passwordEditing = false;
  }

  cencelDob() {
    this.dobForm.setValue({
      day: this.dateSegment[0],
      month: this.dateSegment[1],
      year: this.dateSegment[2],
    })
    this.dobEditing = false;
  }

  zoneAutoSuggestion(val) {
    // console.log(val);
    if (!val) {
      this.filteredZone = [];
    } else {
      this.filteredZone = this.zones.filter(option => option.toLowerCase().includes(val.toLowerCase()));
    }
  }

  nameAutoSuggestion(val) {
    // console.log(val);
    if (!val) {
      this.filteredName = [];
    } else {
      this.filteredName = this.names.filter(option => option.name.toLowerCase().startsWith(val.toLowerCase()));
    }
  }


  autoSuggestion(val, source, temp) {
    // console.log(val);
    if (!val) {
      this[temp] = [];
    } else {
      this[temp] = this[source].filter(option => option.toLowerCase().startsWith(val.toLowerCase()));
    }
  }

}
