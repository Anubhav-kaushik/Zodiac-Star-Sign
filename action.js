/* main */
const database = [
  {
    "name": "Aries",
    "interval": "March 21 - April 19",
    "para1": "As an Aries, you're willful, courageous, and headstrong, just like the ram. You have no filter and don't hesitate to say what you mean and show how you feel. Sometimes you act so fast you can't remember why you're mad — though you won't admit it. For you, life is a game and you're always the winner.",
    "para2": "You're the daredevil of your group, always ready for a challenge. You get bored easily, though. Yours is the TikTok that's fresh, fiery, and a little off the hook. Houdini, DaVinci, and Jackie Chan are all Aries signs like you — and we couldn't take our eyes off them, either.",
    "compatible signs": "Sagittarius, Gemini, Libra",
    "image": "infographics/interactive-names/aries.svg"
  },
  {
    "name": "Taurus",
    "interval": "April 20 - May 20",
    "para1": "You, Taurus, are an immovable force, just like the bull. You're in good company among other steadfast bulls like Malcolm X and Mr. T. You don't see a lot of gray around you. For a Taurus, it's black or white and you're not interested in debating what's in between.",
    "para2": "As an earth sign, you like to sink your roots deep. Your friends may call you a homebody, but you simply know what you like and want to snuggle down and stay there. You resist change, but this just means you can provide a safe anchor when the world's gone cray.",
    "compatible signs": "Capricorn, Virgo, Cancer",
    "image": "infographics/interactive-names/taurus.svg"
  },
  {
    "name": "Gemini",
    "interval": "May 21 - June 20",
    "para1": "Hey Gemini, I see you there skimming through this profile because you're doing a hundred things at once. Your symbol is the twins because it would literally take two of you to finish all the projects you have. Forever a social butterfly, you're usually spotted flitting about the bar, dominating the dance floor, or making new friends — because we all know you've never met a stranger.",
    "para2": "Geminis like Stevie Nicks and Prince prove that it's impossible for your sign to stay in the background. Your charisma will certainly take you places, though it's uncertain whether you'll ever settle in one spot.",
    "compatible signs": "Libra, Aquarius, Sagittarius",
    "image": "infographics/interactive-names/gemini.svg"
  },
  {
    "name": "Cancer",
    "interval": "June 21 - July 22",
    "para1": "As a Cancer, you're an undeniably complex creature. Like the crab, you're hard on the outside, soft on the inside, and capable of making your home just about anywhere. You love seeking comfort and jumped on the hygge bandwagon as fast as you could.",
    "para2": "You're extremely sensitive and selective about who you keep close. You carry all your besties' problems on your shoulders so you tend to keep the circle small. Others just love your warm, gentle energy, though. Like fellow Cancer Tom Hanks, you're hard not to love.",
    "compatible signs": "Scorpio, Pisces, Virgo",
    "image": "infographics/interactive-names/cancer.svg"
  },
  {
    "name": "Leo",
    "interval": "July 23 - August 22",
    "para1": "You are Leo, and we hear your roar. The lion of the zodiac, you have a big personality and a taste for the spotlight. You'll become king of any jungle you call home. And what a luxurious home it will be! You know how to enjoy the finer things in life and never settle for Coach when you can go Louis Vuitton.",
    "para2": "You ooze elegance and creativity just like fellow Leos Coco Chanel and Kylie Jenner. You're the perfect fit for social media stardom, so go ahead and keep that Insta looking lively. You were made to shine.",
    "compatible signs": "Sagittarius, Aquarius, Gemini",
    "image": "infographics/interactive-names/leo.svg"
  },
  {
    "name": "Virgo",
    "interval": "August 23 - September 22",
    "para1": "Neat and meticulous, you're always the most organized person in your social circle. As a Virgo, you have strong perfectionistic tendencies and feel best when you're productive and useful. Virgos know how to get it done, so you shouldn't be surprised to find the likes of Zendaya and Beyonce in your midst.",
    "para2": "Your brain is always moving full speed ahead so you can pop out ideas like a Pez dispenser. Best of all, your plans are always thoughtfully designed and backed by facts. Though you may stumble a bit over communication, your brilliance always shines through.",
    "compatible signs": "Capricorn, Taurus, Scorpio",
    "image": "infographics/interactive-names/virgo.svg"
  },
  {
    "name": "Libra",
    "interval": "September 23 - October 22",
    "para1": "Represented by a set of scales, you love balance and harmony. Your aesthetics are always on point, which is why friends keep coming to you for help decorating their apartments or putting together the perfect outfit. If there's one thing you will never be, it's basic.",
    "para2": "Like your fellow Libra Kim Kardashian, you simply gravitate toward the finer things in life. You're not stuck up, though, and actually make a fantastic partner. You're happiest when you're in good company and always strive to make sure everyone around you is happy.",
    "compatible signs": "Libra, Aries, Aquarius",
    "image": "infographics/interactive-names/libra.svg"
  },
  {
    "name": "Scorpio",
    "interval": "October 23 - November 21",
    "para1": "Be careful with that stinger, Scorpio! As the clever scorpion of the zodiac, you're one of the most enigmatic signs around. You play the long game and keep your stinger primed for the perfect moment. You prefer to socialize from behind a double-sided mirror and keep your tender, authentic identity hidden.",
    "para2": "Your sign is often misunderstood, as fellow Scorpios like Sylvia Plath and Marie Antoinette could've told you. Others may see you as dark and brooding at times, but you're simply deep and mystical, brimming with wonders for anyone brave enough to dive into your depths.",
    "compatible signs": "Pisces, Cancer, Virgo",
    "image": "infographics/interactive-names/scorpio.svg"
  },
  {
    "name": "Sagittarius",
    "interval": "November 22 - December 21",
    "para1": "You're represented by the archer, Sagittarius, always ready to take aim at a new adventure and loose your arrows of inspiration. You're impossible to miss in a crowd and probably spent your youth hearing endless admonitions to use your indoor voice. Emotionally driven, you may not make the soundest choices, but somehow your life spins into a brilliant masterpiece of exploration and enjoyment anyway.",
    "para2": "Though you seem self-assured, deep down you're full of questions. Self-improvement is a never-ending passion you pursue as relentlessly as your next great excursion into the unknown.",
    "compatible signs": "Aries, Gemini, Sagittarius",
    "image": "infographics/interactive-names/sagittarius.svg"
  },
  {
    "name": "Capricorn",
    "interval": "December 22 - January 19",
    "para1": "Driven by fearless ambition, you have no problem charging forward to claim what you want. Challenges and obstacles don't slow you down. In fact, they often give you a supercharged boost of determination. Like fellow Capricorns Michelle Obama and Dolly Parton, you will prove to the world that there's nothing you can't do.",
    "para2": "In your youth, others will see you as wise beyond your years, but you'll claim an increasing sense of playfulness as you get older, making you a little bit like a cosmic Benjamin Button. You take your time warming up to people, but friends love your steadfast nature once they get to know you.",
    "compatible signs": "Virgo, Scorpio, Capricorn",
    "image": "infographics/interactive-names/capricorn.svg"
  },
  {
    "name": "Aquarius",
    "interval": "January 20 - February 18",
    "para1": "You're a natural humanitarian, Aquarius. Relentlessly driven to pursue the greater good, you're always researching innovative ways to make the world a better place. Deeply intellectual, you place far more importance on facts than feelings. That said, you're always open to intriguing ideas or conspiracy theories, and you pay no mind to whether they'll get you canceled.",
    "para2": "It's no surprise that you're in the company of Aquarians like Yoko Ono and Virginia Woolf. You're sure to leave your mark on the world.",
    "compatible signs": "Gemini, Libra, Aquarius",
    "image": "infographics/interactive-names/aquarius.svg"
  },
  {
    "name": "Pisces",
    "interval": "February 19 - March 20",
    "para1": "As a Pisces, you're one of the most intuitive and spiritual signs of the zodiac, which naturally makes you seem a bit extra. You have an uncanny connection to the universe and find signs everywhere you look. Your dreams can be so prophetic you may have trouble distinguishing them from reality.",
    "para2": "It's easy for the fishes of the zodiac to drift away on the current. While you should cultivate your psychic gifts, you also need to find a way to keep your feet firmly on the ground.",
    "compatible signs": "Scorpio, Cancer, Capricorn",
    "image": "infographics/interactive-names/pisces.svg"
  }
]

