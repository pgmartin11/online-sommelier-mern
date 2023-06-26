import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CompilationComponent } from "./compilation/compilation.component";
import { ReviewService } from "./providers/review.service";
import { ReviewComponent } from "./review/review.component";
import { ReviewDetailComponent } from "./review-detail/review-detail.component";
import { NewReviewComponent } from "./new-review/new-review.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "reviews", component: CompilationComponent },
  { path: "reviews/:id", component: ReviewDetailComponent },
  { path: "reviews/delete/:id", component: ReviewDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CompilationComponent,
    HomeComponent,
    ReviewComponent,
    ReviewDetailComponent,
    NewReviewComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  // register ReviewService in the module to make available to all components
  providers: [ReviewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
