import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="body">
        <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
          <div className="header-body">
            <div className="header-container container">
              <div className="header-row">
                <div className="header-column">
                  <div className="header-logo">
                    <a href="index.html">
                      <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src="/assets/img/logo.png" />
                    </a>
                  </div>
                </div>
                <div className="header-column">
                  <div className="header-row">
                    <div className="header-search hidden-xs">
                      <form id="searchForm" action="page-search-results.html" method="get">
                        <div className="input-group">
                          <input type="text" className="form-control" name="q" id="q" placeholder="Search..." required />
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <nav className="header-nav-top">
                      <ul className="nav nav-pills">
                        <li className="hidden-xs">
                          <a href="about-us.html"><i className="fa fa-angle-right"></i> About Us</a>
                        </li>
                        <li className="hidden-xs">
                          <a href="contact-us.html"><i className="fa fa-angle-right"></i> Contact Us</a>
                        </li>
                        <li>
                          <span className="ws-nowrap"><i className="fa fa-phone"></i> (123) 456-789</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-row">
                    <div className="header-nav">
                      <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                        <i className="fa fa-bars"></i>
                      </button>
                      <ul className="header-social-icons social-icons hidden-xs">
                        <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                      <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                        <nav>
                          <ul className="nav nav-pills" id="mainNav">
                            <li className="dropdown active">
                              <a className="dropdown-toggle" href="index.html">
                                Home
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="index-overview.html">
                                    Overview
                                  </a>
                                </li>
                                <li>
                                  <a href="index.html">
                                    Landing Page
                                  </a>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="index-classic.html">Classic</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-classic.html" data-thumb-preview="/assets/img/previews/preview-classic.jpg">Classic - Original <span className="tip tip-dark">hot</span></a></li>
                                    <li><a href="index-classic-color.html" data-thumb-preview="/assets/img/previews/preview-classic-color.jpg">Classic - Color</a></li>
                                    <li><a href="index-classic-light.html" data-thumb-preview="/assets/img/previews/preview-classic-light.jpg">Classic - Light</a></li>
                                    <li><a href="index-classic-video.html" data-thumb-preview="/assets/img/previews/preview-classic-video.jpg">Classic - Video</a></li>
                                    <li><a href="index-classic-video-light.html" data-thumb-preview="/assets/img/previews/preview-classic-video-light.jpg">Classic - Video - Light</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="index-corporate.html">Corporate <span className="tip">new</span></a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a href="#">Corporate - Versions <span className="tip tip-dark">hot</span></a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-corporate.html" data-thumb-preview="/assets/img/previews/preview-corporate.jpg">Corporate - Version 1</a></li>
                                        <li><a href="index-corporate-2.html" data-thumb-preview="/assets/img/previews/preview-corporate-version2.jpg">Corporate - Version 2</a></li>
                                        <li><a href="index-corporate-3.html" data-thumb-preview="/assets/img/previews/preview-corporate-version3.jpg">Corporate - Version 3</a></li>
                                        <li><a href="index-corporate-4.html" data-thumb-preview="/assets/img/previews/preview-corporate-version4.jpg">Corporate - Version 4</a></li>
                                        <li><a href="index-corporate-5.html" data-thumb-preview="/assets/img/previews/preview-corporate-version5.jpg">Corporate - Version 5</a></li>
                                        <li><a href="index-corporate-6.html" data-thumb-preview="/assets/img/previews/preview-corporate-version6.jpg">Corporate - Version 6</a></li>
                                        <li><a href="index-corporate-7.html" data-thumb-preview="/assets/img/previews/preview-corporate-version7.jpg">Corporate - Version 7</a></li>
                                        <li><a href="index-corporate-8.html" data-thumb-preview="/assets/img/previews/preview-corporate-version8.jpg">Corporate - Version 8</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-corporate-hosting.html" data-thumb-preview="/assets/img/previews/preview-corporate-hosting.jpg">Corporate - Hosting</a></li>
                                    <li><a href="index-corporate-digital-agency.html" data-thumb-preview="/assets/img/previews/preview-corporate-digital-agency.jpg">Corporate - Digital Agency <span className="tip">new</span></a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">One Page</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-one-page.html" data-thumb-preview="/assets/img/previews/preview-one-page.jpg">One Page Original</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown dropdown-mega">
                              <a className="dropdown-toggle" href="#">
                                Shortcodes
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <div className="dropdown-mega-content">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <span className="dropdown-mega-sub-title">Shortcodes 1</span>
                                        <ul className="dropdown-mega-sub-nav">
                                          <li><a href="shortcodes-accordions.html">Accordions</a></li>
                                          <li><a href="shortcodes-toggles.html">Toggles</a></li>
                                          <li><a href="shortcodes-tabs.html">Tabs</a></li>
                                          <li><a href="shortcodes-icons.html">Icons</a></li>
                                          <li><a href="shortcodes-icon-boxes.html">Icon Boxes</a></li>
                                          <li><a href="shortcodes-carousels.html">Carousels</a></li>
                                          <li><a href="shortcodes-modals.html">Modals</a></li>
                                          <li><a href="shortcodes-lightboxes.html">Lightboxes</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-md-3">
                                        <span className="dropdown-mega-sub-title">Shortcodes 2</span>
                                        <ul className="dropdown-mega-sub-nav">
                                          <li><a href="shortcodes-buttons.html">Buttons</a></li>
                                          <li><a href="shortcodes-labels.html">Labels</a></li>
                                          <li><a href="shortcodes-lists.html">Lists</a></li>
                                          <li><a href="shortcodes-image-gallery.html">Image Gallery</a></li>
                                          <li><a href="shortcodes-image-frames.html">Image Frames</a></li>
                                          <li><a href="shortcodes-testimonials.html">Testimonials</a></li>
                                          <li><a href="shortcodes-blockquotes.html">Blockquotes</a></li>
                                          <li><a href="shortcodes-word-rotator.html">Word Rotator</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-md-3">
                                        <span className="dropdown-mega-sub-title">Shortcodes 3</span>
                                        <ul className="dropdown-mega-sub-nav">
                                          <li><a href="shortcodes-call-to-action.html">Call to Action</a></li>
                                          <li><a href="shortcodes-pricing-tables.html">Pricing Tables</a></li>
                                          <li><a href="shortcodes-tables.html">Tables</a></li>
                                          <li><a href="shortcodes-progressbars.html">Progress Bars</a></li>
                                          <li><a href="shortcodes-counters.html">Counters</a></li>
                                          <li><a href="shortcodes-sections-parallax.html">Sections &amp; Parallax</a></li>
                                          <li><a href="shortcodes-tooltips-popovers.html">Tooltips &amp; Popovers</a></li>
                                          <li><a href="shortcodes-sticky-elements.html">Sticky Elements</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-md-3">
                                        <span className="dropdown-mega-sub-title">Shortcodes 4</span>
                                        <ul className="dropdown-mega-sub-nav">
                                          <li><a href="shortcodes-headings.html">Headings</a></li>
                                          <li><a href="shortcodes-dividers.html">Dividers</a></li>
                                          <li><a href="shortcodes-animations.html">Animations</a></li>
                                          <li><a href="shortcodes-medias.html">Medias</a></li>
                                          <li><a href="shortcodes-maps.html">Maps</a></li>
                                          <li><a href="shortcodes-arrows.html">Arrows</a></li>
                                          <li><a href="shortcodes-alerts.html">Alerts</a></li>
                                          <li><a href="shortcodes-posts.html">Posts</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" href="#">
                                Features
                              </a>

                              <ul className="dropdown-menu">
                                <li className="dropdown-submenu">
                                  <a href="#">Headers</a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a href="#">Default</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-classic.html">Default</a></li>
                                        <li><a href="index-header-language-dropdown.html">Default + Language Dropdown</a></li>
                                        <li><a href="index-header-big-logo.html">Default + Big Logo</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a href="#">Flat</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-header-flat.html">Flat</a></li>
                                        <li><a href="index-header-flat-top-bar.html">Flat + Top Bar</a></li>
                                        <li><a href="index-header-flat-colored-top-bar.html">Flat + Colored Top Bar</a></li>
                                        <li><a href="index-header-flat-top-bar-search.html">Flat + Top Bar with Search</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-header-center.html">Center</a></li>
                                    <li><a href="index-header-below-slider.html">Below Slider</a></li>
                                    <li><a href="index-header-full-video.html">Full Video</a></li>
                                    <li><a href="index-header-narrow.html">Narrow</a></li>
                                    <li><a href="index-header-always-sticky.html">Always Sticky</a></li>
                                    <li className="dropdown-submenu">
                                      <a href="#">Transparent</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-header-transparent.html">Transparent</a></li>
                                        <li><a href="index-header-transparent-bottom-border.html">Transparent - Bottom Border</a></li>
                                        <li><a href="index-header-semi-transparent.html">Semi Transparent</a></li>
                                        <li><a href="index-header-semi-transparent-light.html">Semi Transparent - Light</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-header-full-width.html">Full-Width</a></li>
                                    <li className="dropdown-submenu">
                                      <a href="#">Navbar</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-header-navbar.html">Navbar</a></li>
                                        <li><a href="index-header-navbar-extra-info.html">Navbar + Extra Info</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-header-signin.html">Sign In / Sign Up</a></li>
                                    <li><a href="index-header-logged.html">Logged</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Navigations</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-classic.html">Default</a></li>
                                    <li><a href="index-navigation-stripe.html">Stripe</a></li>
                                    <li><a href="index-navigation-top-line.html">Top Line</a></li>
                                    <li><a href="index-navigation-dark-dropdown.html">Dark Dropdown</a></li>
                                    <li><a href="index-navigation-colors.html">Colors</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Footers</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-classic.html#footer">Default</a></li>
                                    <li><a href="index-footer-advanced.html#footer">Advanced</a></li>
                                    <li><a href="index-footer-simple.html#footer">Simple</a></li>
                                    <li><a href="index-footer-light.html#footer">Light</a></li>
                                    <li><a href="index-footer-light-narrow.html#footer">Light Narrow</a></li>
                                    <li className="dropdown-submenu">
                                      <a href="#">Colors</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-footer-color-primary.html#footer">Primary Color</a></li>
                                        <li><a href="index-footer-color-secondary.html#footer">Secondary Color</a></li>
                                        <li><a href="index-footer-color-tertiary.html#footer">Tertiary Color</a></li>
                                        <li><a href="index-footer-color-quaternary.html#footer">Quaternary Color</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-footer-latest-work.html#footer">Latest Work</a></li>
                                    <li><a href="index-footer-contact-form.html#footer">Contact Form</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Page Headers</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-page-header-default.html">Default</a></li>
                                    <li className="dropdown-submenu">
                                      <a href="#">Colors</a>
                                      <ul className="dropdown-menu">
                                        <li><a href="index-page-header-color-primary.html">Primary Color</a></li>
                                        <li><a href="index-page-header-color-secondary.html">Secondary Color</a></li>
                                        <li><a href="index-page-header-color-tertiary.html">Tertiary Color</a></li>
                                        <li><a href="index-page-header-color-quaternary.html">Quaternary Color</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="index-page-header-light.html">Light</a></li>
                                    <li><a href="index-page-header-light-reverse.html">Light - Reverse</a></li>
                                    <li><a href="index-page-header-custom-background.html">Custom Background</a></li>
                                    <li><a href="index-page-header-parallax.html">Parallax</a></li>
                                    <li><a href="index-page-header-center.html">Center</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Admin Extension <span className="tip tip-dark">hot</span> <em className="not-included">(Not Included)</em></a>
                                  <ul className="dropdown-menu">
                                    <li><a href="feature-admin-forms-basic.html">Forms Basic</a></li>
                                    <li><a href="feature-admin-forms-advanced.html">Forms Advanced</a></li>
                                    <li><a href="feature-admin-forms-wizard.html">Forms Wizard</a></li>
                                    <li><a href="feature-admin-forms-code-editor.html">Code Editor</a></li>
                                    <li><a href="feature-admin-tables-advanced.html">Tables Advanced</a></li>
                                    <li><a href="feature-admin-tables-responsive.html">Tables Responsive</a></li>
                                    <li><a href="feature-admin-tables-editable.html">Tables Editable</a></li>
                                    <li><a href="feature-admin-tables-ajax.html">Tables Ajax</a></li>
                                    <li><a href="feature-admin-charts.html">Charts</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Sliders</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="index-classic.html">Revolution Slider</a></li>
                                    <li><a href="index-slider-2.html">Nivo Slider</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Layout Options</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="feature-layout-boxed.html">Boxed</a></li>
                                    <li><a href="feature-layout-dark.html">Dark</a></li>
                                    <li><a href="feature-layout-rtl.html">RTL</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Extra</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="feature-typography.html">Typography</a></li>
                                    <li><a href="feature-grid-system.html">Grid System</a></li>
                                    <li><a href="feature-page-loading.html">Page Loading</a></li>
                                    <li><a href="feature-lazy-load.html">Lazy Load</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" href="#">
                                Pages
                              </a>
                              <ul className="dropdown-menu">
                                <li className="dropdown-submenu">
                                  <a href="#">Shop</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="shop-full-width.html">Shop - Full Width</a></li>
                                    <li><a href="shop-sidebar.html">Shop - Sidebar</a></li>
                                    <li><a href="shop-product-full-width.html">Shop - Product Full Width</a></li>
                                    <li><a href="shop-product-sidebar.html">Shop - Product Sidebar</a></li>
                                    <li><a href="shop-cart.html">Shop - Cart</a></li>
                                    <li><a href="shop-login.html">Shop - Login</a></li>
                                    <li><a href="shop-checkout.html">Shop - Checkout</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Blog</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                    <li><a href="blog-large-image.html">Blog Large Image</a></li>
                                    <li><a href="blog-medium-image.html">Blog Medium Image</a></li>
                                    <li><a href="blog-timeline.html">Blog Timeline</a></li>
                                    <li><a href="blog-post.html">Single Post</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Layouts</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="page-full-width.html">Full Width</a></li>
                                    <li><a href="page-left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="page-right-sidebar.html">Right Sidebar</a></li>
                                    <li><a href="page-left-and-right-sidebars.html">Left and Right Sidebars</a></li>
                                    <li><a href="page-sticky-sidebar.html">Sticky Sidebar</a></li>
                                    <li><a href="page-secondary-navbar.html">Secondary Navbar</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a href="#">Extra</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="page-404.html">404 Error</a></li>
                                    <li><a href="page-coming-soon.html">Coming Soon</a></li>
                                    <li><a href="page-maintenance-mode.html">Maintenance Mode</a></li>
                                    <li><a href="sitemap.html">Sitemap</a></li>
                                  </ul>
                                </li>
                                <li><a href="page-custom-header.html">Custom Header</a></li>
                                <li><a href="page-team.html">Team</a></li>
                                <li><a href="page-services.html">Services</a></li>
                                <li><a href="page-careers.html">Careers</a></li>
                                <li><a href="page-our-office.html">Our Office</a></li>
                                <li><a href="page-faq.html">FAQ</a></li>
                                <li><a href="page-login.html">Login / Register</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" href="#">
                                Portfolio
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="portfolio-4-columns.html">4 Columns</a></li>
                                <li><a href="portfolio-3-columns.html">3 Columns</a></li>
                                <li><a href="portfolio-2-columns.html">2 Columns</a></li>
                                <li><a href="portfolio-lightbox.html">Portfolio Lightbox</a></li>
                                <li><a href="portfolio-timeline.html">Portfolio Timeline</a></li>
                                <li><a href="portfolio-full-width.html">Portfolio Full Width</a></li>
                                <li><a href="portfolio-single-project.html">Single Project</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" href="#">
                                About Us
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="about-us-basic.html">About Us - Basic</a></li>
                                <li><a href="about-me.html">About Me</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" href="#">
                                Contact Us
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="contact-us.html">Contact Us - Basic</a></li>
                                <li><a href="contact-us-advanced.php">Contact Us - Advanced</a></li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div role="main" className="main">
          <div className="slider-container rev_slider_wrapper" style={{ height: 700 }}>
            <div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"gridwidth": 800, "gridheight": 700}'>
              <ul>
                <li data-transition="fade">
                  <img src="/assets/img/slides/landing-page-slide-1.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    className="rev-slidebg" />

                  <div className="tp-caption"
                    data-x="center" data-hoffset="-150"
                    data-y="center" data-voffset="-95"
                    data-start="1000"
                    style={{ zIndex: 5 }}
                    data-transform_in="x:[-300%];opacity:0;s:500;"><img src="/assets/img/slides/slide-title-border.png" alt="" />
                  </div>

                  <div className="tp-caption top-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-95"
                    data-start="500"
                    style={{ zIndex: 5 }}
                    data-transform_in="y:[-300%];opacity:0;s:500;">DO YOU NEED A NEW</div>

                  <div className="tp-caption"
                    data-x="center" data-hoffset="150"
                    data-y="center" data-voffset="-95"
                    data-start="1000"
                    style={{ zIndex: 5 }}
                    data-transform_in="x:[300%];opacity:0;s:500;"><img src="/assets/img/slides/slide-title-border.png" alt="" /></div>

                  <div className="tp-caption main-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-45"
                    data-start="1500"
                    data-whitespace="nowrap"
                    data-transform_in="y:[100%];s:500;"
                    data-transform_out="opacity:0;s:500;"
                    style={{ zIndex: 5 }}
                    data-mask_in="x:0px;y:0px;">WEB DESIGN?</div>

                  <div className="tp-caption bottom-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="5"
                    data-start="2000"
                    style={{ zIndex: 5 }}
                    data-transform_in="y:[100%];opacity:0;s:500;">Check out our options and features.</div>

                  <a className="tp-caption btn btn-lg btn-primary btn-slider-action"
                    data-hash
                    data-hash-offset="85"
                    href="#home-intro"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="80"
                    data-start="2200"
                    data-whitespace="nowrap"
                    data-transform_in="y:[100%];s:500;"
                    data-transform_out="opacity:0;s:500;"
                    style={{ zIndex: 5 }}
                    data-mask_in="x:0px;y:0px;">Get Started Now!</a>

                </li>

                <li data-transition="fade">
                  <img src="/assets/video/landing.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    className="rev-slidebg" />

                  <div className="rs-background-video-layer"
                    data-forcerewind="on"
                    data-volume="mute"
                    data-videowidth="100%"
                    data-videoheight="100%"
                    data-videomp4="video/landing.mp4"
                    data-videopreload="preload"
                    data-videoloop="none"
                    data-forceCover="1"
                    data-aspectratio="16:9"
                    data-autoplay="true"
                    data-autoplayonlyfirsttime="false"
                    data-nextslideatend="true"
                  ></div>

                  <div className="tp-caption"
                    data-x="center" data-hoffset="-160"
                    data-y="center" data-voffset="-95"
                    data-start="1000"
                    style={{ zIndex: 5 }}
                    data-transform_in="x:[-300%];opacity:0;s:500;"><img src="/assets/img/slides/slide-title-border.png" alt="" /></div>

                  <div className="tp-caption top-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-95"
                    data-start="500"
                    style={{ zIndex: 5 }}
                    data-transform_in="y:[-300%];opacity:0;s:500;">START CREATING YOUR</div>

                  <div className="tp-caption"
                    data-x="center" data-hoffset="160"
                    data-y="center" data-voffset="-95"
                    data-start="1000"
                    style={{ zIndex: 5 }}
                    data-transform_in="x:[300%];opacity:0;s:500;"><img src="/assets/img/slides/slide-title-border.png" alt="" />
                  </div>

                  <div className="tp-caption main-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="-45"
                    data-start="1500"
                    data-whitespace="nowrap"
                    data-transform_in="y:[100%];s:500;"
                    data-transform_out="opacity:0;s:500;"
                    style={{ zIndex: 5 }}
                    data-mask_in="x:0px;y:0px;">NEW WEBSITE</div>

                  <div className="tp-caption bottom-label"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="5"
                    data-start="2000"
                    style={{ zIndex: 5 }}
                    data-transform_in="y:[100%];opacity:0;s:500;">Join The 19,000+ Happy Customers :)</div>

                  <a className="tp-caption btn btn-lg btn-primary btn-slider-action"
                    data-hash
                    data-hash-offset="85"
                    href="#home-intro"
                    data-x="center" data-hoffset="0"
                    data-y="center" data-voffset="80"
                    data-start="2200"
                    data-whitespace="nowrap"
                    data-transform_in="y:[100%];s:500;"
                    data-transform_out="opacity:0;s:500;"
                    style={{ zIndex: 5 }}
                    data-mask_in="x:0px;y:0px;">Get Started Now!</a>
                  <div className="tp-dottedoverlay tp-opacity-overlay"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-intro" id="home-intro">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <p>
                    The fastest way to create your new and awesome <em>Website</em>
                    <span>Check out our options and features included.</span>
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="mt-lg mb-xl">
                    <a href="#demos" data-hash className="btn btn-primary mr-md appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="300">SEE DEMO VERSIONS</a> \
                    <span className="appear-animation" data-appear-animation="fadeInDown" data-appear-animation-delay="600">
                      or <a href="http://themeforest.net/item/porto-responsive-html5-template/4106987">PURCHASE NOW - $16</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">

            <div className="row">
              <div className="col-md-12 center">
                <h2 className="word-rotator-title mb-sm">Porto is the <strong>most <span className="word-rotate" data-plugin-options='{"delay": 2000, "animDelay": 300}'>
                  <span className="word-rotate-items">
                    <span>popular</span>
                    <span>awesome</span>
                    <span>incredible</span>
                  </span>
                </span></strong> HTML Site template on ThemeForest.</h2>
                <p className="lead">Trusted by over 19,000 satisfied users, Porto is a huge success<br />in the of one of the world’s largest MarketPlace.</p>
              </div>
            </div>
            <div className="row mt-xl">
              <div className="counters counters-text-dark">
                <div className="col-md-3 col-sm-6">
                  <div className="counter appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="300">
                    <i className="fa fa-user"></i>
                    <strong data-to="19000" data-append="+">0</strong>
                    <label>Happy Clients</label>
                    <p className="text-color-primary mb-xl">They can’t be wrong</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="600">
                    <i className="fa fa-desktop"></i>
                    <strong data-to="12">0</strong>
                    <label>Premade HomePages</label>
                    <p className="text-color-primary mb-xl">Many more to come</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="900">
                    <i className="fa fa-ticket"></i>
                    <strong data-to="2500" data-append="+">0</strong>
                    <label>Answered Tickets</label>
                    <p className="text-color-primary mb-xl">Satisfaction guaranteed</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="1200">
                    <i className="fa fa-clock-o"></i>
                    <strong data-to="3000" data-append="+">0</strong>
                    <label>Development Hours</label>
                    <p className="text-color-primary mb-xl">Available to you for only $16</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section section-default section-with-mockup mb-none">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-box feature-box-style-2 reverse mb-xl appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="300">
                    <div className="feature-box-icon">
                      <i className="fa fa-bolt"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="mb-sm">Optimized Template</h4>
                      <p className="mb-lg">Porto is optimized to load very fast in any device and also for Search Engine Optimization (SEO).</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2 reverse mt-xl appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="600">
                    <div className="feature-box-icon">
                      <i className="fa fa-heart"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="mb-sm">Awesome Support</h4>
                      <p className="mb-lg">You won’t be alone, purchasing our theme, satisfaction is guaranteed, we really care about you and your website.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/assets/img/mockup-porto.png" className="img-responsive mockup-landing-page mb-xl appear-animation" alt="Porto" data-appear-animation="fadeInDown" data-appear-animation-delay="300" />
                </div>
                <div className="col-md-4">
                  <div className="feature-box feature-box-style-2 mb-xl appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="300">
                    <div className="feature-box-icon">
                      <i className="fa fa-puzzle-piece"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="mb-sm">Reusable Elements</h4>
                      <p className="mb-lg">Porto comes with tons of elements that allows you to create different types of pages on your website.</p>
                    </div>
                  </div>
                  <div className="feature-box feature-box-style-2 mt-xl appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="600">
                    <div className="feature-box-icon">
                      <i className="fa fa-cloud-download"></i>
                    </div>
                    <div className="feature-box-info">
                      <h4 className="mb-sm">Free Updates</h4>
                      <p className="mb-lg">Purchase Porto now and get all the updates and bug fixes for free. Guaranteed!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="call-to-action call-to-action-primary mb-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="call-to-action-content align-left pb-md mb-xl ml-none">
                    <h2 className="text-color-light mb-none mt-xl">Porto is ready for <strong>any design style...</strong></h2>
                    <p className="lead mb-xl">Here are some premade options you can choose:</p>
                  </div>
                  <div className="call-to-action-btn">
                    <a href="http://themeforest.net/item/porto-responsive-html5-template/4106987" target="_blank" className="btn btn-lg btn-primary btn-primary-scale-2 mr-md">Purchase Now!</a>
                    <span className="mr-md text-color-light hidden-xs">Only <strong>$16</strong><span className="arrow arrow-light hlb" style={{ top: -88, right: -47 }}></span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-primary section-primary-scale-2 section-center section-no-border mt-none p-sm" id="demos">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-pills sort-source sort-source-style-2" data-sort-id="portfolio" data-option-key="filter">
                    <li data-option-value="*" className="active"><a href="#">SHOW ALL</a></li>
                    <li data-option-value=".classic"><a href="#">CLASSIC</a></li>
                    <li data-option-value=".corporate"><a href="#">CORPORATE</a></li>
                    <li data-option-value=".one-page"><a href="#">ONE PAGE</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <ul className="portfolio-list sort-destination full-width-spaced mb-xl" data-sort-id="portfolio" id="homeOverview">
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item classic">
              <div className="portfolio-item center">
                <a href="index-classic.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-classic.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Classic Original</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item classic">
              <div className="portfolio-item center">
                <a href="index-classic-color.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-classic-color.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Classic Color</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item classic">
              <div className="portfolio-item center">
                <a href="index-classic-light.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-classic-light.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Classic Light</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item classic">
              <div className="portfolio-item center">
                <a href="index-classic-video.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-classic-video.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Classic Video</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item classic">
              <div className="portfolio-item center">
                <a href="index-classic-video-light.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-classic-video-light.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Classic Video Light</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 1</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-2.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version2.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 2</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-3.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version3.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 3</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />NavBar Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-4.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version4.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 4</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Default Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-5.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version5.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 5</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Dark Top Bar</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-6.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version6.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 6</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Light Top Bar</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-7.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version7.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 7</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Transparent Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-8.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-version8.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Version 8</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Dark Top Bar</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-hosting.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-hosting.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Hosting</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Secondary Navbar</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item corporate">
              <div className="portfolio-item center">
                <a href="index-corporate-digital-agency.html" className="text-decoration-none block-link pt-md">
                  <div className="thumb-info-ribbon">
                    <span>New</span>
                  </div>
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-corporate-digital-agency.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home Corporate Digital Agency</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Semi Transparent Header</p>
                </a>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12 isotope-item one-page">
              <div className="portfolio-item center">
                <a href="index-one-page.html" className="text-decoration-none block-link pt-md">
                  <span className="thumb-info thumb-info-preview thumb-info-preview-long mb-md">
                    <span className="thumb-info-wrapper">
                      <span className="thumb-info-image" data-original="img/previews/preview-one-page.jpg" data-plugin-lazyload></span>
                    </span>
                  </span>
                  <h5 className="mb-xs">Home One Page Original</h5>
                  <p className="font-size-xs line-height-xs">Full Width Slider<br />Flat Header</p>
                </a>
              </div>
            </li>
          </ul>
          <section className="parallax section section-text-light section-parallax section-center mt-xl mb-xl pb-none" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(img/parallax-landing.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <img src="/assets/img/landing-page-style-switcher.png" className="img-responsive" />
                </div>
              </div>
            </div>
          </section>
          <div className="container">

            <div className="row">
              <div className="col-md-12 center mb-xl">
                <h2 className="mb-sm mt-md">Unlimited <strong>Layout</strong> Options</h2>
                <p className="lead mb-xl">You can build almost any kind of website using Porto as base.<br />The theme has several layouts options that you can easily modify.</p>
                <h4 className="heading-primary alternative-font mt-xl pt-xl">Tons of <strong className="custom-underline">Reusable Elements!</strong></h4>
              </div>
            </div>

          </div>
          <section className="section section-default mt-xl mb-none pb-none">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="feature-box feature-box-style-6">
                        <div className="feature-box-icon">
                          <i className="fa fa-check text-color-primary"></i>
                        </div>
                        <div className="feature-box-info">
                          <h5 className="pt-xs"><strong className="semi-bold"><small>Unlimited</small><br />Headers</strong></h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="feature-box feature-box-style-6">
                        <div className="feature-box-icon">
                          <i className="fa fa-check text-color-primary"></i>
                        </div>
                        <div className="feature-box-info">
                          <h5 className="pt-xs"><strong className="semi-bold"><small>Unlimited</small><br />Footers</strong></h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="feature-box feature-box-style-6">
                        <div className="feature-box-icon">
                          <i className="fa fa-check text-color-primary"></i>
                        </div>
                        <div className="feature-box-info">
                          <h5 className="pt-sm"><strong className="semi-bold">Dark &amp; Light</strong></h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="feature-box feature-box-style-6">
                        <div className="feature-box-icon">
                          <i className="fa fa-check text-color-primary"></i>
                        </div>
                        <div className="feature-box-info">
                          <h5 className="pt-sm"><strong className="semi-bold">Boxed &amp; Wide</strong></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="carousel-areas mt-xl">
                        <div className="owl-carousel owl-theme m-none" data-plugin-options='{"autoHeight": true, "items": 1, "margin": 10, "nav": true, "dots": false, "stagePadding": 0}'>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/header-1.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/header-2.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/header-3.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/header-4.png" />
                          </div>
                        </div>
                        <div className="owl-carousel owl-theme m-none" data-plugin-options='{"autoHeight": true, "items": 1, "margin": 10, "nav": true, "dots": false, "stagePadding": 0}'>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/content-1.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/content-2.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/content-3.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/content-4.png" />
                          </div>
                        </div>
                        <div className="owl-carousel owl-theme m-none" data-plugin-options='{"autoHeight": true, "items": 1, "margin": 10, "nav": true, "dots": false, "stagePadding": 0}'>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/footer-1.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/footer-2.png" />
                          </div>
                          <div>
                            <img alt="" className="img-responsive" src="/assets/img/previews/areas/footer-3.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="call-to-action call-to-action-primary call-to-action-front mb-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="call-to-action-content align-left pb-md mb-xl ml-none">
                    <h2 className="text-color-light mb-none mt-xl">Start creating your website now using <strong>Porto.</strong></h2>
                    <p className="lead mb-xl">Not convinced? There’s all this too:</p>
                  </div>
                  <div className="call-to-action-btn">
                    <a href="http://themeforest.net/item/porto-responsive-html5-template/4106987" target="_blank" className="btn btn-lg btn-primary btn-primary-scale-2 mr-md">Purchase Now!</a>
                    <span className="mr-md text-color-light hidden-xs">Only <strong>$16</strong><span className="arrow arrow-light hlb" style={{ top: -88, right: -47 }}></span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-default mt-none mb-xl">
            <div className="home-concept">
              <div className="container">

                <div className="row center">
                  <span className="sun"></span>
                  <span className="cloud"></span>
                  <div className="col-md-2 col-md-offset-1">
                    <div className="process-image" data-appear-animation="bounceIn">
                      <img src="/assets/img/landing-concept-item-1.png" alt="" />
                      <strong className="text-color-dark mb-xs">Icons</strong>
                      <p className="text-color-primary mb-xl">500+ Icons</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="process-image" data-appear-animation="bounceIn" data-appear-animation-delay="200">
                      <img src="/assets/img/landing-concept-item-2.png" alt="" />
                      <strong className="text-color-dark mb-xs">Buttons</strong>
                      <p className="text-color-primary mb-xl">Several Styles</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="process-image" data-appear-animation="bounceIn" data-appear-animation-delay="400">
                      <img src="/assets/img/landing-concept-item-3.png" alt="" />
                      <strong className="text-color-dark mb-xs">Images</strong>
                      <p className="text-color-primary mb-xl">Animated Boxes</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-md-offset-1">
                    <div className="project-image">
                      <div id="fcSlideshow" className="fc-slideshow">
                        <ul className="fc-slides">
                          <li><img className="img-responsive" src="/assets/img/landing-concept-item-4.png" alt="" /></li>
                          <li><img className="img-responsive" src="/assets/img/landing-concept-item-5.png" alt="" /></li>
                          <li><img className="img-responsive" src="/assets/img/landing-concept-item-6.png" alt="" /></li>
                        </ul>
                      </div>
                      <strong className="text-color-dark pt-xl">and so much more...</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <div className="container">

            <div className="row">
              <div className="col-md-12 center">
                <h2 className="mt-xl mb-none">Optimized for <strong>Mobile Devices</strong> <span className="alternative-font font-size-md">...too!</span></h2>
                <p className="lead mb-xl">Porto is fully responsive design, ready to look stunning on any device.</p>
                <hr className="invisible" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="feature-box feature-box-style-6 reverse mb-none mt-xl appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="300">
                  <div className="feature-box-icon">
                    <i className="fa fa-mobile text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="mb-sm">100% Responsive</h4>
                    <p className="mb-lg">Porto is fully responsive and will adapt itself to any mobile or tablet device.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img alt="Responsive" data-appear-animation="fadeInUp" className="hidden-xs img-responsive appear-animation fadeInUp" src="/assets/img/responsive-ready.png" style={{ marginTottom: -1 }} />
              </div>
              <div className="col-md-4">
                <div className="feature-box feature-box-style-6 mb-none mt-xl appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="300">
                  <div className="feature-box-icon">
                    <i className="fa fa-eye text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="mb-sm">Retina Ready</h4>
                    <p className="mb-lg">Porto is Retina Ready and your website will always looks perfect on any devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="call-to-action call-to-action-primary mb-xl">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="call-to-action-content align-left pb-md mb-xl ml-none">
                    <h2 className="text-color-light mb-none mt-xl">Everything you need for your next <strong>website.</strong></h2>
                    <p className="lead mb-xl">Not convinced yet? Here are more reasons to choose Porto:</p>
                  </div>
                  <div className="call-to-action-btn">
                    <a href="http://themeforest.net/item/porto-responsive-html5-template/4106987" target="_blank" className="btn btn-lg btn-primary btn-primary-scale-2 mr-md">Purchase Now!</a>
                    <span className="mr-md text-color-light hidden-xs">Only <strong>$16</strong><span className="arrow arrow-light hlb" style={{ top: -88, right: -47 }}></span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row mt-xl mb-xl">
              <div className="col-md-3">
                <img className="img-responsive mt-xl appear-animation" src="/assets/img/top-quality-documentation.png" alt="" data-appear-animation="fadeInLeft" />
              </div>
              <div className="col-md-9">
                <h2 className="mt-xl">Top Quality <strong>Documentation</strong></h2>
                <p>
                  Porto comes with a very extensive and as thorough as possible documentation where each section of the theme and its features are described in a easy way to understand, it also comes with a lot of screenshots to help you. If the documentation is not enough contact us on our support forum.
                </p>
              </div>
            </div>
          </div>
          <section className="section section-default">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <h2>Template <strong>Updates</strong></h2>
                  <p>
                    Porto template is constantly being updated with new features and updates of the plugins that are included in the package.<br />
                    If you have any suggestion for the next updates, just let us know.
                  </p>
                </div>
                <div className="col-md-3">
                  <img className="hidden-xs img-responsive appear-animation" style={{ marginTop: -100 }} src="/assets/img/updates.png" alt="" data-appear-animation="fadeInRight" />
                </div>
              </div>
            </div>
          </section>
          <div className="container">

            <div className="row">
              <div className="col-md-12 center">
                <h2 className="mt-xl mb-none">Key <strong>Features</strong></h2>
                <p className="lead mb-xl">There are so many reasons to choose Porto, here are a few items:</p>
                <hr className="invisible" />
              </div>
            </div>

            <div className="row mb-xl">
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">HTML5+JS+CSS+SCSS</strong></h4>
                  </div>
                </div>
              </div>
            
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Wide & Boxed Layouts</strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Dark & Light Versions</strong></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-xl">
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Blog Pages <span className="font-size-xs"><small>(Not Functional)</small></span></strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Shop Pages <span className="font-size-xs"><small>(Not Functional)</small></span></strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">RTL Support</strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">SEO Optimized</strong></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-xl">
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Google Fonts Support</strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Amazing Plugins</strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Premium resources</strong></h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-box feature-box-style-6">
                  <div className="feature-box-icon">
                    <i className="fa fa-check text-color-primary"></i>
                  </div>
                  <div className="feature-box-info">
                    <h4 className="pt-xs"><strong className="semi-bold">Skin Generator</strong></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 center">
                <hr />
                <h2><span className="alternative-font font-size-md mt-xl">and so much more...</span></h2>
              </div>
            </div>
          </div>
          <section className="parallax section section-text-light section-parallax section-center mt-xl mb-none" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(/assets/img/parallax-image.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2><i className="fa fa-star font-size-xs mr-xs"></i><i className="fa fa-star font-size-xs mr-xs"></i><i className="fa fa-star font-size-xs mr-xs"></i><i className="fa fa-star font-size-xs mr-xs"></i><i className="fa fa-star font-size-xs"></i><br /><strong>What Client’s Say</strong></h2>
                  <div className="owl-carousel owl-theme nav-bottom rounded-nav mb-none" data-plugin-options='{"items": 1, "loop": false}'>
                    <div>
                      <div className="col-md-12">
                        <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
                          <blockquote>
                            <p>Outstanding about everything : - Support is fast and perfect : I got answers to every questions I asked. - Code quality is up to date, modern, structured, clear, easy to understand. - Responsive IS responsive (any screen size, smartphone & tablet. - Design is pure and esthetic. - Okler provide update. Thank you Okler team for all of this ! Keep going !</p>
                          </blockquote>
                          <div className="testimonial-author">
                            <p><strong>Gothvel</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-md-12">
                        <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
                          <blockquote>
                            <p>This theme is totally customizable, clean with all the options you could want. Don't want full screen layout? With one word added to the code the entire site becomes boxed version... The customer support is absolutely unsurpassed. Can not recommend this enough.</p>
                          </blockquote>
                          <div className="testimonial-author">
                            <p><strong>katefischer510</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-md-12">
                        <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
                          <blockquote>
                            <p>The code is extremely well organized, the help information and support is terrific and the options provided by the template are about the most thorough I've found - what more could you ask for?</p>
                          </blockquote>
                          <div className="testimonial-author">
                            <p><strong>sibelius</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="call-to-action call-to-action-default call-to-action-in-footer mt-none no-top-arrow">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="call-to-action-content align-left pb-md mb-xl ml-none">
                    <h2 className="mb-xs mt-xl">Start creating your new website today with <strong>Porto!</strong></h2>
                    <p className="lead mb-xl">Now that you already know that Porto is the best choice for your next project, do not hesitate, purchase now for only $16 and join many happy customers. Get started now.</p>
                  </div>
                  <div className="call-to-action-btn">
                    <a href="http://themeforest.net/item/porto-responsive-html5-template/4106987" target="_blank" className="btn btn-lg btn-primary"><i className="fa fa-cark mr-xs"></i> BUY PORTO NOW - $16</a>
                    <p><span className="alternative-font font-size-sm mt-xs text-color-primary">Join The 19,000+ Happy Customers :)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="footer-ribbon">
                <span>Get in Touch</span>
              </div>
              <div className="col-md-3">
                <div className="newsletter">
                  <h4>Newsletter</h4>
                  <p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>

                  <div className="alert alert-success hidden" id="newsletterSuccess">
                    <strong>Success!</strong> You've been added to our email list.
                  </div>

                  <div className="alert alert-danger hidden" id="newsletterError"></div>

                  <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
                    <div className="input-group">
                      <input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Latest Tweets</h4>
                <div id="tweet" className="twitter" data-plugin-tweets data-plugin-options='{"username": "", "count": 2}'>
                  <p>Please wait...</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-details">
                  <h4>Contact Us</h4>
                  <ul className="contact">
                    <li><p><i className="fa fa-map-marker"></i> <strong>Address:</strong> 1234 Street Name, City Name, United States</p></li>
                    <li><p><i className="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-789</p></li>
                    <li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@example.com">mail@example.com</a></p></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-1">
                  <a href="index.html" className="logo">
                    <img alt="Porto Website Template" className="img-responsive" src="/assets/img/logo-footer.png" />
                  </a>
                </div>
                <div className="col-md-7">
                  <p>© Copyright 2015. All Rights Reserved.</p>
                </div>
                <div className="col-md-4">
                  <nav id="sub-menu">
                    <ul>
                      <li><a href="page-faq.html">FAQ's</a></li>
                      <li><a href="sitemap.html">Sitemap</a></li>
                      <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
