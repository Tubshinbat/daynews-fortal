"use client";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import base from "lib/base";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import htmlToFormattedText from "html-to-formatted-text";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import mn from "javascript-time-ago/locale/mn.json";
import { getNews, getSlugCategory } from "lib/news";
import Loading from "app/loading";
import NotFound from "components/NotFound";
TimeAgo.addDefaultLocale(mn);
TimeAgo.addLocale(en);

const { htmlToText } = require("html-to-text");

const NewsList = ({
  news,
  pagination: initPagination,
  params,
  categoryslug,
}) => {
  // Params

  const [data, setData] = useState(news);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(initPagination);

  const handlePageChange = async (pageNumber) => {
    const { category: resultCategory } = await getSlugCategory(categoryslug);

    const { news, pagination } = await getNews(
      `status=true&categories=${
        resultCategory && resultCategory._id
      }&page=${pageNumber}`
    );

    if (news) {
      setPagination(pagination);
      setData((bn) => [...bn, ...news]);
    }
  };

  return (
    <>
      {loading === true && <Loading />}

      <div className="section_news_title">
        <h4> Сүүлд нэмэгдсэн </h4>
      </div>

      <div className="row news_col">
        {data && data.length > 0 ? (
          data.map((el) => (
            <div className="col-md-12">
              <div className="news__column_item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="news__column_image column-news-image">
                      <a href={`/n/${el._id}`} scroll={false}>
                        {el.pictures && el.pictures[0] ? (
                          <img src={`${base.cdnUrl}/450/${el.pictures[0]}`} />
                        ) : (
                          <img src={`/images/img_notfound.jpg`} />
                        )}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="news__column_content">
                      <a href={`/n/${el._id}`} scroll={false}>
                        <h4>
                          {el.name.length > 90
                            ? el.name.substr(0, 90) + "..."
                            : el.name}
                        </h4>
                      </a>

                      <div className="news_highlight_dt">
                        <li>
                          <FontAwesomeIcon icon={faBolt} /> {el.views}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faClock} />
                          <ReactTimeAgo date={el.createAt} locale="mn" />
                        </li>
                      </div>

                      <p>
                        {htmlToFormattedText(el.details).length > 170
                          ? htmlToFormattedText(el.details).substr(0, 170) +
                            "..."
                          : htmlToFormattedText(el.details)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
      {pagination &&
        pagination.pageCount > 1 &&
        pagination.page != pagination.pageCount && (
          <button
            className="more-btn"
            onClick={() => {
              handlePageChange(pagination.nextPage);
            }}
          >
            {" "}
            Цааш үзэх{" "}
          </button>
        )}
    </>
  );
};

export default NewsList;
