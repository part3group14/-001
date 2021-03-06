import React from 'react'
import { Breadcrumb } from 'antd';
import { Button, Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import style from './index.module.css'
export default class BreadCrumb extends React.Component {
    constructor(props) {
        // console.log(props);
        super(props)
        this.state = {
            text:"更新"
        }
    }
    render = () => {
        return (
            <div className={style.box}>
                <div className={style.left}>
                    <Breadcrumb separator=">" >
                        <Breadcrumb.Item>{this.props.list.title1}</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a>{this.props.list.title2}</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a>{this.props.list.title3}</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="right1">
                    <Tooltip placement="bottomLeft" title={this.state.text} mouseLeaveDelay="0.1">
                        <Button type="primary" style={{ backgroundColor: "#2fb9d4", width: "36px", height: "30px", border: "none" }} icon={<SyncOutlined />} size="middle" />
                    </Tooltip>
                </div>
            </div>
        )
    }
}

