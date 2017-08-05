import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import superagent from 'superagent';
import moment from 'moment';


const blogImg = require('../../images/blog.jpg');
export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentWillMount() {
    superagent
      .get(`/api/v1/news/`)
      .end((err, res) => {
        const news = (res.body || {}).news || [];
        const page = Math.ceil(news.length / 10);
        this.setState({ news, page });
      })
  }

  renderBlogItem(item) {
    return (
      <article className="post post-medium">
        <div className="row">
          <div className="col-md-9">
            <div className="post-content">
              <h5 style={{ marginBottom: 0 }}><a href={`/blog/${item._id}`}><b>{item.title}</b></a></h5>
              <div className="post-meta" style={{ marginTop: 10 }}>
                <span><i className="fa fa-calendar"></i>{moment(item.createdAt).format('DD-MM-YYYY')}</span>
                <span><i className="fa fa-user"></i>
                  <a href="#">Admin</a>
                </span>
              </div>
              <hr style={{ marginTop: 0, marginBottom: 10 }} />
              <div dangerouslySetInnerHTML={{ __html: item.content.split(" ").splice(0,20).join(" ") }} />
              <a href={`/blog/${item._id}`} className="btn btn-xs btn-primary pull-left">Xem Thêm...</a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  renderContent() {
    const { title = '', content = '', createdAt } = this.state.news || {};
    return (
      <div className="row">
        <div className="col-md-9" style={{ marginTop: 10 }}>
          <div className="blog-posts">
          {
            this.state.news.map(item => (
              this.renderBlogItem(item)
            ))
          }
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

