import { Achievements } from "../components/Achievements.js";
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

/* achievements start */

const achievements = new Achievements('#achievements_block');

achievements.add({ icon: 'globe', number: 850 });
achievements.add({ icon: 'globe', title: 'Happy customers' });
achievements.add({ number: 850, title: 'Happy customers' });
achievements.add(5);
achievements.add(null);
achievements.add([]);

// [C]REATE
achievements.add({ icon: 'globe', number: 100, title: 'Happy customers' });
achievements.add({ icon: 'globe', number: 200, title: 'Happy customers' });
achievements.add({ icon: 'globe', number: 300, title: 'Happy customers' });
achievements.add({ icon: 'globe', number: 400, title: 'Happy customers' });

// [R]EAD
const achData = achievements.list();
console.log(achData);
const achDataStr = achievements.list('labas');
console.log(achDataStr);
const achData0 = achievements.list(0);
console.log(achData0);

// [U]PDATE
const achUpdate = achievements.update(0, 'game', 'Of ....');
console.log(achUpdate);
const achUpdate2 = achievements.update(0, 'title', 'Updated title');
console.log(achUpdate2);

const achData1 = achievements.list(0);
console.log(achData1);

// [D]ELETE
const achDelete = achievements.delete(0);
console.log(achDelete);

const achData2 = achievements.list(0);
console.log(achData2);

const achData3 = achievements.list();
console.log(achData3);

achievements.init();

/* achievements end */

