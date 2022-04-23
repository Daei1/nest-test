import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll",()=>{
    it("should return an arrray",()=>{
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne",()=>{
    it("should return an movie", ()=>{
    service.create({
      title:"test movie",
      year:2000,
      genres: ['test'],
      
    });
     
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      
    })
  });
  it("should throw 404 error",()=>{
    try{service.getOne(999);
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toEqual('Movie with Id:999 not found')
    }
  });

  describe("deleteOne",()=>{
    it("deletes a moive", ()=>{
      service.create({
        title:"test movie",
        genres: ['test'],
        year:2000,
      });
    const Bef= service.getAll().length;
    service.deleteOne(1);
    const aft = service.getAll().length;
    expect(aft).toBeLessThan(Bef);

    });
    
    it('should return a 404',()=>{
      try{
        service.deleteOne(999);

      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    
    });
  });

  describe("create",()=>{
    it("should create a movie",()=>
    {
      const beforecCreation = service.getAll().length
      service.create({
        title:"test movie",
        genres: ['test'],
        year:2000,
      });
      const afterCreation = service.getAll().length
      expect(afterCreation).toBeGreaterThan(beforecCreation);

    })
  })


  describe("update", ()=>{
    it("should",()=>{
      
      service.create({
        title:"test movie",
        genres: ['test'],
        year:2000,
      });
      service.update(1,{title:"Updated test"});
      const movie = service.getOne(1);
      expect(movie.title).toEqual("Updated test");
    });

    it("should return a 404",()=>{
      try{
        service.update(999,{});

      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

  });



});
