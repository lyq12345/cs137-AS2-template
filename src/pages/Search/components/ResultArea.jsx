import React,{useState} from "react";
import {Table} from "antd";

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key:'title'
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year'
      },
      {
        title: 'Director',
        dataIndex: 'director',
        key: 'director'
      },
];

const ResultArea = (props) => {
    return (
    <div style={{marginTop:"150px"}}>
        <Table columns={columns} dataSource={props.movies} />
    </div>)
}

export default ResultArea;