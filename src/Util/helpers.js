export const dataRenderer = async (data) => {
  const renderedData = [];
  for (let content of data) {
    let caption = `
    <div style="display: flex; flex-direction: column; padding-left: 40px; margin-top: -100px;"}>
        <span style="font-size: 24px; font-weight: normal;">Free</span>
        <span style="font-size: 48px; font-weight: bold;">${content?.caption}</span>
        <span style="font-size: 24px; font-weight: normal;">Video Editor - Spark Your Creativity</span>
        <button
            style="
                max-width: fit-content;
                font-weight: normal;
                font-size: 24px;
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 5px;
                background-color: rgba(255, 255, 255, 0.4) ;
                border-radius: 5px;
                // opacity: 0.3;
                flex-basis: 0;
                margin-top: 20px;"
                
        >See details</button>
    </div>
    `;
    renderedData.push({ image: content?.image, caption: caption });
  }
  console.log("RENDERED_DATA: ", renderedData);
  return renderedData;
};
