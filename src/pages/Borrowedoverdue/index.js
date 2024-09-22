import React,{useState,useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Borrowedoverdue() {
 
  return (
    <AdminLayout>

<div class="container my-5">
        <h1 class="mb-4">Borrowed and Overdue Books</h1>
        
  
        <table class="table table-bordered table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Borrower</th>
                    <th scope="col">Issue Date</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
             
                <tr>
                    <th scope="row">1</th>
                    <td>The Great Gatsby</td>
                    <td>John Doe</td>
                    <td>2023-08-15</td>
                    <td>2023-09-15</td>
                    <td class="borrowed">Borrowed</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">View</a>
                        <a href="#" class="btn btn-danger btn-sm">Remind</a>
                    </td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>To Kill a Mockingbird</td>
                    <td>Jane Smith</td>
                    <td>2023-07-01</td>
                    <td>2023-08-01</td>
                    <td class="overdue">Overdue</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">View</a>
                        <a href="#" class="btn btn-warning btn-sm">Send Reminder</a>
                    </td>
                </tr>

             
                <tr>
                    <th scope="row">3</th>
                    <td>1984</td>
                    <td>Robert Johnson</td>
                    <td>2023-09-01</td>
                    <td>2023-10-01</td>
                    <td class="borrowed">Borrowed</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">View</a>
                        <a href="#" class="btn btn-danger btn-sm">Remind</a>
                    </td>
                </tr>

             
                <tr>
                    <th scope="row">4</th>
                    <td>Pride and Prejudice</td>
                    <td>Alice Brown</td>
                    <td>2023-06-15</td>
                    <td>2023-07-15</td>
                    <td class="overdue">Overdue</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">View</a>
                        <a href="#" class="btn btn-warning btn-sm">Send Reminder</a>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>


    </AdminLayout>
  )
}

export default Borrowedoverdue;