import YardSectionClient from "./YardSectionClient";

type Box = {
  id: number;
  number: number;
  horse: string;
};

type YardSectionProps = {
  title: string;
  boxes: Box[];
  fedBoxes: number[];
  onToggleBox: (boxNumber: number) => void;
};

export default function YardSection(props: YardSectionProps) {
  return <YardSectionClient {...props} />;
}