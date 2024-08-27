"use client";

import { useState } from "react";
import CollectionCards from "~~/components/CollectionCards";
import Stats from "~~/components/Stats";

const Home = () => {
  const [activeTab, setActiveTab] = useState("collection");

  return (
    <div>
      <div className="text-3xl font-bold ms-4 mt-4">Home</div>
      <div className="avatar ms-4 mt-4 flex items-center">
        <div className="ring-purple-600 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <span className="text-xl font-bold ms-4">heesh.base.eth</span>
      </div>
      <div className="ms-4 mt-4">
        <div className="text-xl font-bold">My balance</div>
        <div className="flex flex-row">
          <div className="text-2xl font-bold text-purple-600">❖</div>
          <div className="text-2xl font-bold">89,400</div>
        </div>
      </div>
      <div className="mt-4">
        <div role="tablist" className="tabs tabs-bordered flex w-full custom-tabs">
          <a
            role="tab"
            className={`tab flex-1 justify-center ${
              activeTab === "collection" ? "font-bold tab-active custom-tab-active" : ""
            }`}
            onClick={() => setActiveTab("collection")}
          >
            My Collection
          </a>
          <a
            role="tab"
            className={`tab flex-1 justify-center ${
              activeTab === "stats" ? "font-bold tab-active custom-tab-active" : ""
            }`}
            onClick={() => setActiveTab("stats")}
          >
            My Rewards
          </a>
        </div>
        {/* Render content based on activeTab */}
        {activeTab === "collection" && <CollectionCards />}
        {activeTab === "stats" && <Stats />}
      </div>
    </div>
  );
};

export default Home;
