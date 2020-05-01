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
    url: '/dashboard/transaction/list',
    method: 'post',
    params: { query: query }
  })
}

export function panelgroupList(query) {
  console.log('---panelgroup', query)
  return request({
    url: '/dashboard/panelgroup/list',
    method: 'post',
    params: { query: query }
  })
}
