import React, {Component} from 'react';
import {Button, Radio} from 'antd';
import '../App.css';

class App extends Component {
    state = {
        // large default small
        size: 'default'
    }
    handleSizeChange(size) {
        this.setState({
            size
        });
    }
    render() {
        const {size} = this.state;
        return (
            <div className="App">
                <p className="divider-line">type------</p>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>

                <p className="divider-line">shape, icon------</p>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>

                <p className="divider-line">size------</p>
                <Radio.Group value={size} onChange={event => {
                    this.handleSizeChange(event.target.value);
                }}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br />
                <Button size={size}>Size</Button>

                <p className="divider-line">ghost------</p>
                <div style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: 'rgb(190, 200, 200)'
                }}>
                    <Button type="primary" ghost>Primary</Button>
                </div>
            </div>
        );
    }
}

export default App;
