import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

export default function SEO({
    title = "Laura Gao: Developer and content creator",
    description = "Quantum software intern @ Zapata and aspiring content creator :p",
    imgUrl = null,
    authorUsername = null,
    publishedDate = null,
    noindex = false,
}: { title?: string, description?: string, imgUrl?: string, authorUsername?: string, publishedDate?: string, noindex?: boolean }) {
    const router = useRouter();
    const fullTitle = title + (router.asPath === "/" ? "" : "| Laura Gao: Developer and content creator");

    let openGraph = {
        title: fullTitle,
        description: description,
        url: "https://lauragao.ca" + router.asPath,
        images: imgUrl ? [
            { url: imgUrl }
        ] : [
            { url: "/eye-original.png" }
        ],
    };

    let twitter = {
        site: "@laurgao",
        cardType: imgUrl ? "summary_large_image" : "summary",
    };

    return (
        <NextSeo
            title={fullTitle}
            description={description}
            openGraph={openGraph}
            twitter={twitter}
            noindex={noindex}
        />
    );
}