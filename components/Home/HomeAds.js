"use client";
import base from "lib/base";
import { useState } from "react";

const HomeAds = ({ ads }) => {
  const [homeAds] = useState(ads[0]);
  return (
    <>
      <section className="section-ads">
        <div className="container">
          <a href={ads.link} target="_blank">
            <img
              className="home_ads"
              src={base.cdnUrl + "/" + homeAds.picture}
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeAds;
