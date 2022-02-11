import React from "react";

function Sidebar() {
  return (
    <div>
      <nav class="main-header navbar navbar-expand navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button">
              <i class="fas fa-bars"></i>
            </a>
          </li>
         
        </ul>

        <ul class="navbar-nav ml-auto"></ul>
      </nav>
      <aside class="main-sidebar sidebar-dark-warning elevation-4">
        <a href="../../index3.html" class="brand-link">
        🔬
          <span class="brand-text font-weight-light">CryptoLab</span>
        </a>

        <div class="sidebar" style={{ marginTop: "0px" }}>
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item">
                <a href="/docs/3.1//layout.html" class="nav-link">
                  <i class="nav-icon fas fa-home"></i>
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
