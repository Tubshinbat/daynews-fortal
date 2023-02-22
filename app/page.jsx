import Header from "components/Header";
import Topbar from "components/Topbar";
import NewsTopSeaction from "components/Home/NewsTopSeaction";
import base from "lib/base";
import { getMenus } from "lib/menus";
import { getRate } from "lib/rate";
import { getWeather } from "lib/weather";
import { getWebInfo } from "lib/webinfo";
import Script from "next/script";
import Loading from "./loading";
import { getNews } from "lib/news";
import HomeAds from "components/Home/HomeAds";
import { getAdsHome } from "lib/ads";
import TopCategories from "components/Home/TopCategories";
import VideoSection from "components/Home/VideoSection";
import Footer from "components/Footer";

export default async function Page() {
  
  const { menus } = await getMenus();
  const { homeAds } = await getAdsHome();
  const { news: topNews } = await getNews(`star=true&limit=4&status=true`);
  const { news: newNews } = await getNews(`limit=15&status=true`);
    const { news: newNews2 } = await getNews(`limit=7&status=true`);
  const { news: topCat1 } = await getNews(
    `limit=4&status=true&categories=${menus[0]._id}`
  );
  const { news: topCat2 } = await getNews(
    `limit=4&status=true&categories=${menus[1]._id}`
  );
  const { news: topCat3 } = await getNews(
    `limit=4&status=true&categories=${menus[2]._id}`
  );

      const { news: videoNews } = await getNews(
    `limit=4&status=true&type=video`
  );

  return (
    <div>
      <main>
      
        <NewsTopSeaction topNews={topNews} newNews={newNews} newNews2={newNews2} />
        <HomeAds ads={homeAds} />
        <TopCategories  menus={menus} topCat1={topCat1} topCat2={topCat2} topCat3={topCat3}/>
        <VideoSection videoNews={videoNews} />
        
      </main>
      <Script src="/js/scripts.js" crossorigin="anonymous" />
    </div>
  );
}
