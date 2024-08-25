export interface ImovieAPI{
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    original_title?:string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface ApiResponse {
    page: number;
    results:any;
    total_pages: number;
    total_results: number;
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

 export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any; // You can define a specific interface for collection data if needed
    budget: number;
    genres: { id: number; name: string }[]; // Array of genre objects
    homepage: string | null; // Homepage URL or null
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: { id: number; name: string }[]; // Array of production company objects
    production_countries: { iso_3166_1: string; name: string }[]; // Array of production country objects
    release_date: string;
    revenue: number;
    runtime: number | null; // Runtime in minutes or null
    spoken_languages: { iso_639_1: string; name: string }[]; // Array of spoken language objects
    status: string;
    tagline: string | null; // Tagline or null
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  export  interface IMovieVideoClip {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }

