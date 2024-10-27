import { ArtistEvent } from "./ArtistEvent";
import { ArtistImage } from "./ArtistImage";
import { ArtistLink, ArtistLinkUpdate, NewArtistLink } from "./ArtistLink";

export interface Artist {
    id: number;
    user: number;
    name: string;
    bio: string;
    avatar_path: string;
    slug: string;
    active: boolean;
    category: number;
    city: string;
    state: string;
    instagram: string;
    twitter: string;
    facebook: string;
    website: string;
    etsy: string;
    phone: string;
    email: string;
    verified: boolean;
    validation_status: string;
    adult: boolean;
    created_at: string;
    updated_at: string;
}

export interface ArtistProfile {
    id: number;
    user: number;
    name: string;
    bio: string;
    avatar_path: string;
    slug: string;
    active: boolean;
    category: number;
    city: string;
    state: string;
    instagram: string;
    twitter: string;
    facebook: string;
    website: string;
    etsy: string;
    phone: string;
    email: string;
    verified: boolean;
    validation_status: string;
    adult: boolean;
    created_at: string;
    updated_at: string;
    links: ArtistLink[];
    events: ArtistEvent[];
    images: ArtistImage[];
}

export interface ArtistInput {
    user: number;
    name: string;
    bio?: string;
    slug?: string;
    active?: boolean;
    category: number;
    city?: string;
    state?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
    etsy?: string;
    phone?: string;
    email?: string;
    adult?: boolean;
    links: NewArtistLink[]
}

export interface ArtistUpdate {
    id: number;
    name?: string;
    bio?: string;
    slug?: string;
    active?: boolean;
    category?: number;
    city?: string;
    state?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
    etsy?: string;
    phone?: string;
    email?: string;
    adult?: boolean;
    validation_status?: string;
    links: ArtistLinkUpdate[];
}