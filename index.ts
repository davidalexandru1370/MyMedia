import { YoutubeService } from "./service/youtubeService/youtubeService";

const youtubeService = new YoutubeService();
const url: string =
  "https://www.youtube.com/watch?v=0Ba7tclxSRY&ab_channel=FlorinMitroiOficial";

youtubeService.download(url, { savePath: "." });
