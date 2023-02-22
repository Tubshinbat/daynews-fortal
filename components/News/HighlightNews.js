"use client";
import htmlToFormattedText from "html-to-formatted-text";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import en from "javascript-time-ago/locale/en.json";
import mn from "javascript-time-ago/locale/mn.json";
import base from "lib/base";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(en);

const HighlightNews = ({ news }) => {
  return (
    <>
      <div className="highlight-big">
        <div className="highlight-img">
          <a href={"/n/" + news.categories[0].slug}>
            <img src={base.cdnUrl + "/450/" + news.pictures[0]} />
          </a>
        </div>
        <div className="highlight-content">
          <div className="newsbox-categories">
            <a href={"/news/" + news.categories[0].slug}>
              {news.categories[0].name}
            </a>
          </div>
          <a href={"/n/" + news.slug} className="highlight-title-big">
            <h4> {news.name}</h4>
          </a>
          <p className="highlight-desc">
            {htmlToFormattedText(news.details).length > 200
              ? htmlToFormattedText(news.details).substr(0, 200) + "..."
              : htmlToFormattedText(news.details)}
          </p>
          <div className="news_highlight_dt">
            <li>
              <FontAwesomeIcon icon={faBolt} /> {news.views}
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <ReactTimeAgo date={news.createAt} locale="mn" />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
export default HighlightNews;
