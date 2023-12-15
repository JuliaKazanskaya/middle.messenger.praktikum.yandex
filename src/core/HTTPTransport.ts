/* eslint-disable @typescript-eslint/no-explicit-any */
const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

type HttpMethod = typeof METHODS[keyof typeof METHODS];

function queryStringify(data: Record<string, any>): string {
  const params = Object.keys(data).map((key) => {
    let value = data[key];

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });

  return `?${params.join('&')}`;
}

export class HTTPTransport {
  request = (url: string, options: { data?: any, headers?: Record<string, string>, method: HttpMethod } = { method: METHODS.GET }, timeout = 5000): Promise<XMLHttpRequest> => {
    const { data, headers = {}, method } = options;

    const xhr = new XMLHttpRequest();
    const isGet = method === METHODS.GET;

    xhr.open(method, `${url}${queryStringify(data)}`);

    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };

  get = (url: string, options: { data?: any, headers?: Record<string, string> } = {}): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.GET });

  post = (url: string, options: { data?: any, headers?: Record<string, string> } = {}): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.POST });

  put = (url: string, options: { data?: any, headers?: Record<string, string> } = {}): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.PUT });

  delete = (url: string, options: { data?: any, headers?: Record<string, string> } = {}): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.DELETE });
}
