import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | CROWN PLASTIC PIPES / FITTINGS UAE",
    description:
        "30+ years of UPVC, PPR & HDPE pipe manufacturing in UAE. ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified. Exporting to 52+ countries across the GCC and beyond.",
    alternates: {
        canonical: "/about-us",
    },
    openGraph: {
        title: "About Crown Plastic Pipes | UAE Pipe Manufacturer Since 1995",
        description:
            "ISO-certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings. Serving Dubai, Sharjah, Abu Dhabi & GCC markets for water supply, drainage, and industrial piping.",
        url: "/about-us",
        images: [
            {
                url: "/images/about/factory-hero.jpeg",
                width: 1200,
                height: 800,
                alt: "Crown Plastic Pipes manufacturing facility in Sharjah, UAE",
            },
        ],
    },
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
