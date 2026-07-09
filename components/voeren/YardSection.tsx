import YardSectionClient from "./YardSectionClient";

type Box = {
  number: number;
  horse: string;
};

type YardSectionProps = {
  title: string;
  boxes: Box[];
};

export default function YardSection(props: YardSectionProps) {
  return <YardSectionClient {...props} />;
}