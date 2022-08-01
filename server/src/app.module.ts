import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vlad_admin:92Vlad54@cluster0.66wdm.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
    TrackModule,
    AlbumModule
  ],
})
export class AppModule {}
