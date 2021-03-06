import "antd/dist/antd.css";
import "../App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import CharactersList from "../pages/CharactersList";
import Search from "./Search";
import { useQuery,gql } from "@apollo/client"
import Temp from "./Temp";


const GET_CHARACTERS =  gql`
query{
  allRecordings{
    id
    name
    startTime
    endTime
    urlInfoList{
      start
      end
      url
    }
  }
}
`


// export default function home() {

 function Recording() {
  const {error, data , loading} = useQuery(GET_CHARACTERS)

  const history = useHistory();
  const navigateTo = () => history.push('/load');//eg.history.push('/login'); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Recording1",
      StartTime: "8:00 AM",
      EndTime: "20",
      URL : "https://www.youtube.com/watch?v=NbKJFRgsw-A&ab_channel=PragmaticReviews",
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
      title: "Recording Name",
      dataIndex: "name",

    },
    {
      key: "3",
      title: "Start Time",
      dataIndex: "StartTime",

    },
    {
      key: "4",
      title: "End Time",
      dataIndex: "StartTime",
    },
    {
      key: "5",
      title: "URL",
      dataIndex: "URL",

    },
    
   {
      key: "5",
      title: "Actions",

      render: (record) => {
        return (
        //   <>
        //     <EditOutlined
        //       onClick={() => {
        //         onEditStudent(record);
        //       }}
        //     />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
        //   </>
        );
      },
    },
  ];

 
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

  return (
    <div className="App">
          <Search />

      <header className="App-header">
        
        {/* <Table columns={columns} dataSource={dataSource} className="tableR"></Table> */}

        <Table columns={columns} dataSource={dataSource}
        className="tableR"></Table>

       
      </header>

      <CharactersList />
      {/* <Templates /> */}
      <Temp />
    </div>
  );
}

export default Recording;

{/* <div>
        <h1>Recordings</h1>
        <table border="2"> 
            <tr>
                <th>Recording Name</th>
                <th>Start time</th>
                <th>End time</th>
                <th>URL</th>
                <th>URL Start time</th>
                <th>URL End time</th>
            </tr>
   
            {data.allRecordings.map((character) => {
            return(
            <>

            <tr>              
                <td>   <h2>{character.name}</h2>  </td>
                <td>    <h2>{character.startTime}</h2> </td>
                <td>  <h2>{character.endTime}</h2> </td>
                <td>
                {character.urlInfoList.map((t) => {
                return(
                  <div>
                    <td><h2>{t.url}</h2> </td>
                  </div>
                 );

                })
                }
                </td>

                <td>
                   {character.urlInfoList.map((t) => {
                      return(
                      <div>
                          <td><h2>{t.start}</h2> </td>
                      </div>
                      );
                   })
                   }
               </td>

               <td>
                   {character.urlInfoList.map((t) => {
                      return(
                      <div>
                           <td><h2>{t.end}</h2>  </td> 
                      </div>
                      );
                   })
                   }
             </td>

           </tr>

            </> 

            );
           })
          }
      </table>           
      </div>


 */}
