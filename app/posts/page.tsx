import Navbar from "@/app/navbar";
export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar/>
            <div>
                <h1 className="text-center text-4xl font-bold">Posts</h1>
            </div>
        </main>
    )
}