/* eslint-disable prettier/prettier */
// Nest
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modules
import { ArtistsModule } from './artists/artists.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/luzlloveras'),
  ArtistsModule,
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
