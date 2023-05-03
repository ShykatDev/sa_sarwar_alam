import React, { useState, useEffect } from "react";
import { client } from "../client";
import { ShowcaseNews, SingleV } from "../Components";
import { FcNews } from "react-icons/fc";

const AllNews = ({ setSingleNews }) => {
  const [electNews, setElectNews] = useState([]);
  const [printNews, setPrintNews] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "videonews"]`).then((res) => setElectNews(res));
  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "printnews"]`).then((res) => setPrintNews(res));
  }, []);

  return (
    <div>
      <div className="container allNews" id="print">
        <h1>
          All News <span>.</span>
        </h1>
        <div className="all--news">
          <div className="print--section">
            <h2>
              Print News Media <FcNews className="littleIO" />
            </h2>
            <div className="print--news">
              {printNews.map((news) => (
                <ShowcaseNews item={news} setSingleNews={setSingleNews} />
              ))}
            </div>
          </div>
          <div className="electronic--section" id="electronic">
            <h2>
              Video Media <FcNews className="littleIO" />
            </h2>
            <div className="print--news">
              {electNews.map((news) => (
                <SingleV item={news} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
