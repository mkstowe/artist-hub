export interface ArtistEvent {
  id: number;
  artist: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface NewArtistEvent {
  artist: number;
  title: string;
  description?: string;
  start_date: string;
  end_date?: string;
  location?: string;
}

export interface ArtistEventUpdate {
  title?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
}
