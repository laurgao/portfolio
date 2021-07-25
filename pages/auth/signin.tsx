import {GetServerSideProps} from "next";
import {getSession, signOut, useSession} from "next-auth/client";
import {useEffect} from "react";
import Link from "next/link";
import SEO from "../../components/SEO";
import SignInButton from "../../components/SignInButton";

export default function SignIn({notAllowed}: {notAllowed: boolean}) {
    const [session, loading] = useSession();

    useEffect(() => {
        if (session && notAllowed) signOut();
    }, [loading]);

    return (
        <>
            <SEO title="Sign in"/>
            <h1>Sign in</h1>
            {notAllowed && (
                <span>No account found for the given email. <Link href="/"><a>Sign up for the waitlist</a></Link> to get early access</span>
            )}
            <p>If you already have a YourApp account, click below to sign in.</p>
            <SignInButton/>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (session && !session.userId) return {props: {notAllowed: true}};

    if (session && session.userId) {
        return {redirect: {permanent: false, destination: "/app",}};
    } else {
        return {props: {notAllowed: false}};
    }
};