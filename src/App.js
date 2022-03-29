import React, { Component} from 'react'
import { List } from './components/List';
import Form from './components/Form';

class App extends Component {

constructor(props){
  super(props)

  this.state={
    courses:[
      {name:'html'}
    ],
    curent:''
  }
}

  
  
apdatecourse=(e)=>{
  e.preventDefault()
  this.setState({
    curent: e.target.value
  })
}
addcourse=(e)=>{
  e.preventDefault()
  let newcurent=this.state.curent;
  let courseslist=this.state.courses;
  courseslist.push({name:newcurent})
  this.setState({
    courses:courseslist,
    curent:''
  })
}

editcourses=(index,value)=>{
 let courses=this.state.courses;
 let course=courses[index]
 course['name']=value
 this.setState({
   courses
 })
}

deletecource=(index)=>{
let courses=this.state.courses;
courses.splice(index,1)
this.setState({
  courses
})
}

  render() {
    const {courses}=this.state
    const courselist=courses.map((cour,index)=>{ 
      return <List details={cour} key={index}  index={index} delete={this.deletecource} editcourses={this.editcourses}/>
    }
    )
      return (
        <section className="App">
       <h1>ADD COURSES</h1>
       <Form curent={this.state.curent} apdate={this.apdatecourse} addcource={this.addcourse}/>
             <ol>
        {courselist}
          </ol>
        </section>
      );
  }
}

export default App