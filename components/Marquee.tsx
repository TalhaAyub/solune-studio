"use client";

export default function Marquee() {
    return (
        <div className="w-full bg-black text-white overflow-hidden whitespace-nowrap py-2 text-sm">
            <div className="marquee flex">
                {[...Array(12)].map((_, i) => (
                    <span key={i} className="mx-8">
                        ★★★ OPEN FOR NEW PROJECTS
                    </span>
                ))}
            </div>
        </div>
    );
}
