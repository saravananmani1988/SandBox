import { Component } from '@angular/core';
import { NavController , IonicPage} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.data=[
      {
        name:'saravanan'
      },
      {
        name:'kesav'
      },
      {
        name:'jai'
      }
    ]

  }
  name:string ='';

  doAlert(names){
    this.data.push({'name':names})
  }

  doLogin(){
    console.log(this.data);
      // this.navCtrl.push('LoginPage')
  }


}
