/*
 * @FilePath: \hel-micro-utils\config\subApp.js
 * @Date: 2022-09-24 03:03:23
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-09-24 04:16:07
 * @Description:
 * @unpkg链接：https://unpkg.com/hel-micro-lodash@latest/hel_dist/hel-meta.json
 */

const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg' });

module.exports = subApp;
