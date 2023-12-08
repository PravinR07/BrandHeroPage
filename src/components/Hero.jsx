
const Hero = () => {
  return (
    <>
      <main className="container hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES</p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Avaliable On</p>

            <div className="brand-icons">
              <img src="../../public/images/brand1.png"  className="brand-image1"/>
              <img src="../../public/images/brand2.png"
              className="brand-image1"
              />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="../../public/images/sho.png" />
        </div>
      </main>
    </>
  )
}

export default Hero