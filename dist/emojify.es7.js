/*****************************************************

	                    Emojify
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
class Emojify {
  constructor() {
    this.list = this.createList();
  }
  createList() {
    return {
      People: {
        "happy-smiley-grinning": "😀",
        "happy-smiley-grinning": "😁",
        "laughing-joy-lol": "😂",
        "rofl-laughing-joy-lol": "🤣",
        "happy-smiley-grinning": "😃",
        "happy-smiley-grinning": "😄",
        "happy-smiley-grinning-sweat": "😅",
        "laughing-lol-joy-xd": "😆",
        winking: "😉",
        "happy-smiley": "😊",
        "goofy-hungry": "😋",
        "cool-sunglass": "😎",
        "heart-love-like": "😍",
        "heart-love-kiss": "😘",
        "duck-kiss-whistling": "😗",
        "duck-kiss-whistling": "😙",
        "duck-kiss-whistling": "😚",
        "happy-smiley": "☺️",
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
