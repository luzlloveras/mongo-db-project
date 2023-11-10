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
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Artist> {
      return this.artistsService.findOne(id);
    }
  
    @Post()
    create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
      return this.artistsService.create(createArtistDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateArtistDto: UpdateArtistDto,
    ): Promise<Artist> {
      return this.artistsService.update(id, updateArtistDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<Artist> {
      return this.artistsService.remove(id);
    }
  }
  