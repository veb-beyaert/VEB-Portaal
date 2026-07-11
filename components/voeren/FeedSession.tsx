"use client";

import { useEffect, useState } from "react";

import FeedRoundSelector from "./FeedRoundSelector";
import YardSection from "./YardSection";
import { supabase } from "@/lib/supabase";

type Horse = {
  id: number;
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

async function saveFeedRound() {
  if (!selectedRound) {
    alert("Kies eerst een voerronde.");
    return;
  }

  if (fedBoxes.length === 0) {
    alert("Vink eerst minimaal één paard aan.");
    return;
  }

  console.log("selectedRound =", JSON.stringify(selectedRound));

 const records = fedBoxes.map((horseId) => ({
  horse_id: horseId,
  feed_date: selectedDate,
  feed_round: selectedRound,
  completed: true,
}));

console.log("selectedRound:", JSON.stringify(selectedRound));
console.log("records:", records);

const { error } = await supabase
  .from("feed_logs")
  .delete()
  .eq("feed_date", selectedDate)
  .eq("feed_round", selectedRound);

if (error) {
  console.error(error);
  alert("Er ging iets mis met het verwijderen van de oude registratie.");
  return;
}

const { error: insertError } = await supabase
  .from("feed_logs")
  .insert(records);

if (insertError) {
  console.error(insertError);
  alert("Er ging iets mis met opslaan.");
  return;
}

alert("✅ Voerronde succesvol opgeslagen!");
}

async function loadFeedRound() {
  if (!selectedRound) {
    setFedBoxes([]);
    return;
  }

  const { data, error } = await supabase
    .from("feed_logs")
    .select("horse_id")
    .eq("feed_date", selectedDate)
    .eq("feed_round", selectedRound)
    .eq("completed", true);

    console.log("Feed logs:", data);
console.log("Feed error:", error);

  if (error) {
    console.error(error);
    return;
  }

  setFedBoxes(data.map((item) => item.horse_id));
}

useEffect(() => {
  void loadFeedRound();
}, [selectedDate, selectedRound]);

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
    id: horse.id,
    number: horse.stable_number,
    horse: horse.name,
  }))}
  fedBoxes={fedBoxes}
  onToggleBox={toggleBox}
/>

       <YardSection
  title="Plein 2"
  boxes={plein2.map((horse) => ({
    id: horse.id,
    number: horse.stable_number,
    horse: horse.name,
  }))}
  fedBoxes={fedBoxes}
  onToggleBox={toggleBox}
/>

        <YardSection
  title="Plein 3"
  boxes={plein3.map((horse) => ({
    id: horse.id,
    number: horse.stable_number,
    horse: horse.name,
  }))}
  fedBoxes={fedBoxes}
  onToggleBox={toggleBox}
/>
<div className="mt-8 flex justify-end">
  <button
  onClick={saveFeedRound}
  className="rounded-xl bg-[#2E5E3B] px-6 py-3 font-semibold text-white transition hover:bg-[#24492E]"
>
    🌾 Voerronde opslaan
  </button>
</div>

      </div>
    </>
  );
}