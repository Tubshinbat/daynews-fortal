"use client";
import base from "lib/base";

import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import mn from "javascript-time-ago/locale/mn.json";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(en);

const TopCategories = ({ topCat1, topCat2, topCat3, menus }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="section-header">
                <a href={`/news/${menus[0].slug}`}>
                  <h3> {menus[0].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                <div className="row">
                  {topCat1 &&
                    topCat1.map((news) => (
                      <div className="col-lg-3 col-md-6">
                        <div className="column-news-box">
                          <div className="column-news-image big">
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
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div class="section-header">
                <a href={`/news/${menus[1].slug}`}>
                  <h3> {menus[1].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                <div className="row">
                  {topCat2 &&
                    topCat2.map((news) => (
                      <div className="col-lg-3 col-md-6">
                        <div className="column-news-box">
                          <div className="column-news-image big">
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
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div class="section-header">
                <a href={`/news/${menus[2].slug}`}>
                  <h3> {menus[2].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                <div className="row">
                  {topCat3 &&
                    topCat3.map((news) => (
                      <div className="col-lg-3 col-md-6">
                        <div className="column-news-box">
                          <div className="column-news-image big">
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
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
