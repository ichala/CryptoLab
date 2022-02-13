import React from "react";

function Sidebar() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
         
        </ul>

        <ul className="navbar-nav ml-auto"></ul>
      </nav>
      <aside className="main-sidebar sidebar-dark-warning elevation-4">
        <a href="../../index3.html" className="brand-link">
        <img src="./logo.gif" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" ></img>
          <h4><span className="brand-text font-weight-light">Crypto<sup className="text-muted"><span class="badge bg-warning"><b>Lab</b></span></sup></span></h4>
        </a>

        <div className="sidebar" style={{ marginTop: "0px" }}>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="/docs/3.1//layout.html" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </a>
              </li>
             
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
