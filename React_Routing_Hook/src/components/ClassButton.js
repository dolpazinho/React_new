import React, { Component } from 'react'

class ClassButton extends Component {
/*    state = {
        times: 0
    }

    handleClick = () => {
        console.log('Clicked Component/Button')
        this.setState({times: this.state.times + 1})
    }*/

    render() {
        const { onButtonClick, times } = this.props
        return (
            <button onClick={onButtonClick('class')}>
                Class was Clicked  {times} times
        </button>
        )
    }
}

export default ClassButton