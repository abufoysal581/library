import React from 'react'

function Header() {
  return (
    <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    {/* Logo icon */}<b>
                        {/*You can put here icon as well // <i className="wi wi-sunset"></i> //*/}
                        {/* Dark Logo icon */}
                        <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                        {/* Light Logo icon */}
                        <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                    </b>
                    {/*End Logo icon */}
                    {/* Logo text */}<span>
                        {/* dark Logo text */}
                        <img src="/assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                        {/* Light Logo text */}
                        <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span>
                </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div className="navbar-collapse">
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                            href="javascript:void(0)"><i className="fa fa-bars"></i></a> </li>
                    {/* ============================================================== */}
                    {/* Search */}
                    {/* ============================================================== */}
                    <li className="nav-item hidden-xs-down search-box"> <a
                            className="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:void(0)"><i
                                className="fa fa-search"></i></a>
                        <form className="app-search">
                            <input type="text" className="form-control" placeholder="Search & enter"/> <a
                                className="srh-btn"><i className="fa fa-times"></i></a></form>
                    </li>
                </ul>
                {/* ============================================================== */}
                {/* User profile and search */}
                {/* ============================================================== */}
                <ul className="navbar-nav my-lg-0">
                    {/* ============================================================== */}
                    {/* Profile */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown u-pro">
                        <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#"
                            id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                src="../assets/images/users/1.jpg" alt="user" className="" /> <span
                                className="hidden-md-down">Mark Sanders &nbsp;</span> </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

  )
}

export default Header