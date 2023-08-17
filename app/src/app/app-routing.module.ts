import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from 'src/app/counter/counter/counter.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AddPostComponent } from 'src/app/posts/add-post/add-post.component';
import { EditPostComponent } from 'src/app/posts/edit-post/edit-post.component';
import { PostsListComponent } from 'src/app/posts/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
