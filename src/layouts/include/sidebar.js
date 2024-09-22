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
                    <li> <Link className="waves-effect waves-dark" to="/" aria-expanded="false"><i
                                className="fa fa-tachometer"></i><span className="hide-menu">Dashboard</span></Link>
                    </li>
                    <li> <Link to="/admins" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-user-circle-o"></i><span className="hide-menu">Admins</span></Link>
                    </li>
                    <li> <Link to="/books" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-table"></i><span className="hide-menu">Books</span></Link>
                      </li>
                      
                    <li> <Link to="/users" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-table"></i><span className="hide-menu">Users</span></Link>
                    </li>
                   
                    <li> <Link to="/borrowedoverdue" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-globe"></i><span className="hide-menu">Borrow/Overdue</span></Link>
                    </li>
                    <li> <Link to="/stock" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-bookmark-o"></i><span className="hide-menu">Stock</span></Link>
                    </li>
                    <li> <Link to="/Book_catagory" className="waves-effect waves-dark" aria-expanded="false"><i
                                className="fa fa-question-circle"></i><span className="hide-menu">Book-catagory</span></Link>
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