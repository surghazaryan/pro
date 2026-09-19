import Link from "next/link";
import ProductPage from "./product/page";
import UsersPage from "./users/page";
import Category from "./category/Category";


export default function Home() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <h1 className="text-4xl font-bold text-blue-600">
                    Բարև, Next.js! 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Սա իմ առաջին Next.js նախագիծն է:
                </p>
                <Link href={"/contact"}>
                    Contact
                </Link>
                <UsersPage/>
                <Category/>
            </main>
        </div>
    );
}
