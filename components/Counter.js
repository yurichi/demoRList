import React,{Component,PropTypes} from 'react'
 class Counter extends Component {
    render() {
        const { increment, decrement, counter } = this.props;

        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
            </p>
            )
    }
 }
 Counter.PropTypes = {
   increment: PropTypes.func,
   decrement: PropTypes.func,
   counter: PropTypes.number
 }


export default Counter
