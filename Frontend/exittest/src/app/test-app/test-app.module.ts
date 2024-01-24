import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { TestAppRoutingModule } from './test-app-routing.module';
//import { RegisterComponent } from './register/register.component';

import { TestAppRoutingModule } from './test-app-routing.module';
//import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
//import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { authInterceptorProviders } from './auth.interceptor';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
// import { AddReviewsComponent } from './add-reviews/add-reviews.component';
// import { SidebarComponent } from './admin/sidebar/sidebar.component';
// import { UsersComponent } from './admin/users/users.component';
// import { ProductsComponent } from './admin/products/products.component';
// import { ReviewsComponent } from './admin/reviews/reviews.component';
// import { AddProductComponent } from './admin/products/add-product/add-product.component';
// import { RequestReviewComponent } from './request-review/request-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ResultComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TestAppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [authInterceptorProviders]
})
export class TestAppModule { }
