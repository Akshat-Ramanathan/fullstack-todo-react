import Todo from './Todo';

function Todos({ data }) {
    return (
        <div className='ui segment'>
            {
                data.map(({ id, title, complete }) =>
                    <Todo key={id} id={id} title={title} complete={complete} />
                )
            }
        </div>
    );
}

export default Todos;
