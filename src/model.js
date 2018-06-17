const model = `
<div class="container">
  <input type="text" class="search" placeholder="Find your Emoji">
  <lunar-icon icon="search"></lunar-icon>
  <div class="emojis"></div>
  <div class="menu">
    <div class="people">😀</div>
	<div class="animals">🐶</div>
  </div>
</div>
<style>
.container {
  width: 300px;
  height: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: white;
}
.container .search {
  width: 70%;
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
  left: -20%;
  font-size: 20px;
  top: 5px;
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
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  transform: translate(240px, -300px);
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
`
