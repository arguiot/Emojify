/*****************************************************

	                    Emojify
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
class Emojify {
  constructor() {
    this.list = this.createList();
  }
  createElement() {
    const model = `
			<div class="container">
			  <input type="text" class="search" placeholder="Find your Emoji">
			  <lunar-icon icon="search"></lunar-icon>
			  <div class="emojis"></div>
			  <div class="menu">
			    <div class="people">😀</div>
			  </div>
			</div>
			<style>
			.container {
			  width: 500px;
			  height: 300px;
			  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
			  border-radius: 5px;
			  background: white;
			}
			.container .search {
			  width: 80%;
			  height: 50px;
			  margin: 20px;
			  border: none;
			  border-radius: 5px;
			  background: rgba(0, 0, 0, 0.1);
			  box-sizing: border-box;
			  padding: 10px;
			}
			.container lunar-icon {
			  position: relative;
			  left: -60px;
			  font-size: 20px;
			  top: 4px;
			}
			.container .emojis {
			  width: 90%;
			  height: 70%;
			  box-sizing: border-box;
			  padding: 20px;
			  padding-top: 0;
			  margin: 0 auto;
			  overflow: auto;
			}
			.container .emojis .emoji {
			  display: inline;
			  width: 20px;
			  padding: 5px;
			  margin: 5px;
			  border-radius: 5px;
			  cursor: pointer;
			  box-sizing: content-box;
			}
			.container .emojis .emoji:hover {
			  background: rgba(0, 0, 0, 0.1);
			}
			.container .emojis::-webkit-scrollbar {
			  width: 1em;
			}
			.container .menu {
			  width: 50px;
			  display: flex;
			  justify-content: center;
			  flex-direction: column;
			  align-items: center;
			  transform: translate(435px, -300px);
			  box-sizing: border-box;
			  padding: 10px;
			  height: 100%;
			}
			.container .menu .emoji {
			  display: inline;
			  width: 30px;
			  padding: 5px;
			  margin: 5px;
			  border-radius: 5px;
			  cursor: pointer;
			  box-sizing: content-box;
			}
			.container .menu .emoji:hover {
			  background: rgba(0, 0, 0, 0.1);
			}
			</style>
			`;

    const parser = new DOMParser();

    const html = parser.parseFromString(model, "text/html");

    const out = this.gen(html.body);
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
        "grumpy-pouting-cat": "😾"
      }
    };
  }
  gen(body, regex = null) {
    const list = this.list;

    const keys = Object.keys(list);
    const values = Object.values(list);

    const emojis = body.querySelector(".emojis");
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
        for (let a = 0; i < names.length; i++) {
          if (regex.test(names[a])) {
            emojis.innerHTML += em[a];
          }
        }
      }
    }
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
