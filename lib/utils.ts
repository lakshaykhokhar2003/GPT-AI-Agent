import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const features = [
    {title: "Fast", description: "Real-time streamed responses"},
    {title: "Modern", description: "Next.js 15, Tailwind CSS, Convex, Clerk"},
    {title: "Smart", description: "Powered by Your Favourite LLM's"},
]
