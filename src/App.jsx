import './App.css'
import Counter from './Counter';
import Todo from './Todo';

const App = () => {
    return (
        <div className='app'>
            <Counter />
            <Todo />
            <Todo />
        </div>
    );
};

export default App;