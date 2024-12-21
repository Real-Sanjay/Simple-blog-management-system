import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { BlogService } from '../model/blog.services';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  
  blog = { title: '', content: '', status: 'Draft' };
 

  constructor(  private blogService: BlogService,
    private router:Router){
  
  }

  savePost() {
    this.blogService.createBlog(this.blog).subscribe({
      next:(response)=>{
        alert('Post Saved Successfully');
        this.router.navigate(['/list'])
      },
      error:(error)=>{
        alert('Error Saving Post, Please try again');
      }
    });


  // const storedBlogs = localStorage.getItem('blogs'); 
  // const blogs = storedBlogs ? JSON.parse(storedBlogs) : []; // Convert stored string data to an object array if available
  // blogs.push(this.blog); // Add the current blog to the array
  // localStorage.setItem('blogs', JSON.stringify(blogs)); // Save the updated array back to local storage as a JSON string
  // alert('Post saved successfully!'); // Notify the user
  }
}