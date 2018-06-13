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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

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
      key: "createList",
      value: function createList() {
        var _People;

        return {
          People: ((_People = {
            "happy-smiley-grinning": "😀"
          }),
          _defineProperty(_People, "happy-smiley-grinning", "😁"),
          _defineProperty(_People, "laughing-joy-lol", "😂"),
          _defineProperty(_People, "rofl-laughing-joy-lol", "🤣"),
          _defineProperty(_People, "happy-smiley-grinning", "😃"),
          _defineProperty(_People, "happy-smiley-grinning", "😄"),
          _defineProperty(_People, "happy-smiley-grinning-sweat", "😅"),
          _defineProperty(_People, "laughing-lol-joy-xd", "😆"),
          _defineProperty(_People, "winking", "😉"),
          _defineProperty(_People, "happy-smiley", "😊"),
          _defineProperty(_People, "goofy-hungry", "😋"),
          _defineProperty(_People, "cool-sunglass", "😎"),
          _defineProperty(_People, "heart-love-like", "😍"),
          _defineProperty(_People, "heart-love-kiss", "😘"),
          _defineProperty(_People, "duck-kiss-whistling", "😗"),
          _defineProperty(_People, "duck-kiss-whistling", "😙"),
          _defineProperty(_People, "duck-kiss-whistling", "😚"),
          _defineProperty(_People, "happy-smiley", "☺️"),
          _defineProperty(_People, "happy-smiley-fine", "🙂"),
          _defineProperty(_People, "hug-smiley-tada", "🤗"),
          _defineProperty(_People, "excited-wow-starry", "🤩"),
          _defineProperty(_People, "thinker", "🤔"),
          _defineProperty(_People, "thinker-what", "🤨"),
          _defineProperty(_People, "ok-neutral-straight", "😐"),
          _defineProperty(_People, "straight-neutral", "😑"),
          _defineProperty(_People, "silence-mouthless-blank", "😶"),
          _defineProperty(_People, "eye-roll-pfff", "🙄"),
          _defineProperty(_People, "flirting-smirking-suggestive", "😏"),
          _defineProperty(_People, "helpless-persevering-scrunched", "😣"),
          _defineProperty(_People, "disappointed-sad", "😥"),
          _defineProperty(_People, "surprised-oh", "😮"),
          _defineProperty(_People, "zipper-quiet-silence", "🤐"),
          _defineProperty(_People, "surprised-ok-oh", "😯"),
          _defineProperty(_People, "sleepy-tired-tear", "😪"),
          _defineProperty(_People, "exhausted-tired", "😫"),
          _defineProperty(_People, "sleeping-zzz-snoring", "😴"),
          _defineProperty(_People, "pleased-humble-relieved", "😌"),
          _defineProperty(_People, "tongue-cheeky", "😛"),
          _defineProperty(_People, "winking-tongue", "😜"),
          _defineProperty(_People, "squinting-tongue", "😝"),
          _defineProperty(_People, "drool", "🤤"),
          _defineProperty(_People, "unamused-meh-unimpressed", "😒"),
          _defineProperty(_People, "hard-work-downcast-sad", "😓"),
          _defineProperty(_People, "pensive-sad", "😔"),
          _defineProperty(_People, "confused-puzzled", "😕"),
          _defineProperty(_People, "silly-sarcasm-upside-down", "🙃"),
          _defineProperty(_People, "money-doller-rich", "🤑"),
          _defineProperty(_People, "astonished-shocked-wow", "😲"),
          _defineProperty(_People, "frowning-no-bad", "☹️"),
          _defineProperty(_People, "frowning-no-bad-sad", "🙁"),
          _defineProperty(_People, "confounded-scrunched-quivering", "😖"),
          _defineProperty(_People, "sad-disappointed", "😞"),
          _defineProperty(_People, "sad-worried", "😟"),
          _defineProperty(_People, "argh-mad-frustrating", "😤"),
          _defineProperty(_People, "sad-crying-tear", "😢"),
          _defineProperty(_People, "loudly-crying-sad-tear", "😭"),
          _defineProperty(_People, "frowning-yawning", "😦"),
          _defineProperty(_People, "anguished-pained", "😧"),
          _defineProperty(_People, "fearful-scared-surprised-blue", "😨"),
          _defineProperty(_People, "weary-distraught-wailing", "😩"),
          _defineProperty(_People, "exploding-mind-blowing-wow", "🤯"),
          _defineProperty(_People, "grimacing-awkward-nervous", "😬"),
          _defineProperty(_People, "blue-anxious-nervous-concerned", "😰"),
          _defineProperty(_People, "screaming-blue-fearful", "😱"),
          _defineProperty(_People, "flushed-shame-embarassed", "😳"),
          _defineProperty(_People, "zany-wild-crazy-excited", "🤪"),
          _defineProperty(_People, "dizzy-dead", "😵"),
          _defineProperty(_People, "angry-mad-pouting-red", "😡"),
          _defineProperty(_People, "angry-mad", "😠"),
          _defineProperty(_People, "cursing-mad-angry-swearing", "🤬"),
          _defineProperty(_People, "surgical-mask-medical", "😷"),
          _defineProperty(_People, "sick-thermometer", "🤒"),
          _defineProperty(_People, "injured-bandage", "🤕"),
          _defineProperty(_People, "sick-nauseated-vomit-green", "🤢"),
          _defineProperty(_People, "vomit", "🤮"),
          _defineProperty(_People, "sneezing-sick", "🤧"),
          _defineProperty(_People, "angel-halo", "😇"),
          _defineProperty(_People, "cowboy-sherif", "🤠"),
          _defineProperty(_People, "clown", "🤡"),
          _defineProperty(_People, "lying-sniff", "🤥"),
          _defineProperty(_People, "shh-quiet-silence", "🤫"),
          _defineProperty(_People, "shh-silence-hand", "🤭"),
          _defineProperty(_People, "monocle-thinker", "🧐"),
          _defineProperty(_People, "nerd-geek", "🤓"),
          _defineProperty(_People, "smile-devil-purple", "😈"),
          _defineProperty(_People, "angry-devil-purple", "👿"),
          _defineProperty(_People, "ogre-scary-red-monster", "👹"),
          _defineProperty(_People, "goblin-red-monster", "👺"),
          _defineProperty(_People, "death-skull-skeleton", "💀"),
          _defineProperty(_People, "ghost-halloween", "👻"),
          _defineProperty(_People, "alien-et", "👽"),
          _defineProperty(_People, "robot", "🤖"),
          _defineProperty(_People, "poop", "💩"),
          _defineProperty(_People, "happy-cat-smile", "😺"),
          _defineProperty(_People, "grinning-smiley-cat", "😸"),
          _defineProperty(_People, "lol-laughing-cat", "😹"),
          _defineProperty(_People, "heart-eye-love-cat", "😻"),
          _defineProperty(_People, "smirking-cat", "😼"),
          _defineProperty(_People, "kissing-cat", "😽"),
          _defineProperty(_People, "scared-cat-screaming-fearful", "🙀"),
          _defineProperty(_People, "sad-tear-crying-cat", "😿"),
          _defineProperty(_People, "grumpy-pouting-cat", "😾"),
          _People)
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
