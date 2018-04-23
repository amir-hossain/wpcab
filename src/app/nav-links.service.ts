import { Injectable } from '@angular/core';
const adminLinks=[
  {
    label:"logo",
    link:"/home"
  },
  {
    label:"Home",
    link:"/home"
  },
  {
    label:"Profile",
    link:"/profile"
  },
  {
    label:"Registration",
    link:"/registration"
  },
  {
    label:"Finance",
    link:"/finance"
  },
  {
    label:"Collection",
    link:"/collection"
  },
  {
    label:"Notification",
    link:"/notification"
  },
  {
    label:"Request",
    link:"/request"
  }
];

const userLinks=[
  {
    label:"logo",
    link:"/home"
  },
  {
    label:'Home',
    link:'/home'
  },
  {
    label:'Profile',
    link:'/profile'
  },
  {
    label:'Finance',
    link:'/finance'
  },
  {
    label:'Notification',
    link:'/notification'
  }
];

const accountantLinks=[
  {
    label:"logo",
    link:"/home"
  },
  {
    label:'Home',
    link:'/home'
  },{
    label:'Profile',
    link:'/profile'
  },
  {
    label:'Registeration',
    link:'/registration'
  },
  {
    label:'Finance',
    link:'/finance'
  },
  {
    label:'Collection',
    link:'/collection'
  },
  {
    label:'Notification',
    link:'/notification'
  },
  {
    label:'Accounts',
    link:'/accounts'
  }
];
const otherLinks=[
  {
    label:"logo",
    link:"/home"
  },
  {
    label:'Home',
    link:'/home'
  },
  {
    label:'Profile',
    link:'/profile'
  },
  {
    label:'Registeration',
    link:'/registration'
  },
  {
    label:'Finance',
    link:'/finance'
  },
  {
    label:"Collection",
    link:"/collection"
  },
  {
    label:'Notification',
    link:'/notification'
  }
]
@Injectable()
export class NavLinksService {
  getAdminLinks(){
    return adminLinks;
  }

  getUserLinks(){
    return userLinks;
  }

  getAccountantLinks(){
    return accountantLinks;
  }

  getOherLinks(){
    return otherLinks;
  }

}
