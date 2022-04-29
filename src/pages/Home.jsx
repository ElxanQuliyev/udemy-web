import React from "react";
import MainSlider from "../components/mainSlider/MainSlider";

const Home = () => {
  return (
    <>
      <MainSlider />
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div class="d-flex icon-xs">
                <span class="flaticon-004-computer"></span>
                <div class="abox-1-txt">
                  <h5 class="h5-md">2,769 online courses</h5>
                  <p class="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
