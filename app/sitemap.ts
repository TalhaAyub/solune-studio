import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.solunestudio.com",
            lastModified: new Date(),
            priority: 1,
        },
    ];
}