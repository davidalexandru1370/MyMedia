import { Downloader } from "ytdl-mp3";

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
    const downloader = new Downloader({
      outputDir: options.savePath,
    });

    await downloader.downloadSong(url);
  }
}
