const utils = require('./utils')

exec()

async function exec() {
    console.log(new Date())

    const hpAddresses = await utils.query('prometheus_getHpbNodes', ['latest'])
    const nodes = []
    for (let i = 0; i < hpAddresses.length; i++) {
        const address = hpAddresses[i]
        const rawBalance = await utils.query('hpb_getBalance', [address, 'latest'])
        const balance = Math.round(parseInt(rawBalance, 16) / 100000000000000) / 10000
        nodes.push({
            address,
            balance,
        })
    }

    nodes.sort((a, b) => b.balance - a.balance)

    nodes.forEach((node, i) => {
        console.log(`balanceRank: ${i + 1}, address: ${node.address} balance: ${node.balance}`)
    })
}
