import { cx } from "class-variance-authority";
import { motion } from "framer-motion";

type SliderToggleProps = {
  labels: [string, string];
  selected: string;
  setSelected(value: string): void;
};

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 py-1.5  transition-colors relative z-10 w-full justify-center";

const SliderToggle = (props: SliderToggleProps) => {
  const { selected, setSelected, labels } = props;
  return (
    <div className="relative flex items-center justify-between rounded-full w-[180px] border-2 border-primary py-1 overflow-hidden">
      <button
        className={cx(
          TOGGLE_CLASSES,
          selected === labels[0] ? "text-white" : "text-black"
        )}
        onClick={() => setSelected(labels[0])}
      >
        <span className="relative z-10">{labels[0]}</span>
      </button>
      <button
        className={cx(
          TOGGLE_CLASSES,
          selected === labels[1] ? "text-white" : "text-black"
        )}
        onClick={() => setSelected(labels[1])}
      >
        <span className="relative z-10">{labels[1]}</span>
      </button>
      <div
        className={cx(
          "absolute inset-0 z-0 p-1 flex transition-all duration-300",
          selected === labels[1] ? "left-[50%]" : "left-[0%]"
        )}
      >
        <span className="h-full w-[calc(90px-8px)] rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default SliderToggle;
