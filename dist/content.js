/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (() => {

eval("function countdownzzzzz(seconds, element) {\n  var countdownElement = document.querySelector(element);\n  countdownElement.innerText = seconds;\n  var timer = setInterval(function () {\n    if (!continueRunning) {\n      return; // Stop the function\n    }\n\n    seconds--;\n    if (seconds < 0) {\n      clearInterval(timer);\n      countdownElement.innerText = \"0\";\n    } else {\n      console.log(seconds);\n      countdownElement.innerText = seconds;\n    }\n  }, 1000);\n}\nfunction makeClearAll() {\n  let check_htmldiv = document.querySelector('#dem-time');\n  check_htmldiv.innerHTML = 'Hoàn Thành !';\n  setTimeout(() => {\n    check_htmldiv.remove();\n  }, 5000);\n}\nfunction makeCountDown(text, dl) {\n  let createdivElement = document.createElement('div');\n  let check_htmldiv = document.querySelector('#dem-time');\n  let html_code = `\n  <div id=\"dem-time\" style=\"position: fixed;\n  background: #e91e63c2;\n  bottom: 2%;\n  z-index: 9999;\n  left: 50%;\n  transform: translate(-50%);\n  padding: 10px 15px;\n  color: white;\n  border-radius: 12px;\n  font-size: 32px;\n  font-weight: bolder;\n\n  \">\n  <span>${text}</span>\n  <span id=\"countdown-fuk\" class=\"text-4xl font-bold\"></span>\n  <span class=\"text-gray-500\">s</span>\n  </div>\n  `;\n  if (check_htmldiv) {\n    check_htmldiv.remove();\n  }\n  createdivElement.innerHTML = html_code;\n  document.body.appendChild(createdivElement);\n  let handle_timecounter = dl / 1000;\n  console.log(handle_timecounter);\n  countdownzzzzz(handle_timecounter, '#countdown-fuk');\n}\nfunction runProgram(da, dl, sl) {\n  if (!continueRunning) {\n    return; // Stop the function\n  }\n\n  let totalIterations = sl; // Set the desired number of iterations\n  let main_container = document.querySelectorAll('div.tiktok-10gdph9-DivContentContainer');\n  // let btn_like = main_container.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');\n  let btn_like, btn_follow, items_contain;\n  let foundIndex = -1;\n  for (let i = 0; i < main_container.length; i++) {\n    let items = main_container[i];\n    let btn_following = items.querySelector('button.tiktok-1bieif7-Button-StyledFollowButton');\n    let btn_liker = items.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');\n    if (btn_following != null && btn_liker != null) {\n      items_contain = btn_following;\n      foundIndex = i;\n      break;\n    }\n  }\n\n  // \n\n  if (foundIndex !== -1) {\n    iterationCount++;\n    if (iterationCount < totalIterations) {\n      let items_contain = main_container[foundIndex];\n      items_contain.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n      btn_follow = items_contain.querySelector('button.tiktok-1bieif7-Button-StyledFollowButton');\n      btn_like = items_contain.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');\n      let min_rand = 1000;\n      let max_rand = Math.round(dl / 2);\n      let randomNumber = Math.floor(Math.random() * (max_rand - min_rand + 1)) + min_rand;\n      // click like first\n\n      setTimeout(() => {\n        btn_like.click();\n      }, randomNumber);\n      setTimeout(() => {\n        btn_follow.click();\n      }, da);\n      let text_toseee = `Đã thực hiện: ${iterationCount} - còn lại: ${totalIterations - iterationCount} - Chờ: `;\n      makeCountDown(text_toseee, dl);\n      setTimeout(() => {\n        runProgram(da, dl, sl);\n      }, dl); // Delay the next iteration by 10 seconds (10000 milliseconds)\n    } else {\n      makeClearAll();\n    }\n  } else {\n    window.scrollTo({\n      top: document.documentElement.scrollHeight,\n      behavior: 'smooth' // Optional: Adds smooth scrolling animation\n    });\n\n    setTimeout(runProgram(da, dl, sl), dl);\n  }\n\n  // Your program code goes here\n}\n\nlet iterationCount = 0;\nlet continueRunning = true;\nfunction myStopFunction() {\n  continueRunning = false;\n}\nfunction myRunApp() {\n  continueRunning = true;\n}\nfunction simulateButtonClick(da, dl, sl) {\n  // hàm đếm thời igan\n\n  runProgram(da, dl, sl);\n\n  // Code to find and trigger the button click on the TikTok page\n\n  // Start the loop\n\n  // Replace this with your actual code to interact with the TikTok page\n}\n\nchrome.runtime.onMessage.addListener((message, sender, sendResponse) => {\n  if (message.action === 'runscript') {\n    // Access the variables from the message\n    let da = message.da;\n    var dl = message.dl;\n    var sl = message.sl;\n    myRunApp();\n    simulateButtonClick(da, dl, sl);\n    // Perform the desired action in the content script using the received variables\n    // This code will be executed when the message is received from the popup script\n  } else if (message.action === 'stopscript') {\n    // Access the variables from the message\n    myStopFunction();\n    makeClearAll();\n    // Perform the desired action in the content script using the received variables\n    // This code will be executed when the message is received from the popup script\n  }\n});\n\n//# sourceURL=webpack://exten/./src/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/test.js"]();
/******/ 	
/******/ })()
;
