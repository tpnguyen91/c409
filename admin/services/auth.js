import Promise from 'bluebird';
import * as Cookies from 'cookies-js';
import { observable, computed } from 'mobx';

class Auth {
  @observable currentUser = {};

  constructor(props) {
    const expires = 3600 * 24 * 356 * 100;
    this.options = { expires };
  }

  onLogIn(currentUser) {
    this.currentUser = {...currentUser};
    Cookies.set('currentUser', JSON.stringify(currentUser), this.options);
  }

  onLogout() {
    this.currentUser = {};
    Cookies.set('currentUser', undefined, { expires: undefined });
  }

  onCheck() {
    return new Promise((resolve, reject) => {
      try {
        const currentUser = JSON.parse(Cookies.get('currentUser'));
        if (currentUser && currentUser._id) this.onLogIn(currentUser);
        resolve(currentUser);
      } catch (e) {
        reject(e)
      }
    })
  }

  @computed get isLoggedIn() {
    return !!(this.currentUser || {})._id;
  }
}

export default new Auth();
