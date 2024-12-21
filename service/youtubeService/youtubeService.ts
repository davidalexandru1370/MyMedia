import ytdl from "@distube/ytdl-core";

interface VideoSettings {
  quality: number;
}

interface YoutubeSettings {
  savePath: string;
  videoSettings?: undefined | VideoSettings;
}

interface IYoutubeService {
  download: (url: string, options: YoutubeSettings) => Promise<void>;
}

export class YoutubeService implements IYoutubeService {
  async download(url: string, options: YoutubeSettings): Promise<void> {
    ytdl(url).pipe(require("fs").createWriteStream("video.mp4"));
  }
}
