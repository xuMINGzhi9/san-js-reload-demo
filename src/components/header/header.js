/**
 * @file : file
 * @author: xumingzhi@baidu.com
 * @date: 2019-04-06 00:09:37
 */
import './header.less';
import san from 'san';
let template = require('html-withimg-loader!./header.html');
export default san.defineComponent({
    template: template,
    attached() {
        console.log('header');
    }
});
