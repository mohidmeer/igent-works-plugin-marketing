import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
    return (
        <div className="">
            <NavBar/>
            {children}
        </div>

    );
}
