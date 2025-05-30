// src/app/page.js
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  // Mint date: June 5, 2025, 9PM WIB (UTC+7) => UTC: 2025-06-05T14:00:00Z
  const targetDate = new Date("2025-06-05T14:00:00Z");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft("Minting has started!");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-sky-200 min-h-screen flex flex-col items-center justify-start px-4 py-12">
      {/* Hero Section */}
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <img
          src="/wraith.png"
          alt="Wraith The Queen"
          className="w-40 h-40 mx-auto mb-6 rounded-2xl border-4 border-white shadow-xl"
        />
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4">WraithTheQueen</h1>
        <p className="text-lg text-gray-700 mb-4">
          A mystical soul queen rising from the deep, pixelated and powerful. 2,222 royal spirits will be summoned on <span className="font-bold">ApeChain</span>.
        </p>
        <p className="text-md text-blue-800 font-bold">Freemint for WL</p>
        <p className="text-md text-blue-800 font-bold mb-6">Public Mint: 3 APE</p>
        <a
          href="https://twitter.com/WraithTheQueen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
        >
          Follow on Twitter
        </a>
        <div className="mt-4">
          <button className="bg-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-fuchsia-700">
            Mint Coming Soon
          </button>
        </div>
      </div>

      {/* Mint Details */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Mint Details</h2>
        <ul className="text-gray-700 list-disc pl-5 space-y-1">
          <li>Supply: 2,222</li>
          <li>Freemint for Whitelist</li>
          <li>Public Mint: 3 APE</li>
          <li>Minting Platform: <a className="text-blue-600 underline" href="https://nft2me.com" target="_blank">NFT2Me</a></li>
        </ul>
      </div>

      {/* Roadmap */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Roadmap</h2>
        <ul className="text-gray-700 list-disc pl-5 space-y-2">
          <li>Phase 1: Launch 2,222 Wraith NFTs (Freemint for WL)</li>
          <li>Phase 2: Community building on ApeChain</li>
          <li>Phase 3: Staking & reward system</li>
          <li>Phase 4: Special airdrops for holders</li>
          <li>Phase 5: Expand into WraithWorld game/metaverse</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Preview</h2>
        <div className="grid grid-cols-3 gap-4">
          <img src="/nft1.png" alt="NFT 1" className="rounded-lg border shadow" />
          <img src="/nft2.png" alt="NFT 2" className="rounded-lg border shadow" />
          <img src="/nft3.png" alt="NFT 3" className="rounded-lg border shadow" />
        </div>
      </div>

      {/* Countdown */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Countdown to Mint</h2>
        <p className="text-xl font-semibold text-purple-700">{timeLeft}</p>
      </div>

      {/* Whitelist Section */}
<div className="mt-12 max-w-md w-full bg-white p-6 rounded-xl shadow-lg text-center">
  <h2 className="text-2xl font-bold text-purple-800 mb-2">Whitelist</h2>
  <p className="text-gray-700 mb-4">
    Want some freemint? Sign up for the whitelist now and make sure you're part of the Wraith family!
  </p>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScGEFs_dBy_miHQ7WVJnCMaHl0HSWwtshJ1k6iMgpMCO2ePjg/viewform?usp=header" // Ganti dengan link Google Form kamu
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
  >
    Whitelist
  </a>
</div>

      {/* Team */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Team</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>WraithMaster</strong> — Founder & Visionary</li>
          <li><strong>CodeSeer</strong> — Blockchain Dev</li>
          <li><strong>PixelQueen</strong> — Artist & Designer</li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mt-12 max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">FAQ</h2>
        <ul className="text-gray-700 space-y-4">
          <li><strong>❓ What is WraithTheQueen?</strong><br /> An NFT collection themed around a mystical spirit queen living on the ApeChain blockchain.</li>
          <li><strong>❓ Supply?</strong><br /> 2,222 unique NFTs.</li>
          <li><strong>❓ Mint Price?</strong><br /> Free for WL, 3 APE for public.</li>
          <li><strong>❓ Mint where?</strong><br /> Mint on <a href="https://nft2me.com" target="_blank" className="text-blue-600 underline">NFT2Me</a>.</li>
        </ul>
      </div>
    </main>
  );
}