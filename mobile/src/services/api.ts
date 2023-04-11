import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.21.200.225:3333'
})
