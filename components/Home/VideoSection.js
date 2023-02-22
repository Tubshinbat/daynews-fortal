"use client";
import base from "lib/base";
import htmlToFormattedText from "html-to-formatted-text";

import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import mn from "javascript-time-ago/locale/mn.json";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(en);

const VideoSection = ({ videoNews }) => {
  return (
    <>
      <section className="section video_section">
        <div className="container">
          <div class="section-header white">
            <h3> Видео мэдээ </h3>
          </div>
          <div className="video-home-list news-home-list">
            <div className="row">
              {videoNews &&
                videoNews.map((news) => (
                  <div className="col-lg-3 col-md-6">
                    <div className="column-news-box">
                      <div className="column-news-image big">
                        <a href={"/n/" + news.slug}>
                          <img src={base.cdnUrl + "/450/" + news.pictures[0]} />
                        </a>
                      </div>
                      <div className="column-news-content">
                        <a
                          href={"/n/" + news.slug}
                          className="column-news-title"
                        >
                          {news.name}
                        </a>
                        <div className="newsbox-categories">
                          <a href={"/news/" + news.categories[0].slug}>
                            {news.categories[0].name}
                          </a>
                        </div>
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;