import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  // Բեռնում ենք օգտատերերի ցանկը սերվերում
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Օգտատերերի ցանկ</h1>
      
      <div className="space-y-3">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded-lg shadow-sm bg-white flex justify-between items-center">
            <span className="font-semibold text-gray-800">{user.name}</span>
            
            {/* Հղում դեպի տվյալ օգտատիրոջ դինամիկ էջ */}
            <Link 
              href={`/users/${user.id}`} 
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition"
            >
              Տեսնել ID / Մանրամասներ
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}