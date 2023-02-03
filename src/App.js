import './App.css';
import Todo from './components/ExpenseTracker'
import expenses from './components/data';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {expenses.map((info) => {
        return <Todo name={info.name} price={info.price}/>
      })}
      <h2>TOTAL: &nbsp; 
      {expenses.reduce((total,value) => {
                return total + value.price;
            }, 0)}
      </h2> 
    </div>
  );
}

export default App;
