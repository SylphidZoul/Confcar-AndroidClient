class Http {
  static instance = new Http()
  server = 'http://192.168.100.10:3004/'

  get = async (param) => {
    try {
      const response = await fetch(`${this.server}${param}`)
      const data = await response.json()

      return data
      
    } catch (error) {
      throw Error('Sin conexión')
    }
  }

  post = async (body, param) => {
    const config = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    try {
      const response = await fetch(`${this.server}${param}`, config)
      const data = await response.json()

      return data
    } catch (error) {
      throw Error('Sin conexión')
    }
  }
}

export default Http