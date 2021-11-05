import { GetServerSideProps } from "next";

const redirect = () => {
    return (
        <div>
            
        </div>
    )
}

export default redirect

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.params.redirect === "2021") return {redirect: {permanent: false, destination: "https://old.lauragao.ca/2021",}};
    if (context.params.redirect === "feedback") return {redirect: {permanent: false, destination: "https://me.lauragao.ca/feedback",}};
    return {redirect: {permanent: false, destination: "/",}};
};