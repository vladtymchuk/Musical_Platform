import { Controller, Get } from "@nestjs/common";
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {
  }

  create() {

  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  getOne() {

  }

  delete() {

  }
}
