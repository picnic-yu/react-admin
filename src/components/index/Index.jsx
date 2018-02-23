import React, { Component } from 'react'; 
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import './index.less';
export default class MIndex extends Component {
    
    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <div className='mindex'>
                    首页
                </div>
            </div>
        )
    }
}
   