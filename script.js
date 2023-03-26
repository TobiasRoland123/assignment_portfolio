import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

animate("header h1", { opacity: [0, 1], y: [0, 40] }, { duration: 2.5 });
animate("header p", { opacity: [0, 1], y: [0, 30] }, { duration: 2.5 });
