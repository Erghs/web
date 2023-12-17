function Home(){
    // получаем параметры маршрута
    const params = useParams();
    // получаем параметры строки запроса
    const [searchParams, setSearchParams] = useSearchParams();
    return <div>
            <h2>Главная</h2>
            <p>Id: {params.id}</p>
            <p>Name: {searchParams.get("name")}</p>
            <p>Age: {searchParams.get("age")}</p>
     </div>;
}