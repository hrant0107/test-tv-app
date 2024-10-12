// Type for the Featured Movie
export interface FeaturedMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
    VideoUrl?:string
  }
  

  
  // Main type for the entire structure
  export interface MovieData {
    Featured: FeaturedMovie;
    TendingNow: FeaturedMovie[];
  }
  