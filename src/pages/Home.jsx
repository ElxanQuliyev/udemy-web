import React from "react";
import MainSlider from "../components/mainSlider/MainSlider";
import PopularCourses from "../components/popular-courses/PopularCourses";

const Home = () => {
  return (
    <>
      <MainSlider />
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-004-computer"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">2,769 online courses</h5>
                  <p className="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-028-learning-1"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">Expert instruction</h5>
                  <p className="p-md">Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-032-tablet"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">Lifetime access</h5>
                  <p className="p-md">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About end */}
      <section id="about2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <img className="img-fluid" src="./image/image-01.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="about2-right">
                <h3 class="h3-sm">
                  Transform your life through online education
                </h3>
                <p>
                  An enim nullam tempor sapien gravida donec porta and blandit
                  ipsum enim justo integer velna vitae auctor integer congue
                  magna and purus pretium risus ligula rutrum luctus ultrice
                </p>
                <ul class="txt-list mb-15">
                  <li>
                    Nullam rutrum eget nunc varius etiam mollis risus undo
                  </li>
                  <li>
                    Integer congue magna at pretium purus pretium ligula at
                    rutrum risus luctus dolor auctor ipsum blandit purus
                  </li>
                  <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                  <li>
                    At pretium purus integer congue magna pretium ligula at
                    ipsum blandit purus rutrum risus luctus dolor auctor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About 2 End  */}
      <PopularCourses/>
    </>
  );
};

export default Home;
