import "antd/dist/antd.css";
import "../App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";


// export default function home() {

 function Recording() {
//   const history = useHistory();
  
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Test1",
      Result: "success",
    },
    {
      id: 2,
      name: "Test2",
      Result: "error",
    },
    {
      id: 3,
      name: "Test3",
      Result: "error",
    },
    {
      id: 4,
      name: "Test4",
      Result: "success",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Test Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Result",
      dataIndex: "Result",
    },
    
    // {
    //   key: "4",
    //   title: "Actions",
    //   render: (record) => {
    //     return (
        
    //         <DeleteOutlined
    //           onClick={() => {
    //             onDeleteStudent(record);
    //           }}
    //           style={{ color: "red", marginLeft: 12 }}
    //         />
    //     );
    //   },
    // },
  ];

//   const onAddStudent = () => {
//     const randomNumber = parseInt(Math.random() * 1000);
//     const newStudent = {
//       id: randomNumber,
//       name: "RecordingName " + randomNumber,
//       Result: randomNumber ,
//       EndTime: "EndTime " + randomNumber,
//     };
//     setDataSource((pre) => {
//       return [...pre, newStudent];
//     });
//   };
// //   const onDeleteStudent = (record) => {
//     Modal.confirm({
//       title: "Are you sure, you want to delete this student record?",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         setDataSource((pre) => {
//           return pre.filter((student) => student.id !== record.id);
//         });
//       },
//     });
//   };

  return (
    <div className="App">
      <header className="App-header">
        
        <Table columns={columns} dataSource={dataSource}></Table>
        
      </header>
    </div>
  );
}

export default Recording;





