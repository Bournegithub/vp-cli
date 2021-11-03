#!/usr/bin/env node
 
const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
 
program
 .usage('[project-name]')
program.parse(process.argv)
console.log('program.args', program.args);
// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help()


if (program.init) {
  // 判断项目名称
  let projectName = program.args[0]
  if (!projectName) {
    console.log(chalk.red('\n Project should not be empty! \n '))
    return
  }
  // 下载
  // 出现加载图标
  const spinner = ora("Downloading...");
  spinner.start();
  // 执行下载方法并传入参数
  download (
  'Bournegithub/reacttypescript#master',
  program.init,
  err => {
  if (err) {
    spinner.fail();
    console.log(chalk.red(`Generation failed. ${err}`))
    return
  }
    // 结束加载图标
    spinner.succeed();
    console.log(chalk.green('\n Generation completed!'))
    console.log('\n To get started')
    console.log(`\n cd ${projectName} \n`)
    }
  )
  // const spinner = ora('正在从github下载x-build').start();
  // download('codexu/x-build#x-build4.1', program.init, function (err) {
  //   if(!err){
  //     // 可以输出一些项目成功的信息
  //     console.info(chalk.blueBright('下载成功'));
  //   }else{
  //     // 可以输出一些项目失败的信息
  //   }
  // })
}

 

