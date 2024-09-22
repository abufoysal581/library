import React,{useState,useEffect} from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Books() {
 
  return (
    <AdminLayout>

    <div className="container mt-5">
      <h2>Book List</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
          <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Actions</th>
          </tr>
          </tr>
          <tbody>
          <tr>
                    <th scope="row">1</th>
                    <td><img src="../assets/images/The_Great_Gatsby_Cover_1925_Retouched (1).jpg" alt="Book Image" class="book-image"/></td>
                    <td>The Great Gatsby</td>
                    <td>F. Scott Fitzgerald</td>
                    <td class="action-buttons">
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><img src="../assets/images/To_Kill_a_Mockingbird_(first_edition_cover) (1).jpg" alt="Book Image" class="book-image"/></td>
                    <td>To Kill a Mockingbird</td>
                    <td>Harper Lee</td>
                    <td class="action-buttons">
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><img src="../assets/images/1984_first_edition_cover (1).jpg" alt="Book Image" class="book-image"/></td>
                    <td>1984</td>
                    <td>George Orwell</td>
                    <td class="action-buttons">
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td><img src="../assets/images/PrideAndPrejudiceTitlePage (1).jpg" alt="Book Image" class="book-image"/></td>
                    <td>Pride and Prejudice</td>
                    <td>Jane Austen</td>
                    <td class="action-buttons">
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
          </tbody>
        </thead>
        
      </table>
    </div>


    </AdminLayout>
  )
}

export default Books;