/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist';
import { UpdateArtistDto } from './dto/update-artist';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().lean();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistModel.findOne({ _id: id }).lean();
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  async update(
    id: string,
    updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    return this.artistModel.updateOne({ _id: id }, updateArtistDto).lean();
  }

  async remove(id: string): Promise<Artist> {
    return this.artistModel.deleteOne({ _id: id }).lean();
  }
}