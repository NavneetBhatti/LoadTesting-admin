import "antd/dist/antd.css";
import "../App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";


// export default function home() {

 function Home() {
  const history = useHistory();
  const navigateTo = () => history.push('/load');//eg.history.push('/login'); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Test1",
      StartTime: "8:00 AM",
      Runs: "20",
      minutes: "30",
    },
    {
      id: 2,
      name: "Test2",
      StartTime: "8:30 AM",
      Runs: "30",
      minutes: "20",
    },
    {
      id: 3,
      name: "Test3",
      StartTime: "9:00 PM",
      Runs: "10",
      minutes: "25",
    },
    {
      id: 4,
      name: "Test4",
      StartTime: "5:00 AM",
      Runs: "10",
      minutes: "10",
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
      title: "Start Time",
      dataIndex: "StartTime",
    },
    {
      key: "4",
      title: "Runs",
      dataIndex: "Runs",
    },
    {
    key: "5",
    title: "Total Minutes",
    dataIndex: "minutes",
  },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "TestName " + randomNumber,
      StartTime: randomNumber ,
      Runs: "Runs " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <button style={{ backgroundColor: "#001C3E", marginBottom: "25px", color: "WHITE",height:"40px",width:"150px"}} onClick={navigateTo} type="button" >+New Test</button>

        <Table columns={columns} dataSource={dataSource} className="tableR"></Table>
        <Button onClick={onAddStudent}>Add a new test</Button>

        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.StartTime}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, StartTime: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.Runs}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Runs: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Home;





