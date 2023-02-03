import './ExpenseTracker.css';

function Todo(props) {
    const handleClick = () => {
        alert ("You clicked: " + props.name)
    }
    return (
        <div className='main-container'>
            <div className='container' onClick={handleClick}>
                <div className='name'>{props.name}</div>
                <div className='price'>PHP {props.price}</div>
            </div>
        </div>
           
    )
}

export default Todo;