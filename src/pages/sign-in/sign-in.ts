import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
windowRef: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }
  doLogin(){

      this.navCtrl.push('LoginPage')
  }

    ionViewDidLoad() {
       this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
         'size': 'invisible',
         'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          }
       });
    }
    doSignIn(phonenumber:number){
        const appVerifier = this.recaptchaVerifier;
        const phoneNumberString = "+91"+phonenumber;
        firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
         .then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.navCtrl.push('VerifyotpPage',{
        confirmationResult:confirmationResult
      });

      })
        .catch(function (error) {
          console.error("SMS not sent", error);
        });

 }
}
