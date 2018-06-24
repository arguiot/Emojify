/*****************************************************

	                    Emojify
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
class Emojify {
  constructor(input, list = null) {
    if (list == null) {
      this.list = this.createList();
    } else {
      this.list = list;
    }
    this.input = input;

    // Polyfill
    if (!String.prototype.splice) {
      /**
       * {JSDoc}
       *
       * The splice() method changes the content of a string by removing a range of
       * characters and/or adding new characters.
       *
       * @this {String}
       * @param {number} start Index at which to start changing the string.
       * @param {number} delCount An integer indicating the number of old chars to remove.
       * @param {string} newSubStr The String that is spliced in.
       * @return {string} A new string with the spliced substring.
       */
      String.prototype.splice = function(start, delCount, newSubStr) {
        return (
          this.slice(0, start) +
          newSubStr +
          this.slice(start + Math.abs(delCount))
        );
      };
    }
  }
  createElement() {
    const model = `
		<div class="emojify-container">
		  <input type="text" class="search" placeholder="Find your Emoji">
		  <lunar-icon icon="search"></lunar-icon>
		  <div class="emojis"></div>
		  <div class="menu">
		    <div class="people">😀</div>
			<div class="animals">🐶</div>
			<div class="food">🍔</div>
		  </div>
		</div>
		<style>
		.emojify-container {
		  width: 300px;
		  height: 300px;
		  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
		  border-radius: 5px;
		  background: white;
		}
		.emojify-container .search {
		  width: 70%;
		  height: 50px;
		  margin: 20px;
		  border: none;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.1);
		  box-sizing: border-box;
		  padding: 10px;
		}
		.emojify-container lunar-icon {
		  position: relative;
		  left: -20%;
		  font-size: 20px;
		  top: 5px;
		}
		.emojify-container .emojis {
		  width: 90%;
		  height: 70%;
		  box-sizing: border-box;
		  padding: 20px;
		  padding-top: 0;
		  margin: 0 auto;
		  overflow: auto;
		}
		.emojify-container .emojis .emoji {
		  display: inline;
		  width: 20px;
		  padding: 5px;
		  margin: 5px;
		  border-radius: 5px;
		  cursor: pointer;
		  box-sizing: content-box;
		}
		.emojify-container .emojis .emoji:hover {
		  background: rgba(0, 0, 0, 0.1);
		}
		.emojify-container .emojis::-webkit-scrollbar {
		  width: 1em;
		}
		.emojify-container .menu {
		  width: 50px;
		  display: flex;
		  justify-content: space-evenly;
		  flex-direction: column;
		  align-items: center;
		  transform: translate(240px, -300px);
		  box-sizing: border-box;
		  padding: 10px;
		  height: 100%;
		}
		.emojify-container .menu .emoji {
		  display: inline;
		  width: 30px;
		  padding: 5px;
		  margin: 5px;
		  border-radius: 5px;
		  cursor: pointer;
		  box-sizing: content-box;
		}
		.emojify-container .menu .emoji:hover {
		  background: rgba(0, 0, 0, 0.1);
		}
		</style>
		`;

    const parser = new DOMParser();

    const html = parser.parseFromString(model, "text/html");

    const body = html.body.querySelector(".emojify-container");
    const style = html.body.querySelector("style");

    const out = this.gen(body);
    this.addEventListeners(body);

    out.appendChild(style);
    return out;
  }
  createList() {
    return {
      People: {
        "happy-smiley-grinning": "😀",
        "happy-smiley-grinning2": "😁",
        "laughing-joy-lol": "😂",
        "rofl-laughing-joy-lol": "🤣",
        "happy-smiley-grinning3": "😃",
        "happy-smiley-grinning4": "😄",
        "happy-smiley-grinning-sweat": "😅",
        "laughing-lol-joy-xd": "😆",
        winking: "😉",
        "happy-smiley": "😊",
        "goofy-hungry": "😋",
        "cool-sunglass": "😎",
        "heart-love-like": "😍",
        "heart-love-kiss": "😘",
        "duck-kiss-whistling": "😗",
        "duck-kiss-whistling2": "😙",
        "duck-kiss-whistling3": "😚",
        "happy-smiley2": "☺️",
        "happy-smiley-fine": "🙂",
        "hug-smiley-tada": "🤗",
        "excited-wow-starry": "🤩",
        thinker: "🤔",
        "thinker-what": "🤨",
        "ok-neutral-straight": "😐",
        "straight-neutral": "😑",
        "silence-mouthless-blank": "😶",
        "eye-roll-pfff": "🙄",
        "flirting-smirking-suggestive": "😏",
        "helpless-persevering-scrunched": "😣",
        "disappointed-sad": "😥",
        "surprised-oh": "😮",
        "zipper-quiet-silence": "🤐",
        "surprised-ok-oh": "😯",
        "sleepy-tired-tear": "😪",
        "exhausted-tired": "😫",
        "sleeping-zzz-snoring": "😴",
        "pleased-humble-relieved": "😌",
        "tongue-cheeky": "😛",
        "winking-tongue": "😜",
        "squinting-tongue": "😝",
        drool: "🤤",
        "unamused-meh-unimpressed": "😒",
        "hard-work-downcast-sad": "😓",
        "pensive-sad": "😔",
        "confused-puzzled": "😕",
        "silly-sarcasm-upside-down": "🙃",
        "money-doller-rich": "🤑",
        "astonished-shocked-wow": "😲",
        "frowning-no-bad": "☹️",
        "frowning-no-bad-sad": "🙁",
        "confounded-scrunched-quivering": "😖",
        "sad-disappointed": "😞",
        "sad-worried": "😟",
        "argh-mad-frustrating": "😤",
        "sad-crying-tear": "😢",
        "loudly-crying-sad-tear": "😭",
        "frowning-yawning": "😦",
        "anguished-pained": "😧",
        "fearful-scared-surprised-blue": "😨",
        "weary-distraught-wailing": "😩",
        "exploding-mind-blowing-wow": "🤯",
        "grimacing-awkward-nervous": "😬",
        "blue-anxious-nervous-concerned": "😰",
        "screaming-blue-fearful": "😱",
        "flushed-shame-embarassed": "😳",
        "zany-wild-crazy-excited": "🤪",
        "dizzy-dead": "😵",
        "angry-mad-pouting-red": "😡",
        "angry-mad": "😠",
        "cursing-mad-angry-swearing": "🤬",
        "surgical-mask-medical": "😷",
        "sick-thermometer": "🤒",
        "injured-bandage": "🤕",
        "sick-nauseated-vomit-green": "🤢",
        vomit: "🤮",
        "sneezing-sick": "🤧",
        "angel-halo": "😇",
        "cowboy-sherif": "🤠",
        clown: "🤡",
        "lying-sniff": "🤥",
        "shh-quiet-silence": "🤫",
        "shh-silence-hand": "🤭",
        "monocle-thinker": "🧐",
        "nerd-geek": "🤓",
        "smile-devil-purple": "😈",
        "angry-devil-purple": "👿",
        "ogre-scary-red-monster": "👹",
        "goblin-red-monster": "👺",
        "death-skull-skeleton": "💀",
        "ghost-halloween": "👻",
        "alien-et": "👽",
        robot: "🤖",
        poop: "💩",
        "happy-cat-smile": "😺",
        "grinning-smiley-cat": "😸",
        "lol-laughing-cat": "😹",
        "heart-eye-love-cat": "😻",
        "smirking-cat": "😼",
        "kissing-cat": "😽",
        "scared-cat-screaming-fearful": "🙀",
        "sad-tear-crying-cat": "😿",
        "grumpy-pouting-cat": "😾",
        "child-baby": "👶",
        girl: "👧",
        boy: "👦",
        "mum-woman": "👩",
        "man-dad": "👨",
        "grandma-old": "👵",
        "grandpa-old": "👴",
        "police-man": "👮‍",
        "worker-man": "👷‍",
        "detective-man": "🕵️‍",
        "doctor-girl": "👩‍⚕️",
        "doctor-man": "👨‍⚕️",
        "farmer-girl": "👩‍🌾",
        "farmer-man": "👨‍🌾",
        "cook-girl": "👩‍🍳",
        "cook-man": "👨‍🍳",
        "student-girl": "👩‍🎓",
        "student-boy": "👨‍🎓",
        "singer-girl": "👩‍🎤",
        "singer-man": "👨‍🎤",
        "teacher-girl": "👩‍🏫",
        "teacher-man": "👨‍🏫",
        "factory-worker-girl": "👩‍🏭",
        "factory-worker-man": "👨‍🏭",
        "computer-code-girl": "👩‍💻",
        "computer-code-man": "👨‍💻",
        "office-worker-girl": "👩‍💼",
        "office-worker-man": "👨‍💼",
        "mechanic-worker-girl": "👩‍🔧",
        "mechanic-worker-man": "👨‍🔧",
        "scientist-girl": "👩‍🔬",
        "scientist-man": "👨‍🔬",
        "artist-girl": "👩‍🎨",
        "artist-man": "👨‍🎨",
        "firefighter-girl": "👩‍🚒",
        "firefighter-man": "👨‍🚒",
        "pilot-girl": "👩‍✈️",
        "pilot-man": "👨‍✈️",
        "astronaut-girl": "👩‍🚀",
        "astronaut-man": "👨‍🚀",
        "judge-girl": "👩‍⚖️",
        "judge-man": "👨‍⚖️",
        "wedding-marriage-girl": "👰",
        "wedding-msrriage-man": "🤵",
        queen: "👸",
        king: "🤴",
        "mother-christmas-claus": "🤶",
        "santa-claus": "🎅",
        wizard: "🧙‍",
        elf: "🧝‍",
        "vampire-monster": "🧛‍",
        "zombie-monster": "🧟‍",
        genie: "🧞‍",
        mermaid: "🧜‍",
        fairy: "🧚‍",
        "angel-cherub-cupid": "👼",
        "pregnant-woman": "🤰",
        breastfeeding: "🤱",
        bowing: "🙇‍",
        "tipping-hand-woman": "💁‍",
        "no-x-arms-woman": "🙅‍",
        "ok-gesturing-woman": "🙆‍",
        "raising-hand-woman": "🙋‍",
        "facepalming-stupid-idiot-man": "🤦‍",
        "shrugging-don't-know": "🤷‍",
        "blank-look-pouting-woman": "🙎‍",
        "sad-frowning-woman": "🙍‍",
        "haircut-woman": "💇‍",
        "massage-haircut": "💆‍",
        "sauna-woman": "🧖‍",
        "nails-manicure": "💅",
        selfie: "🤳",
        "dancing-woman": "💃",
        "dancing-man": "🕺",
        "dancing-women-bunny-ears": "👯‍",
        "hovering-man-mysterious-magic": "🕴",
        "walking-man": "🚶‍",
        "running-man": "🏃‍",
        "heterosexual-couple": "👫",
        "homosexual-gay-couple": "👭",
        "homosexual-lesbian-couple": "👬",
        "heterosexual-love": "💑",
        "homosexual-lesbian-love": "👩‍❤️‍👩",
        "homosexual-gay-love": "👨‍❤️‍👨",
        "heterosexual-kiss": "💏",
        "homosexual-lesbian-kiss": "👩‍❤️‍💋‍👩",
        "homosexual-gay-kiss": "👨‍❤️‍💋‍👨",
        "heterosexual-family-boy": "👪",
        "heterosexual-family-girl": "👨‍👩‍👧",
        "heterosexual-family-boy-girl": "👨‍👩‍👧‍👦",
        "heterosexual-family-boy-boy": "👨‍👩‍👦‍👦",
        "heterosexual-family-girl-girl": "👨‍👩‍👧‍👧",
        "homosexual-lesbian-family-boy": "👩‍👩‍👦",
        "homosexual-lesbian-family-girl": "👩‍👩‍👧",
        "homosexual-lesbian-family-boy-girl": "👩‍👩‍👧‍👦",
        "homosexual-lesbian-family-boy-boy": "👩‍👩‍👦‍👦",
        "homosexual-lesbian-family-girl-girl": "👩‍👩‍👧‍👧",
        "homosexual-gay-family-boy": "👨‍👨‍👦",
        "homosexual-gay-family-girl": "👨‍👨‍👧",
        "homosexual-gay-family-boy-girl": "👨‍👨‍👧‍👦",
        "homosexual-gay-family-boy-boy": "👨‍👨‍👦‍👦",
        "homosexual-gay-family-girl-girl": "👨‍👨‍👧‍👧",
        "family-woman-boy": "👩‍👦",
        "family-woman-girl": "👩‍👧",
        "family-woman-boy-girl": "👩‍👧‍👦",
        "family-woman-boy-boy": "👩‍👦‍👦",
        "family-woman-girl-girl": "👩‍👧‍👧",
        "family-man-boy": "👨‍👦",
        "family-man-girl": "👨‍👧",
        "family-man-boy-girl": "👨‍👧‍👦",
        "family-man-boy-boy": "👨‍👦‍👦",
        "family-man-girl-girl": "👨‍👧‍👧",
        "dua-palms-together-hands": "🤲",
        "open-hands": "👐",
        "raising-hands": "🙌",
        "clapping-hands": "👏",
        handshake: "🤝",
        "like-nice-thumbs-up": "👍",
        "dislike-bad-thumbs-down": "👎",
        "oncomming-bro-fist": "👊",
        "raised-fist": "✊",
        "left-fist-punch": "🤛",
        "right-fist-punch": "🤜",
        crossfingers: "🤞",
        "peace-victory-hands": "✌️",
        "love-you-hands": "🤟",
        "heavy-metal-horns-hands": "🤘",
        "perfect-ok-hands": "👌",
        "left-index-that": "👈",
        "right-index-this": "👉",
        "up-index": "👆",
        "down-index": "👇",
        "up-index2": "☝️",
        hands: "✋",
        "back-hands": "🤚",
        "hands-fingers": "🖐",
        "vulcan-hands": "🖖",
        "shaking-hands-hello": "👋",
        "call-shaka-hand": "🤙",
        "strong-muscle-biceps": "💪",
        "fuck-middle-finger": "🖕",
        "writing-hands": "✍️",
        "praying-please": "🙏",
        ring: "💍",
        lipstick: "💄",
        "smack-kiss": "💋",
        mouth: "👄",
        tongue: "👅",
        ears: "👂",
        nose: "👃",
        footstep: "👣",
        eye: "👁",
        eyes: "👀",
        brain: "🧠",
        "speaking-silhouette-person": "🗣",
        "bust-man-person-silhouette": "👤",
        "bust-men-persons-silhouette-group": "👥",
        coat: "🧥",
        "clothes-woman": "👚",
        "clothes-man": "👕",
        "jeans-pants": "👖",
        "neck-tie-business-shirt": "👔",
        dress: "👗",
        bikini: "👙",
        kimono: "👘",
        "stiletto-high-heels-shoe": "👠",
        "sandal-woman": "👡",
        "woman-boot": "👢",
        "shoe-man": "👞",
        "running-shoe-sneaker": "👟",
        socks: "🧦",
        gloves: "🧤",
        scarf: "🧣",
        "top-hat": "🎩",
        "billed-cap-hat": "🧢",
        "hat-woman": "👒",
        "graduation-hat-college-student": "🎓",
        "rescue-helmet": "⛑",
        crown: "👑",
        "clutch-bag": "👝",
        purse: "👛",
        "hand-bag": "👜",
        "brief-case": "💼",
        "school-back-pack-bag": "🎒",
        glasses: "👓",
        "sun-glasses": "🕶",
        umbrella: "🌂"
      },
      "Animals & Nature": {
        "dog-face": "🐶",
        "cat-face": "🐱",
        "mouse-face": "🐭",
        "hamster-face": "🐹",
        "rabbit-face": "🐰",
        "fox-face": "🦊",
        "brown-bear-face": "🐻",
        "panda-face": "🐼",
        "koala-facd": "🐨",
        "tiger-face": "🐯",
        "lion-face": "🦁",
        "cow-face": "🐮",
        "pig-face": "🐷",
        "pig-nose-snout": "🐽",
        "frog-face": "🐸",
        "monkey-face": "🐵",
        "see-no-evil-monkey-cheeky": "🙈",
        "hear-no-evil-monkey-kikazaru": "🙉",
        "speak-no-evil-monkey-kikazaru": "🙊",
        monkey: "🐒",
        chicken: "🐔",
        penguin: "🐧",
        bird: "🐦",
        "baby-chicken-face": "🐤",
        "hatching-baby-chicken": "🐣",
        "baby-chicken": "🐥",
        duck: "🦆",
        eagle: "🦅",
        owl: "🦉",
        bat: "🦇",
        "wolf-face": "🐺",
        "boar-wild-pig": "🐗",
        "horse-face": "🐴",
        "unicorn-face": "🦄",
        "honey-bee": "🐝",
        "caterpillar-centipede-bug": "🐛",
        butterfly: "🦋",
        snail: "🐌",
        "sea-shell": "🐚",
        ladybug: "🐞",
        ant: "🐜",
        cricket: "🦗",
        spider: "🕷",
        "spider-web": "🕸",
        scorpion: "🦂",
        turtle: "🐢",
        snake: "🐍",
        lizard: "🦎",
        "t-rex-dinosaur": "🦖",
        "diplodocus-brontosaurus-sauropod-dinosaur": "🦕",
        octopus: "🐙",
        squid: "🦑",
        shrimp: "🦐",
        crab: "🦀",
        "blow-fish": "🐡",
        "tropical-fish": "🐠",
        fish: "🐟",
        dolphin: "🐬",
        "spouting-whale": "🐳",
        whale: "🐋",
        shark: "🦈",
        "crododile-alligator": "🐊",
        tiger: "🐅",
        leopard: "🐆",
        zebra: "🦓",
        "gorilla-harambe-king-kong-monkey": "🦍",
        elephant: "🐘",
        rhinoceros: "🦏",
        camel: "🐪",
        "asian-two-bumped-camel": "🐫",
        girafe: "🦒",
        "water-buffalo": "🐃",
        "bullock-oxen": "🐂",
        cow: "🐄",
        horse: "🐎",
        pig: "🐖",
        ram: "🐏",
        "ewe-sheep-lamb": "🐑",
        goat: "🐐",
        deer: "🦌",
        dog: "🐕",
        "poodle-dog": "🐩",
        cat: "🐈",
        "cock-rooster": "🐓",
        turkey: "🦃",
        dove: "🕊",
        rabbit: "🐇",
        mouse: "🐁",
        rat: "🐀",
        "chipmunk-squirrel": "🐿",
        hedgehog: "🦔",
        "paw-prints-foot": "🐾",
        dragon: "🐉",
        "dragon-face": "🐲",
        "desert-wild-west-cactus": "🌵",
        "christmas-xmas-tree": "🎄",
        "pine-tree-evergreen": "🌲",
        "deciduous-tree-rounded": "🌳",
        "palm-coconut-tropical-tree": "🌴",
        "seedling-spring-sprouting": "🌱",
        "herb-plant-crop": "🌿",
        shamrock: "☘️",
        "clover-ireland-lucky": "🍀",
        "bamboo-pine-decoration-kadomatsu": "🎍",
        "tanabata-wish-tree": "🎋",
        "spring-leaves-green": "🍃",
        "fallen-leaves-automn": "🍂",
        "mapple-leaf-canada": "🍁",
        "mushroom-toadstool": "🍄",
        "wheat-crop-farming-rice": "🌾",
        "bouquet-flowers": "💐",
        "tulip-flower": "🌷",
        "rose-flower": "🌹",
        "wilted-dead-flower": "🥀",
        "hibiscus-flower": "🌺",
        "cherry-blossom-pink-flower": "🌸",
        "blossom-yellow-flower": "🌼",
        "sunflower-yellow": "🌻",
        "sun-face": "🌞",
        "moon-face": "🌝",
        "first-quarter-moon-face": "🌛",
        "last-quarter-moon-face": "🌜",
        "new-moon-face": "🌚",
        "full-moon": "🌕",
        "waning-gibbous-moon": "🌖",
        "last-quarter-moon": "🌗",
        "waning-crescent-moon": "🌘",
        "new-moon": "🌑",
        "waxing-crescent-moon": "🌒",
        "first-quarter-moon": "🌓",
        "waxing-gibbous-moon": "🌔",
        "crescent-moon": "🌙",
        "earth-globe-planet-world-america": "🌎",
        "earth-globe-planet-world-europe-africa": "🌍",
        "earth-globe-planet-world-asia-australia": "🌏",
        "circle-star-dizzy": "💫",
        "yellow-star": "⭐️",
        "shining-glowing-exploding-gold-star": "🌟",
        "sparkles-stars": "✨",
        "lightning-bolt-thunderbolt-high-voltage": "⚡️",
        "comet-light-beam": "☄️",
        "bang-explosion-impact-boom-collision": "💥",
        "fire-flame-hot": "🔥",
        tornado: "🌪",
        "gay-pride-rainbow": "🌈",
        sunshine: "☀️",
        "sun-behind-small-cloud": "🌤",
        "sun-behind-cloud": "⛅️",
        "Sun Behind Large Cloud": "🌥",
        cloud: "☁️",
        "sun-Behind-rain-cloud": "🌦",
        "cloud-with-rain": "🌧",
        "cloud-with-lightning-and-rain": "⛈",
        "cloud-with-lightning": "🌩",
        "cloud-with-snow": "🌨",
        snowflake: "❄️",
        "snowman-snow": "☃️",
        snowman: "⛄️",
        "wind-face-mother-nature": "🌬",
        "fast-steam-dashing-away-vaping-wind": "💨",
        "droplet-water": "💧",
        "sweat-droplets-water-splash": "💦",
        "umbrella-rain-drops": "☔️",
        umbrella: "☂️",
        "beach-waves-sea-ocean": "🌊",
        "fog-pollution": "🌫"
      },
      "Food & Drink": {
        "green-apple": "🍏",
        "red-apple": "🍎",
        pear: "🍐",
        "tangerine-mandarin-orange": "🍊",
        lemon: "🍋",
        banana: "🍌",
        watermelon: "🍉",
        grapes: "🍇",
        strawberry: "🍓",
        melon: "🍈",
        cherries: "🍒",
        "peach-butt-bottom": "🍑",
        pineapple: "🍍",
        coconut: "🥥",
        "kiwi-fruit": "🥝",
        tomato: "🍅",
        "eggplant-phallic": "🍆",
        avocado: "🥑",
        broccoli: "🥦",
        cucumber: "🥒",
        "hot-pepper-spicy-chili": "🌶",
        "corn-maize": "🌽",
        carrot: "🥕",
        potato: "🥔",
        "yam-sweet-potato": "🍠",
        croissant: "🥐",
        bread: "🍞",
        "baguette-bread": "🥖",
        pretzel: "🥨",
        "cheese-wedge": "🧀",
        egg: "🥚",
        "cooking-breakfast-fried-egg": "🍳",
        "pancakes-crepes": "🥞",
        bacon: "🥓",
        "meat-steak": "🥩",
        "poultry-leg-turkey-chicken-drumstick": "🍗",
        "meat-bone-barbecue-bbq": "🍖",
        "hotdog-sausage": "🌭",
        "hamburger-cheese": "🍔",
        "french-fries": "🍟",
        "pizza-pepperoni": "🍕",
        sandwich: "🥪",
        "doner-kebab-souvlaki-pita-sandwich": "🥙",
        taco: "🌮",
        "burrito-wrap": "🌯",
        "green-salad": "🥗",
        "paellla-pan-food": "🥘",
        "canned-food": "🥫",
        "spaghetti-pasta": "🍝",
        "steaming-bowl-noodles-chopsticks": "🍜",
        "bowl-pot-food": "🍲",
        "curry-rice-indian-food": "🍛",
        "sushi-sashimi": "🍣",
        "bento-box-lunch": "🍱",
        dumpling: "🥟",
        "fried-shrimp-prawn": "🍤",
        "nori-rice-ball": "🍙",
        "cooked-rice-bowl": "🍚",
        "rice-cracker": "🍘",
        "fish-cake-swirl": "🍥",
        "fortune-cookie": "🥠",
        "oden-kebab-skewer": "🍢",
        "dessert-stick-dango": "🍡",
        "snow-cone-sahved-ice": "🍧",
        "ice-cream-dessert": "🍨",
        "soft-ice-cream": "🍦",
        pie: "🥧",
        "piece-of-cake": "🍰",
        "birthday-cake": "🎂",
        "flan-custard-pudding-cream-caramel": "🍮",
        lollypop: "🍭",
        "candy-sweed": "🍬",
        "chocolate-bar": "🍫",
        popcorn: "🍿",
        "donut-doughnut": "🍩",
        "biscuit-cookie": "🍪",
        "acorn-chestnut": "🌰",
        peanuts: "🥜",
        "honey-pot": "🍯",
        "glass-milk": "🥛",
        "baby-bottle-feeding": "🍼",
        "tea-coffee-hot-chocolate": "☕️",
        "green-tea-cup": "🍵",
        "cup-straw-soda-soft-drink-milkshake": "🥤",
        "sake-rice-wine": "🍶",
        "beer-mug-lager": "🍺",
        "beers-cheers-clinking": "🍻",
        "clinking-champagne-celebration": "🥂",
        "red-wine-glass-alcohol": "🍷",
        "trumbler-glass-bourbon-rum-whisky": "🥃",
        "cocktail-glass-martini": "🍸",
        "tropical-drink-glass": "🍹",
        "champagne-celebration": "🍾",
        spoon: "🥄",
        "fork-knife-cutlery": "🍴",
        "fork-knife-plate-restaurant": "🍽",
        "cereal-bowl": "🥣",
        "takeout-box": "🥡",
        chopsticks: "🥢"
      }
    };
  }
  addEventListeners(el) {
    const search = el.querySelector(".search");

    const callback = e => {
      const value = e.currentTarget.value;
      const array = value.split(" ");
      const join = `(${array.join(")(?=.*")})`;
      const regex = new RegExp(join, "i");
      console.log(regex);
      if (e.currentTarget.value == "") {
        el = this.gen(el);
      } else {
        el = this.gen(el, regex);
      }
    };
    search.addEventListener("input", callback);
  }
  gen(body, regex = null) {
    const list = this.list;

    const keys = Object.keys(list);
    const values = Object.values(list);

    const emojis = body.querySelector(".emojis");
    emojis.innerHTML = "";
    for (let i = 0; i < keys.length; i++) {
      const h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode(keys[i]));

      emojis.appendChild(h3);
      const v = values[i];
      const names = Object.keys(v);
      const em = Object.values(v);
      if (regex == null) {
        emojis.innerHTML += em.join(""); // not recommended but easy
      } else {
        for (let a = 0; a < names.length; a++) {
          if (regex.test(names[a])) {
            emojis.innerHTML += em[a];
          }
        }
      }
    }
    if (!twemoji) {
      throw "Emojify requires Twemoji to work. Please contact the developer or check the docs for more informations.";
    }
    twemoji.parse(body);

    // Emojis events

    const emojiList = emojis.querySelectorAll(".emoji");
    emojiList.forEach(emoji => {
      emoji.addEventListener("click", ev => {
        const unicode = ev.currentTarget.alt;
        const pos = this.input.selectionStart;

        this.input.value = this.input.value.splice(pos, 0, unicode);
      });
    });
    // Menu events
    let menu = body.querySelectorAll(".menu > div");

    const menu_new = menu[0].parentNode.cloneNode(true);
    menu[0].parentNode.parentNode.replaceChild(menu_new, menu[0].parentNode);

    menu = body.querySelectorAll(".menu > div");
    const titles = body.querySelectorAll(".emojis > h3");

    menu.forEach(e => {
      e.addEventListener("click", ev => {
        const target = ev.currentTarget;
        const index = [...target.parentElement.children].indexOf(target);
        const topPos = titles[index].offsetTop - emojis.offsetTop;

        emojis.scrollTop = topPos;
      });
    });

    return body;
  }
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Emojify());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new Emojify();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Emojify = new Emojify();
} else if (typeof global !== "undefined") {
  global.Emojify = new Emojify();
}