const resourcesLinks = [
  'https://www.allure.com/story/aries-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/aries-sign',
  'https://www.rd.com/list/zodiac-signs-compatibility',
  'https://www.allure.com/story/taurus-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/taurus-sign',
  'https://www.costarastrology.com/zodiac-signs/gemini-sign',
  'https://www.allure.com/story/gemini-zodiac-sign-personality-traits',
  'https://www.allure.com/story/cancer-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/cancer-sign',
  'https://www.cosmopolitan.com/entertainment/celebs/g32086359/famous-cancer-celebrities',
  'https://www.allure.com/story/leo-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/leo-sign',
  'https://www.costarastrology.com/zodiac-signs/virgo-sign',
  'https://www.allure.com/story/virgo-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/libra-sign',
  'https://www.allure.com/story/libra-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/scorpio-sign',
  'https://www.allure.com/story/scorpio-zodiac-sign-personality-traits',
  'https://www.allure.com/story/sagittarius-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/sagittarius-sign',
  'https://www.costarastrology.com/zodiac-signs/capricorn-sign',
  'https://www.allure.com/story/capricorn-zodiac-sign-personality-traits',
  'https://www.allure.com/story/aquarius-zodiac-sign-personality-traits',
  'https://www.costarastrology.com/zodiac-signs/aquarius-sign',
  'https://www.costarastrology.com/zodiac-signs/pisces-sign',
  'https://www.allure.com/story/pisces-zodiac-sign-personality-traits'
]

let visibleSection = 1;

function scrollToHeader() {
    let header = document.querySelector('.zodiac--header');
    header.scrollIntoView({behavior: 'smooth'});
}

