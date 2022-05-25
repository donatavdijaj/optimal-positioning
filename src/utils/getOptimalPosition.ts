type Props = {
  grid: { width: number; height: number };
  components: {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }[];
  newElement: { width: number; height: number };
};

export default function getOptimalPosition({
  grid,
  components,
  newElement,
}: Props): { x: number; y: number } {
  return { x: 0, y: 0 };
}
