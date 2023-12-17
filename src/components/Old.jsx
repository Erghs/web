function Old(){
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    return <div>
        <h2>Old {id}</h2>
        <button
          onClick={async event => {
            navigate(`/new/${id}`);
          }}
        >Navigate</button>
    </div>;
}