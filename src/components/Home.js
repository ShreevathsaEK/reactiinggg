
import Back1 from "./Back1";
import Back2 from "./Back2";
import Back3 from "./Back3";
import Footer from "./Footer";

const Home=()=>{
    return(
        <>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Back1 />
    </div>
    <div class="carousel-item">
      <Back2/>
    </div>
    <div class="carousel-item">
      <Back3/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Hi There</h5>
    <p class="card-text">Lets go to the menu page to see the list of the foods we have</p>
    <a href="Menu" class="btn btn-primary">MENU</a>
  </div>
</div>
<Footer/>
</>
    );
}
export default Home;