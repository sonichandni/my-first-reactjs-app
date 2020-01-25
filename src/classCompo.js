import React from 'react';

class StudentNav extends React.Component {

    constructor (props) {
        super(props);

        //this obj
        this.state = {
            name: 'Chandni',
            studentlist: [{name:'Chandni'},{name: 'Soni'}],
            textValue: ""
        };
    }

    getName = (event) => {
        console.log(event.target.value)
        this.setState({
			textValue: event.target.value
		});
    };

    addName = () => {
        const obj = {
            // id: this.state.studentlist.length + 1
            name: this.state.textValue         
        }
        this.setState({
            studentlist: [ ...this.state.studentlist, obj ]
            
        });
        // console.log(obj)
    };

    deleteStudent = () => {
        this.setState({
			// list: this.state.list.filter((stu) => stu.id !== student.id)
		});
    }

    render(){
        return (
            <div>
                <p>class Component</p>
                <p>Name : {this.state.name}</p>
                <form>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.textValue}
                    onChange={this.getName}
                />
                </form>
                <button type="submit" onClick={this.addName}>Save</button>

                <ul>
                    {
                        this.state.studentlist.map((stu) => {
                                return (
                                    <div>
                                        <li>
                                            {stu.name}
                                            <button student={stu} onClick={this.deleteStudent}>
                                                Delete
                                            </button>
                                        </li>

                                    </div>
                                );
                            }
                        )
                    }
                    
                </ul>
            </div>
        );
    }
}

export default StudentNav;