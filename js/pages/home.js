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
achievements.add({ icon: 'globe', number: 0, title: 'Demo' });
achievements.add({ icon: 'users', number: 850, title: 'Happy customers' });
achievements.add({ icon: 'thumbs-up', number: 230, title: 'Complete projects' });
achievements.add({ icon: 'bullhorn', number: 9450, title: 'Lines of code' });
achievements.add({ icon: 'cloud-download', number: 780, title: 'Files downloaded' });

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

console.clear();

// URL: https://www.puslapis.lt
// URL: https://www.puslapis.lt/api/...
// URL: https://www.puslapis.lt/api/kepures?token=fsghfags415f4eshdn1g5g
// URL: https://www.puslapis.lt/api/batai
// URL: https://www.puslapis.lt/api/masinos

// GET - gauti duomenis
const URL = 'https://raw.githubusercontent.com/front-end-by-rimantas/39-grupe-portfolio/master/api/prekes.json';
// const URL = 'https://jkfsdgfijksfd.xyz';
try {
    const prekiuDuomenys = await fetch(URL, {
        method: 'GET',
    });
    const tikriDuomenys = await prekiuDuomenys.json();
    console.log(tikriDuomenys);

    for (const item of tikriDuomenys) {
        console.log(item);
    }
} catch (error) {
    console.log('Ups...');
}

console.log('po uzklausos...');

// POST - siusti duomenis
// PUT - atnaujinti duomenis
// DELETE - istrinti duomenis


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const reponseData = xhttp.responseText;
        const responseObject = JSON.parse(reponseData);
        console.log(responseObject);
    }
};
xhttp.open("GET", URL, true);
xhttp.send();


const asd = [{}, {}, {}];
const jsonAsd = JSON.stringify(asd);
const asd2 = JSON.parse(jsonAsd);