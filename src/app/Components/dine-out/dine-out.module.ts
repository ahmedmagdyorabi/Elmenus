import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DineOutComponent } from './dine-out/dine-out.component';
import { DiscoverByMoodsComponent } from './dine-out/discover-by-moods/discover-by-moods.component';
import { DiscoverByLocationComponent } from './dine-out/discover-by-location/discover-by-location.component';
import { HiddenGemsComponent } from './dine-out/hidden-gems/hidden-gems.component';
import { DineOutDetailsComponent } from './dine-out-details/dine-out-details.component';
import { SidebarComponent } from './dine-out-details/sidebar/sidebar.component';
import { DiscoverByCategoryComponent } from './dine-out-details/discover-by-category/discover-by-category.component';
import { DiscoverByDishesComponent } from './dine-out/discover-by-dishes/discover-by-dishes.component';
import {TranslateModule} from '@ngx-translate/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';



const routes : Routes=[{path:'' ,component: DineOutComponent},
{path:'RestaurantDish/:Dish',component: DineOutDetailsComponent},
{path:'RestaurantMood/:Mood',component: DineOutDetailsComponent},
{path:'RestaurantLocation/:Location',component: DineOutDetailsComponent},
{path:'',redirectTo:'/Dineout', pathMatch:'full'}]
@NgModule({
  declarations: [DiscoverByMoodsComponent,DineOutComponent, DiscoverByLocationComponent, HiddenGemsComponent, DineOutDetailsComponent, SidebarComponent,DiscoverByCategoryComponent, DiscoverByDishesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgImageSliderModule,
    FormsModule
  ]
})
export class DineOutModule { }
