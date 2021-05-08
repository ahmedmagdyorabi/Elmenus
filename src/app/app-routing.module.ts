import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { OnlineDeliveryComponent } from './Components/online-delivery/online-delivery.component';
import { ResturantProfileComponent } from './Components/resturant-profile/resturant-profile.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { GiftComponent } from './Components/gift/gift.component';
import { SendGiftComponent } from './Components/send-gift/send-gift.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { UserOrderComponent } from './Components/user-order/user-order.component';

const routes: Routes = [
  { path: 'Admin', component: AdminDashboardComponent },
  { path: 'Privacy', component: PrivacyComponent },
  { path: 'TermsAndConditions', component: TermsComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Gift-Meals', component: GiftComponent },
  { path: 'My-Order', component: UserOrderComponent, canActivate: [AuthGuardGuard] },
  { path: 'delivery', component: OnlineDeliveryComponent },
  { path: 'resturants/:rid', component: ResturantProfileComponent },
  { path: 'settings', component: UserProfileComponent, canActivate: [AuthGuardGuard] },
  { path: 'gift', component: GiftComponent },
  { path: 'sendGift', component: SendGiftComponent },
  { path: "DineOut", loadChildren: () => import('./Components/dine-out/dine-out.module').then(m => m.DineOutModule) },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardGuard] },
  { path: 'sent', component: ThankYouComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
