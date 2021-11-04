#!/usr/bin/env node

const program = require('commander')

// 定义当前版本
// 定义使用方法
// 定义四个指令
program
 .version(require('../package').version)
 .command('init <project-name>', 'generate a new project from a template')
  // 扩展
  // .command('add', 'add a new template')
  // .command('delete', 'delete a template')
  // .command('list', 'list all the templates')
 .parse(process.argv)
