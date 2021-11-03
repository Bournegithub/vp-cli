#!/usr/bin/env node
 
// console.log('hello');
const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
 
program
 .name('ready init')
 .usage('[project-name]')
program.parse(process.argv)

// 当没有输入项目名称的时候提示
if (program.args.length < 1) {
  console.log(chalk.red('\n 请输入项目名称 \n '))
  return program.help()
}
const projectName = program.args[0]
// 下载
// 出现加载图标
const spinner = ora("Downloading...");
spinner.start();
// 执行下载方法并传入参数
download('Bournegithub/vue-web-ready/#main', projectName, (err) => {
  if (err) {
    spinner.fail();
    console.log(chalk.red(`Generation failed. ${err}`))
    return
  }
  // 结束加载图标
  spinner.succeed();
  console.log(chalk.green('\n Generation completed!'))
  console.log('\n To get started')
  console.log(`\n cd ${projectName}, \n`)
})
