import React from 'react'
import { FlowHeader } from 'containers'
import '@/views/chat.scss'

class Chat extends React.Component {
  constructor  (props) {
    super(props)
    this.state = {
      message: '',
      inputValue: '',
      
    }
    window.socket.on('chat message', function(msg){
      console.log(msg)
    });
  }
  sendMessage () {
    window.socket.emit('chat message', this.state.message);
    this.setState({
      inputValue: ''
    })
  }
  handleChange (e) {
    this.setState({
      message: e.target.value,
      inputValue: e.target.value
    })
  }
  render () {
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        <div className="chatBox">
          <input onChange={this.handleChange.bind(this)} type="text" value={this.state.inputValue}/>
          <button onClick={this.sendMessage.bind(this)}>发送</button>
        </div>
      </div>
    )
  }
}

export default Chat