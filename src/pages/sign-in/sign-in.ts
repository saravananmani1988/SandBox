import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { RoomPage } from  '../room/room';
import * as firebase from 'firebase';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  data = { nickname:"" };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  enterNickname() {
  this.navCtrl.setRoot(HomePage, {
    nickname: this.data.nickname
    });
  }

doSignIn(){

      // Turn off phone auth app verification.
      firebase.auth().settings.appVerificationDisabledForTesting = true;

      var phoneNumber = "+918056037995";
      var testVerificationCode = "123456";

      // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
      // This will resolve after rendering without app verification.
      var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      // signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
      // reCAPTCHA response.
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            // confirmationResult can resolve with the whitelisted testVerificationCode above.
            return confirmationResult.confirm(testVerificationCode)
          }).catch(function (error) {
            // Error; SMS not sent
            // ...
          });
           }
}
