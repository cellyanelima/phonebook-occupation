import request from 'superagent'

const rootUrl = '/api/v1'

export function getContacts(): Promise<string[]> {
  return request.get(rootUrl + '/contacts').then((res) => {
    return res.body.contacts
  })
}

export function getOccupations(): Promise<string[]> {
  return request.get(rootUrl + '/occupations').then((res) => {
    return res.body.occupations
  })
}