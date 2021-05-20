import React from "react"
import RecentPost from "./RecentPost"

const FooterMenusWidgets = ({}) => {
  return (
    <div className="footer-nav-widgets-wrapper header-footer-group">
      <div className="footer-inner">
        <div className="footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 footer-col">
                <aside className="widget footer-widget" role="complementary">
                  <div className="widget widget_text">
                      <div className="widget-content">
                        <h2 className="widget-title subheading heading-size-3">
                          About This Site
                        </h2>
                        <div className="textwidget">
                            <p>
                              Welcome to Cute Animal Planet! Our website features a montage of the cutest animals all across the globe!
                            </p>
                            <p>Here at Cute Animal Planet, we feature photos, videos, articles and various other pieces of multi-media on the cutest animals on the planet.</p>
                            <p>Please feel free to share our website with all of your friends and family so that they too can enjoy the fun animal pictures and videos that we post every day!</p>
                            <p> Thank you from all of us at Cute Animal Planet!</p>
                        </div>
                      </div>
                    </div>
                </aside>
              </div>
              <div className="col-lg-4 footer-col">
                <div className="widget footer-widget">
                  <h3 className="widget-title">Recent Posts</h3>
                  <RecentPost />
                </div>
              </div>
              <div className="col-lg-3 footer-col">
                <div className="widget footer-widget">
                  <h3 className="widget-title">Thank you for visiting our site!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMenusWidgets
