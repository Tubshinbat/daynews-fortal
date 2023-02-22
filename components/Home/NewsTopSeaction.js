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
import { useEffect, useState } from "react";
import HighlightNews from "components/News/HighlightNews";

const NewsTopSeaction = ({ topNews: tNews, newNews, newNews2 }) => {
  const [fristNews] = useState(tNews[0]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <HighlightNews news={fristNews} />

              <div className="row">
                {tNews &&
                  tNews.map((news, index) => {
                    if (index != 0)
                      return (
                        <div className="col-lg-4 col-md-4">
                          <div className="column-news-box">
                            <div className="column-news-image">
                              <a href={"/n/" + news.slug}>
                                <img
                                  src={base.cdnUrl + "/450/" + news.pictures[0]}
                                />
                              </a>
                            </div>
                            <div className="column-news-content">
                              <a
                                href={"/n/" + news.slug}
                                className="column-news-title"
                              >
                                {news.name}
                              </a>
                            </div>
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
                                <ReactTimeAgo
                                  date={news.createAt}
                                  locale="mn"
                                />
                              </li>
                            </div>
                          </div>
                        </div>
                      );
                  })}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="side-news-home-mobile">
                <div class="section-header">
                  <h3> Шинэ мэдээ </h3>
                </div>
                {newNews2 &&
                  newNews2.map((el) => (
                    <div className="side-news">
                      <div className="side-news-content">
                        <a className="side-news-link" href={"/n/" + el.slug}>
                          {el.name}
                        </a>
                        <div className="newsbox-categories">
                          <a href={"/news/" + el.categories[0].slug}>
                            {el.categories[0].name}
                          </a>
                        </div>
                        <div className="news_highlight_dt">
                          <li>
                            <FontAwesomeIcon icon={faBolt} /> {el.views}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faClock} />
                            <ReactTimeAgo date={el.createAt} locale="mn" />
                          </li>
                        </div>
                      </div>
                      <div className="side-news-img">
                        <a href={"/n/" + el.slug}>
                          <img
                            src={base.cdnUrl + "/150x150/" + el.pictures[0]}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="side-news-box">
                {newNews &&
                  newNews.map((el) => (
                    <div className="side-news">
                      <div className="side-news-content">
                        <a className="side-news-link" href={"/n/" + el.slug}>
                          {el.name}
                        </a>
                        <div className="newsbox-categories">
                          <a href={"/news/" + el.categories[0].slug}>
                            {el.categories[0].name}
                          </a>
                        </div>
                        <div className="news_highlight_dt">
                          <li>
                            <FontAwesomeIcon icon={faBolt} /> {el.views}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faClock} />
                            <ReactTimeAgo date={el.createAt} locale="mn" />
                          </li>
                        </div>
                      </div>
                      <div className="side-news-img">
                        <a href={"/n/" + el.slug}>
                          <img
                            src={base.cdnUrl + "/150x150/" + el.pictures[0]}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsTopSeaction;
