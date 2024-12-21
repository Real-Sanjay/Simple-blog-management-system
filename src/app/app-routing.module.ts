import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'list', component: BlogListComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'detail', component: BlogDetailComponent },
  {path: 'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  { path: '', redirectTo: '/header', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}