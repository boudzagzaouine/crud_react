import React, { Component, Fragment } from 'react'

export class List extends Component {

  state={
    isedit:false
    }
crud=()=>{
  return (
    <li>
    <span>{this.props.details.name}</span>
    <button onClick={()=>this.togglestate()}>EDIT</button>
    <button onClick={()=>{this.props.delete(this.props.index)}}>DELETE</button>
    </li>
  )
}

updatecourses=(e)=>{
e.preventDefault();
this.props.editcourses(this.props.index,this.input.value)
this.togglestate();

}

togglestate=()=>{
  let {isedit}=this.state;
  this.setState({
    isedit:!isedit
  })
}
rendereditform=()=>{
  return (
    <form  onSubmit={this.updatecourses}>
      <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
      <button>CONFIRMER</button>
    </form>
  )
}
  render() {
    let {isedit}=this.state
    return (
      <Fragment>
       {isedit ? this.rendereditform() : this.crud()}
      </Fragment>
    )
  }
}

export default List