import { Component, OnInit } from '@angular/core';
import { BlogService } from '../model/blog.services';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];
  
  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.loadBlogs();
    // const storedBlogs = localStorage.getItem('blogs');
    // this.blogs = storedBlogs ? JSON.parse(storedBlogs) : [];
  }

  loadBlogs(){
    this.blogService.getBlogs().subscribe({
      next: (data)=>{
        this.blogs= data;
      },
      error: (error)=>{
        console.error('There was an error!', error);
      }
    });
  }

  
  deleteDrafts(id:string){
    this.blogService.deleteBlog(id).subscribe({
      next:()=>{
        this.blogs = this.blogs.filter(res=> res._id !== id);
        alert('Post Deleted Successfully');
      },
      error:(error)=>{
        console.log(id);
        console.error('There was an error!', error);
        alert('Error Deleting Post, Please try again');
      }
    });
    // let index = this.blogs.findIndex(res => res.id === id);
    // this.blogs.splice(index,1);
    // console.log("deleted!", index);
  }
  // selectBlog(blog: any) {
    //   console.log('Selected Blog:', blog);
    // }
}