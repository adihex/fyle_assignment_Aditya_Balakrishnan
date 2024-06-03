// Import our custom CSS
import "../scss/styles.scss";

import { Tab, initMDB } from "mdb-ui-kit";

initMDB({ Tab });


// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//======== tiny slider for slider-items-active
tns({
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  gutter: 0,
  container: ".slider-items-active",
  center: true,
  nav: true,
  navPosition: "bottom",
  controls: true,
  speed: 400,
  controlsText: [
    '<i class="lni lni-arrow-left-circle"></i>',
    '<i class="lni lni-arrow-right-circle"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
// Initialization for ES Users