import reactionIcon from "../images/icon-reaction.svg";
import memoryIcon from "../images/icon-memory.svg";
import verbalIcon from "../images/icon-verbal.svg";
import visualIcon from "../images/icon-visual.svg";

import {
  LightRed,
  OrangeyYellow,
  GreenTeal,
  CobaltBlue,
} from "../styles/colors";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: reactionIcon,
    color: LightRed,
  },
  {
    category: "Memory",
    score: 92,
    icon: memoryIcon,
    color: OrangeyYellow,
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbalIcon,
    color: GreenTeal,
  },
  {
    category: "Visual",
    score: 72,
    icon: visualIcon,
    color: CobaltBlue,
  },
];

export default data;
