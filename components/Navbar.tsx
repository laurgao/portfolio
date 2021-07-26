import Container from "./Container";
import Link from "next/link";

export default function Navbar() {

    return (
        <div className="w-full sticky top-0">
            <Container className="flex items-center my-4" width="full">
                <Link href="/">Laura Gao</Link>
            </Container>
        </div>
    );
}