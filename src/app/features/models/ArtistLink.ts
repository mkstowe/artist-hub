export interface ArtistLink {
  id: number;
  artist: number;
  url: string;
  title: string;
  index: number;
  created_at: string;
  updated_at: string;
}

export interface NewArtistLink {
  url: string;
  title?: string;
  index: number;
}

export interface ArtistLinkUpdate {
  url?: string;
  title?: string;
  index?: number;
}
