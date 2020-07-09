import React from "react";
import Course from '../Course/Course';
import Button from "../Button/Button";
class Coursesales extends React.Component {

    sumPrice(price) {
        this.setState({
            total: this.state.total + price
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {

        const courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active} />
        })

        return (
            <div>
                <h2>You can buy courses: </h2>
                <div id="courses">
                    {courses}
                    <Button class="total" left="Total" right={this.state.total}/>
                </div>
            </div>
        )
    }
}

export default Coursesales;