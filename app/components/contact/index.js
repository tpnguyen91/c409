import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'


export default class Contact extends Component {

  renderBody() {
    return (
    <div>
      <div id="googlemaps" className="google-map"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="alert alert-success hidden" id="contactSuccess">
								<strong>Success!</strong> Your message has been sent to us.
							</div>
							<div className="alert alert-danger hidden" id="contactError">
								<strong>Error!</strong> There was an error sending your message.
							</div>
							<h2 className="mb-sm mt-sm"><strong>Contact</strong> Us</h2>
							<form id="contactForm" action="php/contact-form.php" method="POST">
								<div className="row">
									<div className="form-group">
										<div className="col-md-6">
											<label>Your name *</label>
											<input type="text" value="" data-msg-required="Please enter your name." maxlength="100" className="form-control" name="name" id="name" required />
										</div>
										<div className="col-md-6">
											<label>Your email address *</label>
											<input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" className="form-control" name="email" id="email" required />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="form-group">
										<div className="col-md-12">
											<label>Subject</label>
											<input type="text" value="" data-msg-required="Please enter the subject." maxlength="100" className="form-control" name="subject" id="subject" required />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="form-group">
										<div className="col-md-12">
											<label>Message *</label>
											<textarea maxlength="5000" data-msg-required="Please enter your message." rows="10" className="form-control" name="message" id="message" required></textarea>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<input type="submit" value="Send Message" className="btn btn-primary btn-lg mb-xlg" data-loading-text="Loading..." />
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-6">
							<h4 className="heading-primary mt-lg">Get in <strong>Touch</strong></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<hr />
							<h4 className="heading-primary">The <strong>Office</strong></h4>
							<ul className="list list-icons list-icons-style-3 mt-xlg">
								<li><i className="fa fa-map-marker"></i> <strong>Address:</strong> 1234 Street Name, City Name, United States</li>
								<li><i className="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-789</li>
								<li><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@example.com">mail@example.com</a></li>
							</ul>
							<hr />
							<h4 className="heading-primary">Business <strong>Hours</strong></h4>
							<ul className="list list-icons list-dark mt-xlg">
								<li><i className="fa fa-clock-o"></i> Monday - Friday 9am to 5pm</li>
								<li><i className="fa fa-clock-o"></i> Saturday - 9am to 2pm</li>
								<li><i className="fa fa-clock-o"></i> Sunday - Closed</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
    );
  }

  render() {
    return (
      <div className="body">
        <Header />
        {this.renderBody()}
        <Footer />
      </div>
    );
  }
}
