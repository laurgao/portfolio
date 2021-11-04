import axios from "axios";
import { useState } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import Button from "../components/Button";
import HandwrittenButton from "../components/HandwrittenButton";
import SEO from "../components/SEO";


export default function Home() {
    const [error, setError] = useState<any>(null);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [submitted, setSubmitted] = useState<{message: string, id: string, email: string}>(null);
    function onWaitlistSubmit() {
        if (!(email.includes(".") && email.includes("@"))) {
            setInvalidEmail(true);
            return
        } else setInvalidEmail(false)
        axios.post("/api/newsletter", {
            email: email,
        }).then(res => {
            setSubmitted(res.data);
        }).catch(e => {
            console.log(e);
            setError(e);
        });
    }
    const iconSize = 30;
    return (
    <div className="bg-black overflow-hidden text-white w-screen h-screen inset-0 absolute">
        <SEO />
        <div className="absolute w-full mx-auto top-10 md:hidden z-40 opacity-50">
            <div className="flex gap-10 justify-center mb-10">
                <a className="transition hover:primary" href="https://www.youtube.com/channel/UCstSEHcCLMGdac9wkbMeAIw" target="_blank" rel="noreferrer"><FaYoutube size={iconSize}/></a>
                <a className="transition hover:primary" href="https://github.com/laurgao" target="_blank" rel="noreferrer"><FaGithub size={iconSize}/></a>
                <a className="transition hover:primary" href="https://postulate.us/@laura" target="_blank" rel="noreferrer"><img src="/postulate-white.png" alt="Postulate logo" width={iconSize}/></a>
                <a className="transition hover:primary text-xl" href="https://tks.life/profile/laura.gao#portfolio" target="_blank" rel="noreferrer">Portfolio</a>
            </div>
        </div>
        <video 
            autoPlay 
            loop 
            muted
            className="fixed md:absolute opacity-40 right-0 bottom-0 m-0 " 
            style={{minWidth: "100vh", minHeight: "100vh", maxWidth: "none", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
        >
            <source src="/hero.mp4" type="video/mp4"/>
            Your browser does not support the HTML video tag.
        </video>
        <div className="flex items-center w-screen h-screen relative z-30" >
            <div className="max-w-4-xl text-center mx-auto w-full ">
                <p 
                    className="text-8xl opacity-70 hover:opacity-90 transition px-10 md:mb-6 mb-10" 
                    style={{transform: "rotate(-2.4deg)"}}
                >Laura Gao</p>

                <div className="max-w-sm mx-auto mt-6">
                    <div className="mx-4 ">

                    <HandwrittenButton href="https://mailchi.mp/5836b3e01570/3-hackathons-in-3-weeks">Artist</HandwrittenButton>
                    <HandwrittenButton href="https://postulate.us/@laura/p/2021-05-03-You-Don't-Want-to-Know-wneKCviGChNBxEtE6r4kkK">Writer</HandwrittenButton>
                    <HandwrittenButton href="https://scratchie.vercel.app/">Web dev</HandwrittenButton>
                    <HandwrittenButton href="https://www.youtube.com/watch?v=lokttAz2Ejo">Video creator</HandwrittenButton>
                    </div>
                </div>
                <p 
                    className="text-xl opacity-40 hover:opacity-50 transition mb-6 overflow-break" 
                    style={{transform: "rotate(-4deg) translate(70px, 30px)"}}
                >Current pursuit: I'm spending my summer as a <br/>Quantum software intern @ Zapata Computing</p>
            </div>
        </div>

        {/* Stuff at the bottom */}
        <div className="opacity-50 z-50 absolute bottom-4 flex md:flex-row flex-col w-full">
            <div className="md:mr-auto md:text-left md:ml-8 md:max-w-sm md:absolute md:bottom-0 hidden md:block">
                <div className="flex gap-10 justify-center mb-10">
                    <a className="transition hover:primary" href="https://www.youtube.com/channel/UCstSEHcCLMGdac9wkbMeAIw" target="_blank" rel="noreferrer"><FaYoutube size={iconSize}/></a>
                    <a className="transition hover:primary" href="https://github.com/laurgao" target="_blank" rel="noreferrer"><FaGithub size={iconSize}/></a>
                    <a className="transition hover:primary" href="https://postulate.us/@laura" target="_blank" rel="noreferrer"><img src="/postulate-white.png" alt="Postulate logo" width={iconSize}/></a>
                    <a className="transition hover:primary text-xl" href="https://tks.life/profile/laura.gao#portfolio" target="_blank" rel="noreferrer">Portfolio</a>
                </div>
            </div>
            <div className="md:mr-8 md:ml-auto mx-auto md:text-right md:max-w-sm text-lg">
            <h2 className="flex-shrink-0 mb-4 md:mb-6"><b>Sign up for my monthly email list.</b><br/><p className="">Or, you can <a className="underline transition hover:primary" href="https://the-chive.vercel.app/news#newsletter">read it first.</a></p></h2>
                {submitted ? (
                    <div className="ml-auto">
                        <p>
                            You have successfully subscribed {submitted.email}. Thank you for signing up 😁<br/>
                            Check out past issues <a className="underline transition hover:primary" href="https://the-chive.vercel.app/news#newsletter">here</a>.
                        </p>
                    </div>
                ) : (
                    <div className="ml-auto ">
                        <div className="flex">
                            <input
                                type="text"
                                className="p-2 rounded-md text-black"
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Button className="ml-4" onClick={onWaitlistSubmit}>Sign up</Button>
                        </div>
                        
                        {error && <div className="mt-2">An unexpected error occured. <a className="underline" href="https://twitter.com/laurgao">Contact Laura</a> or please try again later.</div>}
                        {invalidEmail && <div className="mt-2">Please enter a valid email.</div>}
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}