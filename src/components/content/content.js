/**
 * @file : file
 * @author: xumingzhi@baidu.com
 * @date: 2019-04-06 00:09:37
 */
import './content.less';
import san from 'san';
import boxCom from './box/box';
let template = require('html-withimg-loader!./content.html');
export default san.defineComponent({
    template: template,
    components: {
        box: boxCom
    },
    initData() {
        return {
            text: 'box'
        };
    },
    attached() {
        console.log('box component');
    }
});
