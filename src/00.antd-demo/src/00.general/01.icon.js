import React, {Component} from 'react';
import {Icon} from 'antd';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li>实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；</li>
                    <li>命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。</li>
                </ul>
                <Icon type="frown" />
                <Icon type="frown-o" />
                <Icon type="frown-circle" />
                <Icon type="frown" />
            </div>
        );
    }
}

export default App;
