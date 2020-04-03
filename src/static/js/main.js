(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ0FELElBREEsQ0FDdEJDLE9BRHNCO0FBQUEsTUFDYkMsUUFEYSxHQUNBRixJQURBLENBQ2JFLFFBRGE7QUFFOUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGFuZGxlTWVzc2FnZU5vdGlmKGRhdGEpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UsIG5pY2tuYW1lIH0gPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");
socket.on("Hello", function () {
  return console.log("Somebody joined");
});

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODJiYzlhOTEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0Iiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBRUFELE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLE9BQVYsRUFBbUI7QUFBQSxTQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixDQUFOO0FBQUEsQ0FBbkI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDMUJOLEVBQUFBLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTFCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JFLE9BQXBCO0FBQ0g7O0FBRUQsU0FBU0UsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDM0JULEVBQUFBLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUUsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0g7O0FBRURULE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLGNBQVYsRUFBMEJRLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5zb2NrZXQub24oXCJIZWxsb1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIlNvbWVib2R5IGpvaW5lZFwiKSk7XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xuICAgIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcbn1cblxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcbiAgICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XG59XG5cbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xuIl19
},{"./chat":1}]},{},[2])