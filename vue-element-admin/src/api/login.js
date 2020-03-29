import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  const data = {
    username: 'admin'
  }
  return request({
    // url: '/user/logout',
    url: '/user/info',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  const data = {
    username: 'admin'
  }
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}

