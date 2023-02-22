"use client";
import { faBolt, faClock, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import base from "lib/base";
import Link from "next/link";
import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import mn from "javascript-time-ago/locale/mn.json";
import { getAdsSide } from "lib/ads";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(en);

export default ({ categories, newNews, fireNews }) => {
  const [selectTab, setSelectTab] = useState("new");
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const fetcherAds = async () => {
      const { ads } = await getAdsSide();
      setAds(ads);
    };

    fetcherAds();
  }, []);

  return (
    <>
      <div className="sides ">
        {ads && ads.length > 0 && (
          <div className="side__item ads">
            <a href={ads[0].link} target="_blank">
              <img
                src={`${base.cdnUrl}/${ads[0].picture}`}
                className="side__banner"
              />
            </a>
          </div>
        )}
        <div className="side__item">
          <div className="side-news-home-mobile">
            <div class="section-header">
              <h3> Шинэ мэдээ </h3>
            </div>
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
                      <img src={base.cdnUrl + "/150x150/" + el.pictures[0]} />
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
                      <img src={base.cdnUrl + "/150x150/" + el.pictures[0]} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
