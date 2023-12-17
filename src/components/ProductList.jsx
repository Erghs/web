function ProductsList(){
    return <div>
                <h2>Список товаров</h2>
                <ul>
                {
                    phones.map(function(item){
                        return <li key={item.id}>
                                 <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                               </li>
                    })
                }
            </ul>
        </div>;
}