function Products(){
    return <div>
        <h2>Товары</h2>
            <Routes>
                <Route path="/phones" element={<Phone />} />
                <Route path="/tablets" element={<Tablet />} />
            </Routes>
        </div>;
}