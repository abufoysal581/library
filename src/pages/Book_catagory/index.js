import React,{useState,useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Book_catagory() {
 
  return (
    <AdminLayout>
    
    
    <div class="container my-5">
        <h1 class="mb-4">Book Categories</h1>
        
       
        <div class="mb-3">
            <a href="#" class="btn btn-success">Add New Category</a>
        </div>
        
     
        <table class="table table-bordered table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
              
                <tr>
                    <th scope="row">1</th>
                    <td>Fiction</td>
                    <td>Books that contain fictional stories and narratives.</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>

           
                <tr>
                    <th scope="row">2</th>
                    <td>Science</td>
                    <td>Books related to scientific discoveries, research, and information.</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>

       
                <tr>
                    <th scope="row">3</th>
                    <td>History</td>
                    <td>Books that explore historical events, biographies, and timelines.</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>

          
                <tr>
                    <th scope="row">4</th>
                    <td>Children's Books</td>
                    <td>Books written specifically for young readers.</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    </AdminLayout>
  )
}

export default Book_catagory;