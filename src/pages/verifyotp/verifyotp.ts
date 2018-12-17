import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the VerifyotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyotp',
  templateUrl: 'verifyotp.html',
})
export class VerifyotpPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.confirmationResult = navParams.get("confirmationResult");
    console.log(this.confirmationResult);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyotpPage');
    console.log(this.confirmationResult);
  }

  doVerifyOtp(otp:string) {
    const verificationCode = otp;
    console.log("OTP is"+verificationCode);
    this.confirmationResult
                  .confirm(verificationCode)
                  .then( result => {

                    this.user = result.user;
                    console.log("this.user")
                    this.navCtrl.push('LoginPage');

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}
