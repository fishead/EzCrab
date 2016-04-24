import { call } from 'redux-saga/effects';
import qs from 'qs';


export function * request({ endpoint, method, headers = {}, query, payload, timeout = 10000 }) {
  try {
    const queryString = query ? `?${qs.stringify(query)}` : '';
    const fullUrl = `${endpoint}${queryString}`;

    const response = yield call(fetch, fullUrl, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: payload ? JSON.stringify(payload) : null,
    });

    if (response.status === 401) {
      throw new Error('尚未登录');
    }
    if (response.status >= 500) {
      throw new Error('服务器异常');
    }
    const json = yield call(response.json.bind(response));
    if (!response.ok || json.error) {
      throw new Error(json.message || '未知错误');
    }
    return json;
  } catch (err) {
    throw err;
  }
}

export default request;
