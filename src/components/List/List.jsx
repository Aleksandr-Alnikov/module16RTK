export const List = ({items, remove, toggleFilter}) => {

    return (
        <section>
            <p>Ко-во дел: {items.length}</p>
            <ul className="list">
                {items.map(item =>
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <div className="filter">
                            <input type="checkbox"
                                   checked={item.completed}
                                   onChange={() => toggleFilter(item.id)}
                            />
                            <button onClick={() => remove(item.id)}>Удалить</button>
                        </div>
                    </li>)}
            </ul>
        </section>
    );
};