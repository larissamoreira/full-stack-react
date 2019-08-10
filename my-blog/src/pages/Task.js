import React from 'react';

class Task extends React.Component {

    state = {
        done: false,
        backgroundColor: 'white'
    }

    check = () => {
        let color = !this.state.done ? 'lightpink' : 'white';
        this.setState({ done: !this.state.done, backgroundColor: color})
    }

    render() {
        const { description, hour } = this.props;
        const styles = {
            containerStyle: {
                backgroundColor: this.state.backgroundColor,
            }
        }
        const { containerStyle } = styles;
        return (
            <div className="task" onClick={this.check} style={containerStyle}>
                <p>{description}</p>
                <p>{hour}</p>
            </div>
        )
    }
}

export default Task;