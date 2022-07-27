import { Gallery } from "../components/Gallery.js";
import { Services } from "../components/Services.js";
import { portfolioData } from "../data/portfolioData.js";
import { servicesData } from "../data/servicesData.js";

/* header start */
/* header end */

/* hero start */
/* hero end */

/* about me start */
/* about me end */

/* services start */

new Services('#services_block', servicesData);

/* services end */

/* portfolio start */

new Gallery('#portfolio_block', portfolioData);

/* portfolio end */

