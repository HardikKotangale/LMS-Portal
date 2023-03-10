import cp1 from "../assets/img/Coditas.png";
import cp2 from "../assets/img/MaxSecure.png";
import cp3 from "../assets/img/quickenSol.png";
import cp4 from "../assets/img/RajaSoftwareLabs.png";
import cp5 from "../assets/img/zencon.png";
import cp6 from "../assets/img/zensoft.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp5.png"

export const Companies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="company" id="companies">
    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="company-bx wow zoomIn">
                        <h2>Associated Companies</h2><p/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme company-slider" fade touch>
                            <div className="item">
                                <img src={cp1} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={cp2} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={cp3} alt="Image" />     
                            </div>
                            <div className="item">
                              <img src={cp4} alt="Image" />    
                            </div>
                            <div className="item">
                              <img src={cp5} alt="Image" />    
                            </div>
                            <div className="item">
                              <img src={cp6} alt="Image" />    
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
