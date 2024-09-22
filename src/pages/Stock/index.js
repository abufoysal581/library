import React,{useState,useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Stock() {
 
  return (
    <AdminLayout>

<div class="container my-5">
        <h1 class="mb-4">Book Stock</h1>

      
        <table class="table table-bordered table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                    <th scope="col">Total Stock</th>
                    <th scope="col">Available Stock</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
          
                <tr>
                    <th scope="row">1</th>
                    <td>The Great Gatsby</td>
                    <td>F. Scott Fitzgerald</td>
                    <td>Fiction</td>
                    <td>10</td>
                    <td class="sufficient-stock">6</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Add Stock</a>
                        <a href="#" class="btn btn-danger btn-sm">Remove Stock</a>
                    </td>
                </tr>

         
                <tr>
                    <th scope="row">2</th>
                    <td>To Kill a Mockingbird</td>
                    <td>Harper Lee</td>
                    <td>Classic</td>
                    <td>7</td>
                    <td class="low-stock">1</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Add Stock</a>
                        <a href="#" class="btn btn-danger btn-sm">Remove Stock</a>
                    </td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>1984</td>
                    <td>George Orwell</td>
                    <td>Dystopian</td>
                    <td>15</td>
                    <td class="sufficient-stock">10</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Add Stock</a>
                        <a href="#" class="btn btn-danger btn-sm">Remove Stock</a>
                    </td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>Pride and Prejudice</td>
                    <td>Jane Austen</td>
                    <td>Romance</td>
                    <td>5</td>
                    <td class="low-stock">0</td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm">Add Stock</a>
                        <a href="#" class="btn btn-danger btn-sm">Remove Stock</a>
                    </td>
                </tr>

              
            </tbody>
        </table>
    </div>


    </AdminLayout>
  )
}

export default Stock;