import React from 'react';
import {Card} from 'antd';
import ShoppingList from './shoppinglist.js';
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			val:''
		}
	}
	 onTextChanged = (event) => {
    this.setState({ val: event.target.value });
	console.log(this.state.val);
  }
  resetClicked=()=>{
	 this.setState({val:'null'});
  }
    style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };
	render(){
		  return (
		<div>
		  <Card style={this.style} actions={[<a>操作一</a>, <a>操作二</a>]}>
			 <Card.Meta
		      avatar={<img 
		        alt=""
		        style={{ width: '64px', height: '64px', borderRadius: '32px' }}
		        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
		      />}
		      title="Alipay"
		      description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
		    />
		  </Card>
			 <ShoppingList name='franson' val={this.state.val} onTextChange={this.onTextChanged}/>
			 <button onClick={this.resetClicked}>重置</button>
			</div>
		);
	}
}
export default MyForm;