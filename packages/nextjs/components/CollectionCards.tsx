import { useState } from "react";
import Image from "next/image";

interface CollectionItem {
  id: string;
  name: string;
  location: string;
  amount: number;
  imageUrl: string; // Add this line
}

const CollectionCard = ({ item }: { item: CollectionItem }) => (
  <div className="flex justify-between items-center border-b">
    <div className="flex items-center flex-grow mr-4 min-w-0">
      <div className="w-20 h-20 mr-3 relative flex-shrink-0">
        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" />
      </div>
      <div className="min-w-0 flex-grow">
        <div className="font-bold line-clamp-2 truncate">{item.name}</div>
        <div className="text-xs text-purple-600 truncate">⟟ {item.location}</div>
      </div>
    </div>
    <div className="font-bold w-10 text-right">{item.amount}</div>
  </div>
);

const CollectionCards = () => {
  const [filter, setFilter] = useState("All");
  const [viewType, setViewType] = useState("list");

  const collectionData: CollectionItem[] = [
    {
      id: "0",
      name: "Space Needle",
      location: "400 Broad St, Seattle, WA 98109",
      amount: 12,
      imageUrl: "https://i.imgur.com/kVD6mPR.jpeg", // Placeholder image
    },
    {
      id: "1",
      name: "Kevin The Cat",
      location: "174 Nagahamacho Aoshima, Ozu, Ehime 799-3470, Japan",
      amount: 9,
      imageUrl: "https://i.imgur.com/3JseJA1.jpeg",
    },
    {
      id: "2",
      name: "McDonalds Ball Pit in Cancun",
      location: "Blvd. Kukulcan 14, Zona Hotelera, 77500 Cancún, Mexico",
      amount: 8,
      imageUrl: "https://i.imgur.com/uy4X3CG.jpeg",
    },
    {
      id: "3",
      name: "Dr. Wonderbread Geocache",
      location: "59.67218408285662, -153.2401197828953",
      amount: 5,
      imageUrl: "https://i.imgur.com/sz4Msh0.jpeg",
    },
    {
      id: "4",
      name: "The Golden Gate Bridge",
      location: "San Francisco, USA",
      amount: 2,
      imageUrl: "https://i.imgur.com/nUMcAxM.jpeg",
    },
    {
      id: "5",
      name: "Party Time Jrs. Men's Bathroom Stall #2",
      location: "New York, USA",
      amount: 1,
      imageUrl: "https://i.imgur.com/PI81GXe.jpeg",
    },
    {
      id: "6",
      name: "touch6",
      location: "New York, USA",
      amount: 1,
      imageUrl: "",
    },
    {
      id: "7",
      name: "touch7",
      location: "New York, USA",
      amount: 1,
      imageUrl: "",
    },
  ];

  return (
    <div className="m-4">
      <div className="flex justify-between text-xs">
        <div className="ml-24">Name</div>
        <div>Amount</div>
      </div>
      <div>
        {collectionData.map(item => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionCards;
