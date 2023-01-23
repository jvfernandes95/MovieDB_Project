export interface movie {
  movie: movie[]
  page:number,
  results:[movie],
  adult: boolean
  backdrop_path :string,
  belongs_to_collection: null,
  budget: number,
  genres:[
    name: string,
    id: number,
]
  homepage:string,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  video:true,
  title:string,
  id: any,
  logo_path:string,
  origin_country:string,
  release_date:string,
  runtime: String


}

export interface pagination {
  page: number
  results:[movie]
}

export interface details{
  id: any,
  results:[movie]
}

export interface popular {
  page: number
  results:[movie]
}

export interface Pesquisa {
  title: string,
  results:[movie],
  page:number
}

export interface genre{
  genres:[
    id: number,
    name:string
  ]
  results:[movie]
}

export interface Image{
  id:number,
  backdrops:[
    aspect_ratio:number,
    file_path:string,
    height: number,
    iso_639_1:string,
    vote_average:number,
    vote_count:number,
    width:number
  ],
  posters:[
    aspect_ratio:number,
    file_path:string,
    height:number,
    iso_639_1:string,
    vote_average:number,
    vote_count:number,
    width:number
  ]




}
