import React from "react";
import "../Button/Button"
import Button from "../Button/Button";
class Course extends React.Component {

    clicker() {
        const active = !this.state.active;
        const price = this.props.price;
        this.setState({
            active: active,
        });
        this.props.sumPrice(active ? price : -1 * price)
    }

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.clicker = this.clicker.bind(this)
    }
    render() {
        return (
            <Button class="course" handleClick={this.clicker} left={this.props.name} right={this.props.price}/>
        )
    }
}

export default Course;