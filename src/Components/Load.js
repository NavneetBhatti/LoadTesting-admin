import "../App.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space ,TimePicker} from "antd";
import { useHistory } from "react-router-dom";


function Load() {
  const history = useHistory();
  const navigateTo = () => history.push('/');//eg.history.push('/login');
  return (
    <div className="App">
      <header className="App-header">
        <h2>Add new test</h2>
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="testName"
            label="Test Name"
            rules={[
              {
                required: true,
                message: "Please enter test name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type test name" />
          </Form.Item>

          <Form.Item
            name="time"
            label="Start Time"
            rules={[
              {
                required: true,
                message: "Please enter date",
              },
            ]}
            hasFeedback
          >
            <TimePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose time "
            />
            
          </Form.Item>

          <Form.Item
            name="Runs"
            label="Runs"
            rules={[
              {
                required: true,
                message: "Please enter no. of runs",
              },
              { whitespace: true },
              { min: 1 },            ]}
            hasFeedback
          >
            <Input placeholder="Type Runs" />
          </Form.Item>

          <Form.Item
            name="minutes"
            label="Total minutes"
            rules={[
              {
                required: true,
                message: "Please enter total minutes",
              },
              { whitespace: true },
              { min: 1 },            ]}
            hasFeedback
          >
            <Input placeholder="Type total minutes" />
          </Form.Item>

          
          <Form.Item
            name="date"
            label="Date"
            rules={[
              {
                required: true,
                message: "Please enter date",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date "
            />
            
            
          </Form.Item>

          

          

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit" >
              Run Test
            </Button>

          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default Load;