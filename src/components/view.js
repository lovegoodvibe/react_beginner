import React, {Component} from "react";

class View extends Component {
    render() {
        const {data,check} = this.props;
        return (
            <div>
                <ul>
                    <li>
                        NAME: {data.name}
                    </li>
                    <li>
                        age {data.age}
                    </li>
                    <li>
                        DATA: {check.data}
                    </li>
                </ul>
            </div>

        )
    }
}

export default View;