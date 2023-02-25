/* eslint-disable import/no-commonjs */
/**
 * 微信开发者工具
 */

import yargs from 'yargs'

const path = require('path')
const shelljs = require('shelljs')

const cliPath = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'

export const open: yargs.CommandModule = {
    command: ['open'],
    describe: '打开项目',
    handler() {
        const projectPath = path.resolve('dist')

        shelljs.exec(`${cliPath} -o ${projectPath}`)
    },
}
