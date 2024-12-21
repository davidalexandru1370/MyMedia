"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const youtubeService_1 = require("./service/youtubeService/youtubeService");
const youtubeService = new youtubeService_1.YoutubeService();
const url = "https://www.youtube.com/watch?v=0Ba7tclxSRY&ab_channel=FlorinMitroiOficial";
youtubeService.download(url, { savePath: "." });
