const utils = require('./utils')

exec()

async function exec() {
    const date = (new Date()).toISOString()
    const address = await utils.query('hpb_coinbase', ['latest'])

    const rawBalance = await utils.query('hpb_getBalance', [address, 'latest'])
    const balance = Math.round(parseInt(rawBalance, 16) / 100000000000000) / 10000

    const nodeInfo = await utils.query('admin_nodeInfo', [address, 'latest'])

    const nodeType = nodeInfo.local === 'HpNode' ? 1 : 0
    console.log(`${date} address: ${address} balance: ${balance} type: ${nodeType}`)
}
