import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){

    }

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") mid:number): Movie{
        console.log(typeof mid);
        return this.moviesService.getOne(mid);
    }

    @Post()
    create(@Body() movied:CreateMovieDto){
        return this.moviesService.create(movied);
        
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') mvId:number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.update(mvId,updateData);
    };

    }

 