function showHideSections(visibleSectionNum) {
    /*
        This function show or hide the sections.
        visibleSectionNum: The section you want to show.
    */
    const sections = document.querySelectorAll('*[data-section]');
    for (let section of sections) {
        if (section.dataset.section == visibleSectionNum) {
            section.dataset.isvisible = true;
        } else {
            section.dataset.isvisible = false;
        }
    }
}

function disableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = true;
}

function enableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = false;
}

function resetInputField() {
    const inputField = document.querySelector('#user-question');
    inputField.value = '';
}

function checkInputField() {
    const inputField = document.querySelector('#user-question');
    console.log(inputField.value);
    if (inputField.value.length > 0) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
}

const inputField = document.querySelector('#user-question');

inputField.addEventListener('change', checkInputField);


resetInputField();
disableSubmitButton();

async function onClickSubmit() {
    scrollToHeader();
    addOrderedListToSection(document.querySelector('.zodiac--footer-liks-container'), resourcesLinks, 2, true);
    const userDob = document.querySelector('#user-question').value;
    findZodiacSign('zodiac--main-result-container', userDob, database);  
    setTimeout(() => {
      showHideSections(2);
    }, 500);
    visibleSection = 2;
}

/* --Second page JS-- */

function onClickExplore() {
    const href = 'https://www.pathforwardpsychics.com/psychic-readings/astrology';

    window.open(href, '_blank');
}

function createResultCard(resultContainer, resultObj) {
    resultContainer.innerHTML = '';

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('zodiac--result-icon');
    iconContainer.innerHTML = `<img src="${resultObj.image}" alt="${resultObj.name}">`;

    resultContainer.appendChild(iconContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('zodiac--result-text');

    const row1 = document.createElement('div');
    row1.classList.add('result-row1');

    const heading = document.createElement('div');
    heading.classList.add('result-heading');
    heading.innerHTML = resultObj.name;
    row1.appendChild(heading);

    const interval = document.createElement('div');
    interval.classList.add('result-interval');
    interval.innerHTML = resultObj.interval;
    row1.appendChild(interval);

    textContainer.appendChild(row1);

    const row2 = document.createElement('div');
    row2.classList.add('result-row2');
    row2.innerHTML = `<p>${resultObj.para1}</p>`;
    textContainer.appendChild(row2);

    const row3 = document.createElement('div');
    row3.classList.add('result-row3');
    row3.innerHTML = `<p>${resultObj.para2}</p>`;
    textContainer.appendChild(row3);

    const row4 = document.createElement('div');
    row4.classList.add('result-row4');
    row4.innerHTML = `<span>Compatible Sign:</span><span>${resultObj['compatible signs']}</span>`;
    textContainer.appendChild(row4);

    resultContainer.appendChild(textContainer);
}


function findZodiacSign(containerClass, userDob, database) {
    const userDobArray = userDob.split('-');

    const userMonth = parseInt(userDobArray[1]);
    const userDay = parseInt(userDobArray[2]);

    const months = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    }

    let zodiacObj;

    for (let obj of database) {
        const intervalText = obj.interval;
        const intervalArray = intervalText.split('-');
        const start = intervalArray[0];
        const end = intervalArray[1];

        const startMonth = months[start.split(' ')[0].toLowerCase()];
        const startDay = parseInt(start.split(' ')[1]);

        const endMonth = months[end.split(' ')[1].toLowerCase()];
        const endDay = parseInt(end.split(' ')[2]);

        console.log(`startMonth: ${startMonth} | startDay: ${startDay} | endMonth: ${endMonth} | endDay: ${endDay}`);

        if (userMonth == startMonth && userDay >= startDay) {
              zodiacObj = obj;
              break;
        } else if (userMonth == endMonth && userDay <= endDay) {
              zodiacObj = obj;
              break;
        }
    }

    if (zodiacObj != undefined) {
        createResultCard(document.querySelector(`.${containerClass}`), zodiacObj);
    } else {
        alert('Sorry, we don\'t have that zodiac sign in our database. Please try again.');
    }
}

// footer

function createOrderedList(items, startFrom=1, anchor=false) {
    let orderedList = document.createElement('ol');
    orderedList.setAttribute('start', startFrom);
    for (let item of items) {
        let listItem = document.createElement('li');
        if (anchor) {
            let anchor = document.createElement('a');
            anchor.setAttribute('href', item);
            anchor.innerText = item;
            listItem.appendChild(anchor);
        } else {
          listItem.innerHTML = item;
        }
        
        orderedList.appendChild(listItem);
    }
    return orderedList;
}

function addOrderedListToSection(section, list, part=1, anchor=false) {
    const maxItems = parseInt(list.length / part);

    for (let i = 0; i < part; i++) {
        const container = document.createElement('div');
        let orderedList = createOrderedList(list.slice(i * maxItems, (i + 1) * maxItems), i * maxItems + 1, anchor);
        container.appendChild(orderedList);
        section.appendChild(container);
    }
}


