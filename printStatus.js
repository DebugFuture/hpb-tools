const utils = require('./utils')
const config = require('./config')

exec()

async function exec() {
    const date = new Date()
    const address = config.nodeAddress

    const rawBalance = await utils.query('hpb_getBalance', [address, 'latest'])
    const balance = Math.round(parseInt(rawBalance, 16) / 100000000000000) / 10000

    const nodeInfo = await utils.query('admin_nodeInfo', [address, 'latest'])

    console.log(`${date} address: ${address} balance: ${balance} type: ${nodeInfo.local}`)
}
