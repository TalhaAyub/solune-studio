"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
    children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <>{children}</>;
}