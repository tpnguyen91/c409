import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import superagent from 'superagent';
import moment from 'moment';


export default class BlogDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: {},
      id: props.params.id,
    };
  }

  componentWillMount() {
    superagent
      .get(`/api/v1/news/${this.state.id}`)
      .end((err, res) => {
        if (!err)
          this.setState({
            news: res.body.news,
          })
      })
  }

  renderContent() {
    const { title = '', content = '', createdAt } = this.state.news || {};

    return (
      <div className="row">
        <div className="col-md-9" style={{ marginTop: 10 }}>
          <div className="blog-posts single-post">
            <article className="post post-large blog-single-post">
              <div className="post-date">
                <span className="day">10</span>
                <span className="month">Jan</span>
              </div>
              <div className="post-content">
                <h2><a href="#">{title}</a></h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </article>
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="body">
      <Header />
      <div className="container">
        <div className="row">
          {this.renderContent()}
        </div>
        <hr />
      </div>
      <Footer />
    </div>
    );
  }
}

