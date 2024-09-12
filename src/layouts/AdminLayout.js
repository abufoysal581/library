import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

import './assets/node_modules/bootstrap/css/bootstrap.min.css';
import './assets/node_modules/perfect-scrollbar/css/perfect-scrollbar.css';
import './assets/node_modules/morrisjs/morris.css';
import './assets/node_modules/c3-master/c3.min.css';
// import './assets/css/style.css';
// import './assets/css/pages/dashboard1.css';
// import './assets/css/colors/default.css';




function AdminLayout({children}) {
  return (
    <div id="main-wrapper">
    {/* ============================================================== */}
    {/* Topbar header - style you can find in pages.scss */}
    {/* ============================================================== */}
    <Header />
    {/* ============================================================== */}
    {/* End Topbar header */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    <Sidebar />
    {/* ============================================================== */}
    {/* End Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Page wrapper  */}
    {/* ============================================================== */}
    <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <main>{children}</main>
        {/* ============================================================== */}
        {/* End Container fluid  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* footer */}
        {/* ============================================================== */}
        <Footer />
        
        {/* ============================================================== */}
        {/* End footer */}
        {/* ============================================================== */}
    </div>
    {/* ============================================================== */}
    {/* End Page wrapper  */}
    {/* ============================================================== */}
</div>
  )
}

export default AdminLayout