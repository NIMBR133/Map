import axios, { AxiosRequestConfig } from 'axios'
import { URL_API } from '@config'

export const url = URL_API

export const createRequest = async ({
  url,
  method = 'GET',
  data = null,
  headers,
  ...props
}: AxiosRequestConfig) => {
  return await axios
    .request({
      url,
      method,
      data,
      headers,
      ...props
    })
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.data
      }

      return response
    })
}
