const axios = require('axios')
const config = require('config')

exports.query = async function query(method, params = []) {
    const data = {
        jsonrpc: '2.0',
        method,
        params,
        id: 1,
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 500,
    }
    try {
        return (await axios.post(config.endPoint, JSON.stringify(data), options)).data.result
    } catch (e) {
        return null
    }
}