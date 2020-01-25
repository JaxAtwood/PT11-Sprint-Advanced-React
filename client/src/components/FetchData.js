import React from "react";
import axios from "axios";

class FetchData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: []
        }
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5000/api/players`)
        .then(res => {
            console.log(res.data)
            this.setState({
                player: res.data,
            })
        })
        .catch(err => {
            console.log("error", err)
        })
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                {this.state.player.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default FetchData;