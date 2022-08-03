import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://vlad_admin:92Vlad54@cluster0.66wdm.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
    TrackModule,
    AlbumModule,
    FileModule
  ],
})
export class AppModule {}
