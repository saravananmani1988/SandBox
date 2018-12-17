import { Component } from '@angular/core';
import { NavController , IonicPage} from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  constructor(public navCtrl: NavController) {

  }
  name:string ='';

  doAlert(names){
    let newData = this.ref.push();
    newData.set({
      name:names
    });
}

  doLogin(){

      this.navCtrl.push('LoginPage')
  }
  doSignIn(){

    this.navCtrl.push('SignInPage')
  }

  ionViewDidLoad() {
      this.ref.on('value', resp => {
      // this.data = [];
      // this.data = snapshotToArray(resp);
    });
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
