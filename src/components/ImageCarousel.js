import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import { dataRenderer } from "../Util/helpers";

const ImageCarousel = () => {
  const [sliderContent, setSliderContent] = useState([]);
  const data = [
    {
      image:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dQ4j?ver=d466",
      caption: "Microsoft 365",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/5b/5c/5b5cb304-3391-4765-a51c-e6322e800d84.jpg?n=BestSellingGames-Tile-3840x2160-W11-STORE-01.jpg",
      caption: "Best Selling Games",
    },
    {
        image:
          "https://canvasstorageprod.blob.core.windows.net/assets/ff/ee/ffeecab1-d8af-438a-8526-e70be9ce27c1.jpg?n=BestEntertainmentApps-WW-Tile-3840x2160-W11-02.jpg",
        caption: "Watch Movies And Stream Music",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/a8/f0/a8f09dd8-d7b7-4f33-82a5-e7b152996980.png?n=February_2023_d2_s15_Default.png",
      caption: "Destiny 2: The Witch Queen Deluxe Edition (PC)",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/e9/79/e979f413-41d7-4cde-88b9-b59bd3ba3873.jpg?n=CapCutKeyTT-3840x2160-W11-01.jpg",
      caption: "CapCut",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/f7/a0/f7a005d2-05dc-470e-8ff6-37c7170e8f26.jpg?n=Promo%2012.6-12.12_ForzaHorizon5_Launch_Review-04_16x9.jpg",
      caption: "Forza Horizon",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/e9/b1/e9b12e04-8777-4527-9551-18f40164ab6c.jpg?n=AnimeMonthSaleFebMMTVWk3-US-CA-Tile-3840x2160-W11-STORE-01.jpg",
      caption: "Anime Month: up to 80% off",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/b8/01/b8010676-d86b-4c5e-8c32-04fceea70015.jpg?n=Mixed-FY23BCC-Tile-3840x2160-W11-STORE-01.jpg",
      caption: "Recognizing Black Communities in Entatainment",
    },
    {
      image:
        "https://canvasstorageprod.blob.core.windows.net/assets/cf/61/cf613a49-4a7c-4d98-a41b-0fd8da089f91.jpg?n=FreeToStreamFreeToPlay-Tile-3840x2160-W11-STORE-01.jpg",
      caption: "Free to stream, Free to play",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "left",
  };

  useEffect(() => {
    async function fetchData() {
      let renderedData = await dataRenderer(data);
      setSliderContent(renderedData);
      console.log("Data: ", data);
    }
    fetchData();
    console.log("Logging...........................");
  }, []);
  useEffect(() => {
    const thumbnailStyle = document.getElementById("thumbnail-div");
    const thumbnail = document.getElementsByClassName("thumbnail");
    //   console.log(thumbnail)
    console.log("trying to set style........................");
    if (thumbnailStyle?.style) {
      console.log("setting styles...............................");
      thumbnailStyle.style.cssText = `
        position: relative;
        max-wdth: 100%;
        margin-top: -80px;
        justify-content: center;
        align-items: initial;
        z-index: 5;
        `;
      for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].style.borderRadius = "20px";
        thumbnail[i].alt = "a caption"
      }
    }
  }, [sliderContent.length]);
  return (
    <div style={{ textAlign: "center" }}>
      {sliderContent.length && (
        <Carousel
          data={sliderContent}
          time={2000}
          width="100%"
          height="700px"
          captionStyle={captionStyle}
          radius="10px 0 0 0"
          // slideNumber={true}
          // slideNumberStyle={slideNumberStyle}
          captionPosition="center"
          automatic={true}
          // dots={true}
          // pauseIconColor="white"
          // pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="170px"
          style={{
            maxWidth: "100%",
            // maxHeight: "500px",
            marginBottom: "20px",
          }}
        />
      )}
    </div>
  );
};

export default ImageCarousel;
