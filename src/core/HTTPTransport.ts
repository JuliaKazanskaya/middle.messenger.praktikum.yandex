const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

function queryStringify(data: Record<string, any>): string {
    const params = [];

    for (let key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            let value = data[key];

            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }

            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    }

    return `?${params.join('&')}`;
}

class HTTPTransport {
    request = (url: string, options: { headers?: Record<string, string>, method: string, data?: any } = { method: METHODS.GET }, timeout = 5000): Promise<XMLHttpRequest> => {
        const { headers = {}, method, data } = options;

        if (!method) {
            return Promise.reject('No method');
        }

        const xhr = new XMLHttpRequest();
        const isGet = method === METHODS.GET;

        xhr.open(method, `${url}${queryStringify(data)}`);

        Object.keys(headers).forEach(key => {
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

    get = (url: string, options: { headers?: Record<string, string>, data?: any } = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.GET });
    };

    post = (url: string, options: { headers?: Record<string, string>, data?: any } = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.POST });
    };

    put = (url: string, options: { headers?: Record<string, string>, data?: any } = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.PUT });
    };

    delete = (url: string, options: { headers?: Record<string, string>, data?: any } = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.DELETE });
    };
}
