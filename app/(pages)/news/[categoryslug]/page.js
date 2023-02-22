"use client";
import HighlightNews from "components/News/HighlightNews";
import NewsDetails from "components/News/NewsDetails";
import NewsList from "components/News/NewsList";
import NewsSide from "components/News/NewsSide";
import NotFound from "components/NotFound";
import { getAdsSide } from "lib/ads";
import base from "lib/base";
import { getCategories, getContent, getNews, getSlugCategory } from "lib/news";

import { use, useEffect, useState } from "react";

export default function Page({ params: { categoryslug } }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const [newNews, setNewNews] = useState([]);
  const [pagination, setPagination] = useState();
  const [topNews, setTopNews] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetcherCategory = async (slug) => {
      setLoading(true);
      const { category: resultCategory } = await getSlugCategory(slug);
      return resultCategory;
    };

    fetcherCategory(categoryslug)
      .then(async (res) => {
        if (res) {
          setCategory(res);
          setTitle(res.name);
          const { news: topNews } = await getNews(
            `status=true&star=true&categories=${res._id}`
          );
          const { news, pagination } = await getNews(
            `status=true&categories=${res._id}`
          );
          setPagination(pagination);
          setNews(news);
          const { news: newNews } = await getNews(`status=true&limit=15`);
          setNewNews(newNews);
          setTopNews(topNews[0]);
          setLoading(false);
        }
      })
      .catch(() => {
        setTitle("Мэдээ мэдээлэл");
      });
  }, [categoryslug]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="page-main">
            <h3 className="page-header"> {title} </h3>
            <div className="row">
              <div className="col-lg-9">
                {topNews && <HighlightNews news={topNews} />}
                {news && news.length > 0 ? (
                  <NewsList
                    news={news}
                    pagination={pagination}
                    categoryslug={categoryslug}
                  />
                ) : (
                  <NotFound />
                )}
              </div>
              <div className="col-lg-3">
                <NewsSide newNews={newNews} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// export async function generateStaticParams() {
//   const { news } = await getNews(`status=true&limit=5`);

//   return news.map((post) => ({
//     newsid: post._id,
//   }));
// }
