#! /usr/bin/env node

'use strict';

const appName = process.argv[2];
const {spawnSync} = require('child_process');
const url = 'git@github.com:ezekielaquino/Starter3000.git';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log('Bootstrapped a new project using Starter3000');
console.log(`$ cd ${appName}`);
console.log('$ yarn dev');
