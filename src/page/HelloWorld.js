import MyForm from './MyForm.js';
import {Tabs} from 'antd';
const TabPane=Tabs.TabPane;
 export default () => {
  return (
  <div>
  <Tabs activeKey='2'>
     <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
     <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane> 
  </Tabs>
 <MyForm/>
 </div>
  );
} 