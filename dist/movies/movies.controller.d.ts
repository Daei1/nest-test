import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    getOne(mid: number): Movie;
    create(movied: CreateMovieDto): void;
    remove(movieId: number): void;
    patch(mvId: number, updateData: UpdateMovieDto): void;
}
