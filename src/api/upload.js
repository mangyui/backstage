import request from './request'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'api' // api的base_url

export function upLoadImage (datas) {
  return request({
    url: baseUrl + '/?service=App.Upload.Upload',
    method: 'post',
    data: datas
  })
}
