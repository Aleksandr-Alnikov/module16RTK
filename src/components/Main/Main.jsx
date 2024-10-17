import {List} from "../List/List";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {addItem, filterItem, removeItem} from "../../redux/action.js";
import {addItem, removeItem, toggleItem} from "../../reduxTK/itemSlice.js";
import {setFilter} from "../../reduxTK/filterSlice.js";


export const Main = () => {
    // const [value, setValue] = useState('');
    // const filter = useSelector(state => state.filter ?? 'all');
    // const items = useSelector(state => state.items);
    // const dispatch = useDispatch();


    const [value, setValue] = useState('');
    const items = useSelector(state => state.item.items);
    const filter = useSelector(state => state.filter.filter ?? 'all');
    const dispatch = useDispatch();
    console.log(useSelector(state => state))

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    const handleClick = (e) => {
        e.preventDefault();

        const item = {
            name: value,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
            completed: false,
        };
        dispatch(addItem(item));
        setValue('');
    };

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    };

    const handleToggle = (id) => {
        dispatch(toggleItem(id));
    };

    const filterItems = items.filter(item => {
        if (filter === 'completed') {
            return item.completed;
        }
        if (filter === 'acompleted') {
            return !item.completed;
        }
        return true;
    });


    return (
        <main className='container'>
            <section>
                <div className="container">
                    <form>
                        <div className='wrapper'>
                            <label>
                                <input name="task"
                                       placeholder="Новыя задача"
                                       type="text"
                                       value={value}
                                       onChange={handleChange}
                                />
                            </label>
                            <button onClick={handleClick}
                                    name="btn"
                                    type="submit">
                                Добавить
                            </button>
                        </div>
                        <select onChange={handleFilterChange} value={filter}>
                            <option value="all">Все</option>
                            <option value="completed">Завершенные</option>
                            <option value="acompleted">Не завершенные</option>
                        </select>
                    </form>
                </div>
            </section>
            {filterItems.length > 0 ? <List items={filterItems}
                                            toggleFilter={handleToggle}
                                            remove={handleRemove} />  : <p>Список дел пустой.</p>}
        </main>
    );
};