import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Footer from "../../common/footer";

// Images
import Post1 from "../../asset/img/posts/4.jpg";
import Post2 from "../../asset/img/posts/2.jpg";
import Post3 from "../../asset/img/posts/1.jpg";
import Post4 from "../../asset/img/posts/3.jpg";
import Post5 from "../../asset/img/posts/5.jpg";
import Post6 from "../../asset/img/posts/6.jpg";
const News = () => {
  const NewsData = [
    {
      name: "NFT",
      title: " How to Create Your 1st Crypto NFTs",
      date: "25.06.23",
      view: "17",
      img: Post1,
    },
    {
      name: "Token",
      title: " The new token is launching this planet",
      date: "21.06.23",
      view: "89",
      img: Post2,
    },
    {
      name: "NFT",
      title: " Save thousands of lives through this NFT",
      date: " 19.06.23",
      view: "142",
      img: Post3,
    },
    {
      name: "Metaverse",
      title: " New city will be build with metaverse",
      date: "18.06.23",
      view: "130",
      img: Post4,
    },
    {
      name: "Art",
      title: " The beginner’s guide to creating & selling digital art NFTs",
      date: "15.06.23",
      view: "162",
      img: Post5,
    },
    {
      name: "IGO",
      title: " The next world is going with game",
      date: "14.06.23",
      view: " 155",
      img: Post6,
    },
  ];
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* <!-- head --> */}
      <div class="section section--head">
        <div class="container">
          <div class="row">
            {/* <!-- title --> */}
            <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <Heading
                title="News"
                heading="Here, you'll find a curated collection of articles, analysis, and expert opinions that keep you ahead of the curve."
              />
            </div>
            {/* <!-- end title --> */}
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}

      {/* <!-- news --> */}
      <section class="section">
        <div class="container">
          <div class="row">
            {/* <!-- post --> */}
            {NewsData.map((link, index) => (
              <div class="col-12 col-md-12 col-lg-6">
                <div class="post">
                  <a href="article.html" class="post__img">
                    <img src={link.img} alt="Loading" />
                  </a>

                  <div class="post__content">
                    <a href="#" class="post__category">
                      {link.name}
                    </a>
                    <h3 class="post__title">
                      <a href="article.html">{link.title}</a>
                    </h3>
                    <div class="post__meta">
                      <span class="post__date">
                        <i class="ti ti-calendar-up"></i> {link.date}
                      </span>
                      <span class="post__views">
                        <i class="ti ti-eye"></i> {link.view}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            ;{/* <!-- end post --> */}
          </div>

          <div class="row">
            {/* <!-- paginator --> */}
            <div class="col-12">
              <div class="paginator">
                <span class="paginator__pages">10 from 183</span>

                <ul class="paginator__list-mobile">
                  <li>
                    <a href="#">
                      <i class="ti ti-arrow-left"></i>
                      <span>Prev</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Next</span>
                      <i class="ti ti-arrow-right"></i>
                    </a>
                  </li>
                </ul>

                <ul class="paginator__list">
                  <li>
                    <a href="#">
                      <i class="ti ti-arrow-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li class="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <a href="#">18</a>
                  </li>
                  <li>
                    <a href="#">19</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti ti-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- end paginator --> */}
          </div>
        </div>
      </section>

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default News;
