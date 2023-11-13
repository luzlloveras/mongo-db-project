/* eslint-disable prettier/prettier */
import {
    Controller,
    Param,
    Get,
    Post,
    Delete,
    Body,
    Put,
  } from '@nestjs/common';
  
  import { ArtistsService } from './artists.service';
  
  import { Artist } from './interfaces/artist';
  
  import { CreateArtistDto } from './dto/create-artist';
  import { UpdateArtistDto } from './dto/update-artist';
  
  @Controller('artists')
  export class ArtistsController {
    constructor(private artistsService: ArtistsService) {}
  
    @Get()
    findAll(): Promise<Artist[]> {
      return this.artistsService.findAll();
    }
  
    @Get(':name')
    findOne(@Param('name') name: string): Promise<Artist> {
      return this.artistsService.findOne(name);
    }
  
    @Post()
    create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
      return this.artistsService.create(createArtistDto);
    }
  
    @Put(':name')
    update(
      @Param('name') name: string,
      @Body() updateArtistDto: UpdateArtistDto,
    ): Promise<Artist> {
      return this.artistsService.update(name, updateArtistDto);
    }
  
    @Delete(':name')
    remove(@Param('name') name: string): Promise<Artist> {
      return this.artistsService.remove(name);
    }
  }
  