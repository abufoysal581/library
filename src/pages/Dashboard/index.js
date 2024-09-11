import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
       <div className="container-fluid">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Dashboard</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Sales Chart and browser state*/}
            {/* ============================================================== */}
            <div className="row">
                {/* Column */}
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex no-block">
                                <div>
                                    <h5 className="card-title mb-0">Sales Chart</h5>
                                </div>
                                <div className="ms-auto">
                                    <ul className="list-inline text-center font-12">
                                        <li><i className="fa fa-circle text-success"></i> SITE A</li>
                                        <li><i className="fa fa-circle text-info"></i> SITE B</li>
                                        <li><i className="fa fa-circle text-primary"></i> SITE C</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="" id="sales-chart" style={{height: "355px"}}></div>
                        </div>
                    </div>
                </div>
                {/* Column */}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex mb-4 no-block">
                                <h5 className="card-title mb-0 align-self-center">Our Visitors</h5>
                                <div className="ms-auto">
                                    <select className="form-select b-0">
                                        <option selected="">Today</option>
                                        <option value="1">Tomorrow</option>
                                    </select>
                                </div>
                            </div>
                            <div id="visitor" style={{height:"260px",width:"100%"}}></div>
                            <ul className="list-inline mt-4 text-center font-12">
                                <li><i className="fa fa-circle text-purple"></i> Tablet</li>
                                <li><i className="fa fa-circle text-success"></i> Desktops</li>
                                <li><i className="fa fa-circle text-info"></i> Mobile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* End Sales Chart */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Projects of the Month */}
            {/* ============================================================== */}
            <div className="row">
                {/* Column */}
                <div className="col-lg-8 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                                    <h5 className="card-title">Projects of the Month</h5>
                                </div>
                                <div className="ms-auto">
                                    <select className="form-select b-0">
                                        <option selected="">January</option>
                                        <option value="1">February</option>
                                        <option value="2">March</option>
                                        <option value="3">April</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive mt-3 no-wrap">
                                <table className="table vm no-th-brd pro-of-month">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Assigned</th>
                                            <th>Name</th>
                                            <th>Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:"50px"}}><span className="round">S</span></td>
                                            <td>
                                                <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small>
                                            </td>
                                            <td>Elite Admin</td>
                                            <td>$3.9K</td>
                                        </tr>
                                        <tr className="active">
                                            <td><span className="round"><img src="assets/images/users/2.jpg"
                                                        alt="user" width="50"/></span></td>
                                            <td>
                                                <h6>Andrew</h6><small className="text-muted">Project Manager</small>
                                            </td>
                                            <td>Real Homes</td>
                                            <td>$23.9K</td>
                                        </tr>
                                        <tr>
                                            <td><span className="round round-success">B</span></td>
                                            <td>
                                                <h6>Bhavesh patel</h6><small className="text-muted">Developer</small>
                                            </td>
                                            <td>MedicalPro Theme</td>
                                            <td>$12.9K</td>
                                        </tr>
                                        <tr>
                                            <td><span className="round round-primary">N</span></td>
                                            <td>
                                                <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small>
                                            </td>
                                            <td>Elite Admin</td>
                                            <td>$10.9K</td>
                                        </tr>
                                        <tr>
                                            <td><span className="round round-warning">M</span></td>
                                            <td>
                                                <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small>
                                            </td>
                                            <td>Helping Hands</td>
                                            <td>$12.9K</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Column */}
                {/* Column */}
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="up-img" style={{backgroundImage:"url(../assets/images/big/img1.jpg)"}}></div>
                        <div className="card-body">
                            <h5 className=" card-title">Business development of rules</h5>
                            <span className="label label-info label-rounded">Technology</span>
                            <p className="mb-0 mt-3">Titudin venenatis ipsum aciat. Vestibu ullamer quam. nenatis
                                ipsum ac feugiat. Ibulum ullamcorper.</p>
                            <div className="d-flex mt-3">
                                <a className="link" href="javascript:void(0)">Read more</a>
                                <div className="ms-auto align-self-center">
                                    <a href="javascript:void(0)" className="link me-2"><i
                                            className="fa fa-heart-o"></i></a>
                                    <a href="javascript:void(0)" className="link me-2"><i
                                            className="fa fa-share-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* End Projects of the Month */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Notification And Feeds */}
            {/* ============================================================== */}
            <div className="row">
                {/* Start Notification */}
                <div className="col-lg-6 col-md-12">
                    <div className="card card-body mailbox">
                        <h5 className="card-title">Notification</h5>
                        <div className="message-center" style={{height: "420px !important;"}}>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Luanch Admin</h6> <span className="mail-desc">Just see the my new admin!</span>
                                    <span className="time">9:30 AM</span>
                                </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-success btn-circle"><i className="fa fa-calendar-check-o"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Event today</h6> <span className="mail-desc">Just a reminder that you have
                                        event</span> <span className="time">9:10 AM</span>
                                </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-info btn-circle"><i className="fa fa-cog text-white"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Settings</h6> <span className="mail-desc">You can customize this template as you
                                        want</span> <span className="time">9:08 AM</span>
                                </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-primary btn-circle"><i className="fa fa-user"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Pavan kumar</h6> <span className="mail-desc">Just see the my admin!</span> <span
                                        className="time">9:02 AM</span>
                                </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-info btn-circle"><i className="fa fa-cog text-white"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Customize Themes</h6> <span className="mail-desc">You can customize this template as you
                                        want</span> <span className="time">9:08 AM</span>
                                </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                                <div className="btn btn-primary btn-circle"><i className="fa fa-user"></i></div>
                                <div className="mail-contnet">
                                    <h6 className="text-dark font-medium mb-0">Pavan kumar</h6> <span className="mail-desc">Just see the my admin!</span> <span
                                        className="time">9:02 AM</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Notification */}
                {/* Start Feeds */}
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feeds</h5>
                            <ul className="feeds">
                                <li>
                                    <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending
                                    tasks. <span className="text-muted">Just Now</span>
                                </li>
                                <li>
                                    <div className="bg-light-success"><i className="fa fa-server"></i></div> Server #1
                                    overloaded.<span className="text-muted">2 Hours ago</span>
                                </li>
                                <li>
                                    <div className="bg-light-warning"><i className="fa fa-shopping-cart"></i></div> New
                                    order received.<span className="text-muted">31 May</span>
                                </li>
                                <li>
                                    <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user
                                    registered.<span className="text-muted">30 May</span>
                                </li>
                                <li>
                                    <div className="bg-light-inverse"><i className="fa fa-bell-o"></i></div> New Version
                                    just arrived. <span className="text-muted">27 May</span>
                                </li>
                                <li>
                                    <div className="bg-light-info"><i className="fa fa-bell-o"></i></div> You have 4 pending
                                    tasks. <span className="text-muted">Just Now</span>
                                </li>
                                <li>
                                    <div className="bg-light-danger"><i className="fa fa-user"></i></div> New user
                                    registered.<span className="text-muted">30 May</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Feeds */}
            </div>
            {/* ============================================================== */}
            {/* End Notification And Feeds */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* End Page Content */}
            {/* ============================================================== */}
        </div>
    </AdminLayout>       
  )
}

export default Dashboard