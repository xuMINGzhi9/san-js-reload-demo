/**
 * @file : file
 * @author: xumingzhi@baidu.com
 * @date: 2019-04-07 23:22:15
 */
import san from 'san';
import headerCom from './components/header/header';
import contentCom from './components/content/content';
let AppComponent = san.defineComponent({
    template: '<div id="san-content"><header-com></header-com><content-com></content-com></div>',
    components: {
        'header-com': headerCom,
        'content-com': contentCom
    }
});

let myApp = new AppComponent();
myApp.attach(document.body);