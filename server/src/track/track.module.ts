import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { TrackSchema } from "./schemas/track.schema";
import { CommentSchema } from "./schemas/comment.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Track', schema: TrackSchema},
      {name: 'Comment', schema: CommentSchema},
    ])
  ],
  providers: [TrackService],
  controllers: [TrackController],
})
export class TrackModule {}
