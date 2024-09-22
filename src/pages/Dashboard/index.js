import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>

     <div class="w-100">
           
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

        
            <div class="content">
                <h1 class="mb-4">Dashboard</h1>

               
                <div class="row">
                    <div class="col-md-3">
                        <div class="card text-white bg-primary mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Total Books</h5>
                                <p class="card-text fs-4">2,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-white bg-success mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Total Members</h5>
                                <p class="card-text fs-4">500</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-white bg-danger mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Pending Returns</h5>
                                <p class="card-text fs-4">75</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-white bg-warning mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Total Fines</h5>
                                <p class="card-text fs-4">$1,200</p>
                            </div>
                        </div>
                    </div>
                </div>

   
                <div class="card">
                    <div class="card-header">
                        Recent Transactions
                    </div>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Member</th>
                                    <th scope="col">Issue Date</th>
                                    <th scope="col">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>TXN001</td>
                                    <td>The Great Gatsby</td>
                                    <td>John Doe</td>
                                    <td>2023-09-01</td>
                                    <td>2023-10-01</td>
                                </tr>
                                <tr>
                                    <td>TXN002</td>
                                    <td>To Kill a Mockingbird</td>
                                    <td>Jane Smith</td>
                                    <td>2023-09-05</td>
                                    <td>2023-10-05</td>
                                </tr>
                                <tr>
                                    <td>TXN003</td>
                                    <td>1984</td>
                                    <td>Bob Johnson</td>
                                    <td>2023-09-10</td>
                                    <td>2023-10-10</td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  

    </AdminLayout>       
  )
}

export default Dashboard