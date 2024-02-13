import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
//import { ChiefRegisterComponent } from './chief-register/chief-register.component';
import { LoginPopUpComponent } from './login-popup/login-popup.component';
import { TestComponent } from './test/test.component';

//import { RegisterWithThirdPartyComponent } from './register-with-third-party/register-with-third-party.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-popup', component: LoginPopUpComponent },
  { path: 'register', component: CustomerRegisterComponent },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'send-email/:mode', component: SendEmailComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  //{ path: 'chief-register', component: ChiefRegisterComponent },
  { path: 'test', component: TestComponent },

  //{ path: 'register/third-party/:provider', component: RegisterWithThirdPartyComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
