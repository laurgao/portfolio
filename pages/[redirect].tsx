import { GetServerSideProps } from "next";

const redirect = () => {
    return (
        <div>
            
        </div>
    )
}

export default redirect

export const getServerSideProps: GetServerSideProps = async () => {
    return {redirect: {permanent: false, destination: "/",}};
};