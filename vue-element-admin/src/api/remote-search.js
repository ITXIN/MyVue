import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  console.log('---trans', query)
  return request({
    url: '/transaction/list',
    method: 'get',
    params: { query: query }
  })
}
