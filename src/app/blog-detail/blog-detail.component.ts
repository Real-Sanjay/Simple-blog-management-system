import { Component } from '@angular/core';
import { BlogService } from '../model/blog.services';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blogs: any[] = []; // Stores the list of blogs
  selectedBlog: any = null; // Holds the blog currently selected for viewing

  constructor(private blogService: BlogService) {
    this.loadBlogs();

  }
  ngOnInit() {


    // const storedBlogs = localStorage.getItem('blogs');
    // this.blogs = storedBlogs ? JSON.parse(storedBlogs) : []; // Load blogs from localStorage
  }

  loadBlogs(){
    this.blogService.getBlogs().subscribe({
      next:(data)=>{
        this.blogs =data;
      },
      error:(error)=>{
        console.error('There was an error!', error);
    }
  });
  }

  // Set the clicked blog as the selected blog for detail view
  selectBlog(blog: any) {
    this.selectedBlog = blog;
  }

  // Clear the selected blog and return to the blog list view
  clearSelection() {
    this.selectedBlog = null;
  }
}
