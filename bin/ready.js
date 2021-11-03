#!/usr/bin/env node
const program = require('commander')
// const download = require('download-git-repo')
// const chalk = require('chalk')
// const ora = require('ora')

// 定义当前版本
// 定义使用方法
// 定义四个指令
program
 .version(require('../package').version)
 .usage('<command> [options]')
 .option('-i, init [name]', 'generate a new project from a template')
 .command('init', 'generate a new project from a template')
 //  .command('add', 'add a new template')
  //  .command('delete', 'delete a template')
  //  .command('list', 'list all the templates')
 .parse(process.argv)
// 解析命令行参数
// program.parse(process.argv)
