"use client";

import { useState } from "react";

import FeedRoundSelector from "./FeedRoundSelector";
import YardSection from "./YardSection";

type Horse = {
  stable_number: number;
  name: string;
};

type FeedSessionProps = {
  plein1: Horse[];
  plein2: Horse[];
  plein3: Horse[];
};

export default function FeedSession({
  plein1,
  plein2,
  plein3,
}: FeedSessionProps) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [selectedRound, setSelectedRound] = useState("");

  const [fedBoxes, setFedBoxes] = useState<number[]>([]);

  function toggleBox(boxNumber: number) {
  setFedBoxes((current) =>
    current.includes(boxNumber)
      ? current.filter((n) => n !== boxNumber)
      : [...current, boxNumber]
  );
}

  return (
    <>
      <FeedRoundSelector
        selectedDate={selectedDate}
        selectedRound={selectedRound}
        onDateChange={setSelectedDate}
        onRoundChange={setSelectedRound}
      />

      <div className="mt-8 grid gap-6">

        <YardSection
          title="Plein 1"
          boxes={plein1.map((horse) => ({
            number: horse.stable_number,
            horse: horse.name,
          }))}
        />

        <YardSection
          title="Plein 2"
          boxes={plein2.map((horse) => ({
            number: horse.stable_number,
            horse: horse.name,
          }))}
        />

        <YardSection
          title="Plein 3"
          boxes={plein3.map((horse) => ({
            number: horse.stable_number,
            horse: horse.name,
          }))}
        />

      </div>
    </>
  );
}