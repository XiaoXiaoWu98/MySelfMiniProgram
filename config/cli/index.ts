/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as yargs from 'yargs'
// import version from './version'
// import uploadWeapp from './uploadWeapp'
import { open } from './wx'

yargs
    .command(open)
    // .command(version)
    // .command(uploadWeapp)
    .help()
    .alias('help', 'h')
    .alias('version', 'v').argv
