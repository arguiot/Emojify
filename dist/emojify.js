"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/*****************************************************

	                    Emojify
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
var Emojify = (function() {
  function Emojify() {
    _classCallCheck(this, Emojify);

    this.list = this.createList();
  }

  _createClass(Emojify, [
    {
      key: "createElement",
      value: function createElement() {
        var model =
          "\n\t\t\t<div class=\"container\">\n\t\t\t  <input type=\"text\" class=\"search\" placeholder=\"Find your Emoji\">\n\t\t\t  <lunar-icon icon=\"search\"></lunar-icon>\n\t\t\t  <div class=\"emojis\"></div>\n\t\t\t  <div class=\"menu\">\n\t\t\t    <div class=\"people\">\uD83D\uDE00</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<style>\n\t\t\t.container {\n\t\t\t  width: 500px;\n\t\t\t  height: 300px;\n\t\t\t  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);\n\t\t\t  border-radius: 5px;\n\t\t\t  background: white;\n\t\t\t}\n\t\t\t.container .search {\n\t\t\t  width: 80%;\n\t\t\t  height: 50px;\n\t\t\t  margin: 20px;\n\t\t\t  border: none;\n\t\t\t  border-radius: 5px;\n\t\t\t  background: rgba(0, 0, 0, 0.1);\n\t\t\t  box-sizing: border-box;\n\t\t\t  padding: 10px;\n\t\t\t}\n\t\t\t.container lunar-icon {\n\t\t\t  position: relative;\n\t\t\t  left: -60px;\n\t\t\t  font-size: 20px;\n\t\t\t  top: 4px;\n\t\t\t}\n\t\t\t.container .emojis {\n\t\t\t  width: 90%;\n\t\t\t  height: 70%;\n\t\t\t  box-sizing: border-box;\n\t\t\t  padding: 20px;\n\t\t\t  padding-top: 0;\n\t\t\t  margin: 0 auto;\n\t\t\t  overflow: auto;\n\t\t\t}\n\t\t\t.container .emojis .emoji {\n\t\t\t  display: inline;\n\t\t\t  width: 20px;\n\t\t\t  padding: 5px;\n\t\t\t  margin: 5px;\n\t\t\t  border-radius: 5px;\n\t\t\t  cursor: pointer;\n\t\t\t}\n\t\t\t.container .emojis .emoji:hover {\n\t\t\t  background: rgba(0, 0, 0, 0.1);\n\t\t\t}\n\t\t\t.container .emojis::-webkit-scrollbar {\n\t\t\t  width: 1em;\n\t\t\t}\n\t\t\t.container .menu {\n\t\t\t  width: 50px;\n\t\t\t  display: flex;\n\t\t\t  justify-content: center;\n\t\t\t  flex-direction: column;\n\t\t\t  align-items: center;\n\t\t\t  transform: translate(435px, -300px);\n\t\t\t  box-sizing: border-box;\n\t\t\t  padding: 10px;\n\t\t\t  height: 100%;\n\t\t\t}\n\t\t\t.container .menu .emoji {\n\t\t\t  display: inline;\n\t\t\t  width: 30px;\n\t\t\t  padding: 5px;\n\t\t\t  margin: 5px;\n\t\t\t  border-radius: 5px;\n\t\t\t  cursor: pointer;\n\t\t\t}\n\t\t\t.container .menu .emoji:hover {\n\t\t\t  background: rgba(0, 0, 0, 0.1);\n\t\t\t}\n\t\t\t</style>\n\t\t\t";

        var parser = new DOMParser();

        var html = parser.parseFromString(model, "text/html");

        return html.body;
      }
    },
    {
      key: "createList",
      value: function createList() {
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
    }
  ]);

  return Emojify;
})();
// Browserify / Node.js

if (typeof define === "function" && define.amd) {
  define(function() {
    return new Emojify();
  });
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
