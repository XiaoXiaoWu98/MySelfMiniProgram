/* eslint-disable import/no-commonjs */
import * as ci from 'miniprogram-ci'
// import upqn from '@yzfe-private/upqn'
import yargs from 'yargs'

const fs = require('fs')
const ora = require('ora')
const path = require('path')
const qr = require('qr-image')
const axios = require('axios')
const chalk = require('chalk')
const packageConfig = require('../../package.json')

const uploadConfigMap = {
    dev: {
        appid: 'wxfa992737f392a015'
    },
    sit: {
        appid: 'wxc3e6cff5add5b53c'
    },
    prd: {
        appid: 'wx073995698d264d16'
    }
}



const Command: yargs.CommandModule = {
    command: ['upload-weapp [env]'],
    describe: '上传小程序',
    async handler(args: any) {
        const { env } = args

        const version = packageConfig.version

        await upload(env, version)
    }
}

// 上传模板到草稿箱
const upload = async (env: string, version: string) => {
    const spinner = ora()
    const appid = uploadConfigMap[env].appid
    try {
        const url = `https://open.weixin.qq.com/sns/getexpappinfo?appid=${appid}&path=pages/index/index.html`

        const project = new ci.Project({
            appid: appid,
            type: 'miniProgram',
            projectPath: path.join(__dirname, '../../dist'),
            privateKeyPath: path.join(__dirname, `../privateKey/private.${appid}.key`)
        })

        spinner.start('上传打包产物中... 📦')

        const uploadResult = await ci.upload({
            project,
            version: version,
            desc: packageConfig.description
        })

        console.log(chalk.green(uploadResult))

        spinner.succeed(
            chalk.green(
                `${packageConfig.description} ${env}-${version} appid:${appid} 微信小程序上传成功 🥂`
            )
        )

        const pngBuffer = qr.imageSync(url, { type: 'png' })

        await fs.writeFileSync('./dist/weapp-qrcode.png', pngBuffer)

        const imgFile = path.join(__dirname, '../../dist/', 'weapp-qrcode.png')

        // const res = await upqn({
        //     file: {
        //         path: imgFile,
        //         key: `weapp-qrcode/${Date.now()}.png`
        //     }
        // })

        // const imgUrl = res[0].url

//         const markdown = `
// ## ${packageConfig.description}体验码
// * 环境: ${env}
// * 版本: ${env}-${version}
// * 小程序: ${appid}

// ![qrcode](${imgUrl})
//                 `

        // await push2DingTalk(markdown, `${packageConfig.description}体验码`)
    } catch (err) {
        spinner.fail(
            chalk.red(
                `${packageConfig.description} ${env}-${version} devAppid:${appid} 微信小程序上传失败 😣`
            )
        )

        console.log('err: ', err)
    }
}

const push2DingTalk = async (msg: string, title: string) => {
    const spinner = ora()
    try {
        spinner.start('正在推送二维码到钉钉群... 😎')

        const res = await axios.post(
            // dingTalkWebhook,
            {
                msgtype: 'markdown',
                markdown: {
                    title,
                    text: msg
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        spinner.succeed(chalk.green('二维码推送成功 🥂'))

        return res
    } catch (err) {
        spinner.fail(chalk.red('二维码推送失败 😣'))
        console.log('err: ', err)
    }
}

export default Command
