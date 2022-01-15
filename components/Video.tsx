import React from "react";
import { FunctionComponent } from "react";
import { VideoJsPlayer } from "video.js";
import VideoPlayer from "./VideoPlayer";

interface VideoProps {}

const Video: FunctionComponent<VideoProps> = () => {
  const playerRef = React.useRef<VideoJsPlayer | null>(null);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://d15agpvu9305un.cloudfront.net/340a61ae-4fa4-411c-bf5b-cbfad564fbb2/d5ce48d5-229e-4061-84e9-31e23a3693b9.mp4?Expires=2237754595&Key-Pair-Id=KNS0W22DZI2LH&Signature=YotkUSG7rr-cy4lqwqNwNsJ7HueYFyhTwxajiQ8FEc1pkPlADcJAdCbUFTbiu-Eq53nFBff3JedI5Hlc~A6rvtvI-7528X51kZQba5e1mWHCerjrDtEeJ3nVwzWSXxeGGBAD1-EhoCDdJYKQeU0Ly0V3~ItQKRqdNSr-JP9L-Wma5gLXYMjLcERwhyesXz9b1chsuuFYgONiKiYO9d8Z4pMK5PLDWpJGUt~3tI9K5B-P90gC50vuTX55D2mky3YbQYo2PJSugIgG4ZhlWByrsP37WFNUkVECJ77DDVISFPEiDGs7UDEbf~HsF4wesVORdANm81qmZTxf91~mUfnYvg__",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;

    // you can handle player events here
  };
  return (
    <div className="mx-5 overflow-hidden border border-gray-200 rounded-lg shadow md:mx-6 lg:mx-8">
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default Video;
