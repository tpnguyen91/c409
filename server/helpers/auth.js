import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import Model from '../models'
import unAuth from './unAuth'

export const encryption = (password) => crypto.createHash('sha256').update(password).digest('base64');

export const generateJWTToken = (user) => jwt.sign(user, config.JWT.SECRET, { expiresIn: config.JWT.EXPIRE_TIME })

export const isAuthenticated = (req, res, next) => {
  const passed = unAuth.filter((route) => req.path.indexOf(route.path) > -1 && (route.method === undefined || req.method === route.method))[0];

  if (passed) return next();

  const token = getTokenFromReq(req);
  if (!token) {
    return handleError(res, {
      status: 200,
      code: 401,
      message: 'Chưa đăng nhập',
    });
  }

  getUserFromToken(token)
  .then((user) => {
    req.user = user;
    next();
  })
  .catch((err) => handleError(res, err))
}

export const getTokenFromReq = (req) => {
  if (req.headers.token) return req.headers.token
  if (req.session && req.session.token) return req.session.token
  return null
}

export const getUserFromToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, config.JWT.SECRET, (err, decoded) => {
    if (err) {
      return reject({
        status: 401,
        message: 'Invalid token. Please sign in again'
      })
    }

    return Model.users
    .findOne({ _id: decoded._id, email: decoded.email })
    .then((user) => {
      if (!user) {
        reject({
          status: 401,
          message: "We can't recognize who you are. Please sign in again"
        })
      } else {
        delete user.password
        resolve(user)
      }
    })
  })
})

const handleError = (res, err) => {
  return res.status(err.status).send({ status: err.status, message: err.message })
}
