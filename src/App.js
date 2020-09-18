import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDoubleDown,
  faArrowsAlt,
  faTrophy,
  faDesktop,
  faPrint,
  faPencilRuler,
  faEnvelope,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faImage,
  faLifeRing,
} from "@fortawesome/free-regular-svg-icons";

import "./App.css";
import Body from "../src/components/Body";

library.add(
  fab,
  faAngleDoubleDown,
  faArrowsAlt,
  faTrophy,
  faImage,
  faLifeRing,
  faDesktop,
  faPrint,
  faPencilRuler,
  faCommentAlt,
  faEnvelope
);

function App() {
  return <Body />;
}

export default App;
