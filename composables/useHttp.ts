import type { FetchResponse, SearchParameters } from 'ofetch'
import cloneDeep from 'lodash-es/cloneDeep'

export interface ResOptions<T> {
  data: T
  code: number
  message: string
  success: boolean
}

function handleError<T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) {
  const err = (text: string) => {
    ElMessage.error({
      message: response?._data?.message ?? text,
    })
  }
  if (!response._data) {
    err('请求超时，服务器无响应！')
    return
  }
  const handleMap: { [key: number]: () => void } = {
    404: () => err('服务器资源不存在'),
    500: () => err('服务器内部错误'),
    403: () => err('没有权限访问该资源'),
    401: () => err('登录状态已过期，需要重新登录'),
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}

// get方法传递数组形式参数
function paramsSerializer(params?: SearchParameters) {
  if (!params)
    return

  const query = useCloned(params, { clone: cloneDeep }).cloned.value as any
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

const fetch = $fetch.create({
  onRequest({ options }) {
    options.params = paramsSerializer(options.params)
    const { public: { apiBase } } = useRuntimeConfig()
    options.baseURL = apiBase
    options.headers = new Headers({
      ...options.headers,
      'Content-Type': 'application/json',
    })
  },
  onResponse({ response }) {
    if (response._data.code !== 200) {
      handleError(response)
      return Promise.reject(response._data)
    }
    return response._data
  },
  onResponseError({ response }) {
    handleError(response)
    return Promise.reject(response?._data ?? null)
  },
})

function awaitWrap<T>(promise: Promise<T>) {
  return promise.then((data: any) => [data.data, null]).catch(err => [null, err])
}

export const useHttp = {
  get: <T>(url: string, params?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'get', params }))
  },
  post: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'post', body }))
  },
  put: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'put', body }))
  },
  delete: <T>(url: string, body?: any) => {
    return awaitWrap(fetch<T>(url, { method: 'delete', body }))
  },
}