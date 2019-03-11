import { Table } from 'antd';
import './TrajectoriesTable.css';
import React, { Component }  from 'react';

const columns =[{
    title: 'Seq',
    dataIndex: 'seq'
}, {
    title: 'Color',
    dataIndex: 'color'
},{
    title: '',
    dataIndex: 'checkbox'
}];

const data = [
    {
        key: 1,
        seq: 1,
        color: 'Blue'
    },
    {
        key: 2,
        seq: 2,
        color: 'Red',
    },
    {
        key: 3,
        seq: 3,
        color: 'Green'
    }
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        check: record.checkbox
    }),
};

export class TrajectoriesTable extends Component{

    render(){
        return <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
    }
}