/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ArtistDocument = HydratedDocument<Artist>;

//decorador que identifica a la clase como un schema
@Schema()
export class Artist {
  //decorador que define una propiedad de un documento
  @Prop({ type: String, required: true })
  //nombre_propiedad: tipo de dato de la propiedad
  name: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: [String], required: true })
  discipline: string[];

  @Prop({ type: Number, required: true })
  worksNumber: number;

  @Prop({ type: String, required: true })
  webSite: string;

}

export const ArtistSchema = SchemaFactory.createForClass(Artist);