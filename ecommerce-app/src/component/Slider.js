import './Slider.css';
function Slider() {
    return (
        <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://codedesign.org/storage/app/media/uploaded-files/how-to-choose-the-right-e-commerce-agency.jpeg" className="d-block w-100 height-700" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" className="d-block w-100 height-700" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.principalrelocation.com/wp-content/uploads/2018/06/ecommerce1.png" className="d-block w-100 height-700" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    );
}
export default Slider;