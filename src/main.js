import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/hamburger_menu";
import "./scripts/parallax";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/messageform";