import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { TrackSchema } from "./schemas/track.schema";
import { CommentSchema } from "./schemas/comment.schema";
import { FileService } from "../file/file.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Track', schema: TrackSchema},
      {name: 'Comment', schema: CommentSchema},
    ])
  ],
  providers: [TrackService, FileService],
  controllers: [TrackController],
})
export class TrackModule {}
