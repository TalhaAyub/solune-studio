"use client";

export default function Marquee() {
    return (
        <div className="w-full bg-black text-white overflow-hidden whitespace-nowrap py-3 md:py-3.5 text-xs md:text-sm tracking-widest font-medium">
            <div className="marquee flex items-center">
                {[...Array(12)].map((_, i) => (
                    <span key={i} className="mx-8">
                        ★★★ OPEN FOR NEW PROJECTS
                    </span>
                ))}
            </div>
        </div>
    );
}
