import React, {Component} from "react";
import './App.css';
import View from "./components/view";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nguyen Van B',
            age: 18
        }
    }

    onchange = () => {
        const {age} = this.state;
        this.setState({
            name: 'le thi c',
            age: age + 2
        })

    }

    render() {
        const {name, age} = this.state;
        const check = {
            data: 5
        }
        const params = {
            name: name,
            age: age
        }
        return (
            <div>
                <View data={params} check={check}/>
                <button onClick={this.onchange}>bam vao day</button>
            </div>

        )
    }
}

export default App;