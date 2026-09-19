interface UserDetailProps {
  params: Promise<{
    id: string;
  }>;
}

const UserDetail = async ({ params }: UserDetailProps) => {
  
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
        return <div className="p-8 text-red-500">Օգտատերը չի գտնվել</div>;
    }

    const user = await res.json();
    
    return (
        <div className="p-8 max-w-xl mx-auto space-y-2">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Հեռախոսահամար:</strong> {user.phone}</p>
        </div>
    );
}

export default UserDetail;