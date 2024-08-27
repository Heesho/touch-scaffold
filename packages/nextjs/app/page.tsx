"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold mb-8">Welcome to Scaffold-ETH 2</h1>
      {connectedAddress && (
        <div className="mb-8">
          <p>Connected Address:</p>
          <Address address={connectedAddress} />
        </div>
      )}
      {/* Add more content for your home page here */}
    </div>
  );
};

export default Home;
