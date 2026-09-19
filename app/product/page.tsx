


interface User {
    id:number,
    name:string,
    email:string,
}

const ProductPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data:User[] = await response.json()
   
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductPage;