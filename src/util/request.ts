class Request {
    isProduction: boolean
    port: number

    constructor() {
        this.port = 8080
        this.isProduction = process.env.NODE_ENV === 'production'
    }

    private url(path: string): string {
        if (this.isProduction)
            return `https://marbl.cc/:${this.port}${path}`
        return `localhost:${this.port}${path}`
    }

    private fetcher(path: string, method: string, body: BodyInit | null = null) {
        return fetch(this.url(path), {
            method,
            body: body && JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async post(path: string, body: object | null) {
        const result = await this.fetcher(path, 'POST', body as BodyInit)
        return result.json()
    }

    async get(path: string) {
        const result = await this.fetcher(path, 'GET')
        return result.json()
    }
}

const request = new Request()
export default request
