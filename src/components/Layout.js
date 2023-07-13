import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://i.pinimg.com/564x/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt="" width="30" height="24"/>
    </a>
    <a class="navbar-brand" href="#">FOOOODY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">about us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default Layout;