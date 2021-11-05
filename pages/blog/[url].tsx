import { GetServerSideProps } from "next";

const redirect = () => {
    return (
        <div>
            
        </div>
    )
}

export default redirect

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    return {redirect: {permanent: false, destination: `https://notes.lauragao.ca/${context.params.url}`,}};
};