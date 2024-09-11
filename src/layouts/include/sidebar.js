import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
	<aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li> <a className="waves-effect waves-dark" href="index.html" aria-expanded="false"><i
                                className="fa fa-tachometer"></i><span className="hide-menu">Dashboard</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false"><i
                                className="fa fa-user-circle-o"></i><span className="hide-menu">Profile</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false"><i
                                className="fa fa-table"></i><span className="hide-menu">Tables</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="icon-fontawesome.html" aria-expanded="false"><i
                                className="fa fa-smile-o"></i><span className="hide-menu">Icons</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="map-google.html" aria-expanded="false"><i
                                className="fa fa-globe"></i><span className="hide-menu">Map</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false"><i
                                className="fa fa-bookmark-o"></i><span className="hide-menu">Blank</span></a>
                    </li>
                    <li> <a className="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false"><i
                                className="fa fa-question-circle"></i><span className="hide-menu">404</span></a>
                    </li>
                </ul>
               
            </nav>
            {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
    </aside>
  )
}

export default Sidebar