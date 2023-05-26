function countdownzzzzz(seconds,element) {
  var countdownElement = document.querySelector(element);
  countdownElement.innerText = seconds;

  var timer = setInterval(function() {
    if (!continueRunning) {
      return; // Stop the function
    }
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      countdownElement.innerText = "0";
    } else {
      console.log(seconds);
      countdownElement.innerText = seconds;
    }
  }, 1000);
}

function makeClearAll(){
 let check_htmldiv = document.querySelector('#dem-time');
 iterationCount = 0;
 check_htmldiv.innerHTML = 'Hoàn Thành !';
 setTimeout( ()=>{
  check_htmldiv.remove();
},5000)
}

function makeCountDown(text,dl){
  let createdivElement = document.createElement('div');
  let check_htmldiv = document.querySelector('#dem-time');

  let html_code = `
  <div id="dem-time" style="position: fixed;
  background: #e91e63c2;
  bottom: 2%;
  z-index: 9999;
  left: 50%;
  transform: translate(-50%);
  padding: 10px 15px;
  color: white;
  border-radius: 12px;
  font-size: 32px;
  font-weight: bolder;

  ">
  <span>${text}</span>
  <span id="countdown-fuk" class="text-4xl font-bold"></span>
  <span class="text-gray-500">s</span>
  </div>
  `;
  if(check_htmldiv){

    check_htmldiv.remove();

  }
  createdivElement.innerHTML = html_code;
  document.body.appendChild(createdivElement);
  let handle_timecounter = dl / 1000;
  console.log(handle_timecounter)
  countdownzzzzz(handle_timecounter,'#countdown-fuk');

}

        function runProgram(da,dl,sl){
          if (!continueRunning) {
            return; // Stop the function
          }
          let totalIterations = sl; // Set the desired number of iterations
          let main_container = document.querySelectorAll('div.tiktok-10gdph9-DivContentContainer');
            // let btn_like = main_container.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');
          let btn_like,btn_follow,items_contain;
          let foundIndex = -1;
          for (let i = 0; i < main_container.length; i++) {
            let items = main_container[i];
            let btn_following = items.querySelector('button.tiktok-1bieif7-Button-StyledFollowButton');
            let btn_liker = items.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');
            if (btn_following != null && btn_liker != null) {
              items_contain = btn_following;
              foundIndex = i;
              break;
            }
          }

            // 

          if (foundIndex !== -1) {
            iterationCount++;
            if (iterationCount < totalIterations) {
            let items_contain = main_container[foundIndex];
            items_contain.scrollIntoView({ behavior: 'smooth', block: 'start' });
            btn_follow = items_contain.querySelector('button.tiktok-1bieif7-Button-StyledFollowButton');
            btn_like = items_contain.querySelector('button.tiktok-1ok4pbl-ButtonActionItem');
            let min_rand = 1000;
            let max_rand = Math.round(dl/2);
            let  randomNumber = Math.floor(Math.random() * (max_rand - min_rand + 1)) + min_rand;
        // click like first
         
        setTimeout( ()=>{
                btn_like.click();
              },randomNumber);

               setTimeout( ()=>{
              btn_follow.click();
            },da);
           
          
                let text_toseee = `Đã thực hiện: ${iterationCount} - còn lại: ${totalIterations-iterationCount} - Chờ: `;
            makeCountDown(text_toseee,dl);
             setTimeout( ()=>{ runProgram(da,dl,sl)  },dl); // Delay the next iteration by 10 seconds (10000 milliseconds)
              }else{
                makeClearAll();
              }
          

          }else{
            window.scrollTo({
              top: document.documentElement.scrollHeight,
                    behavior: 'smooth' // Optional: Adds smooth scrolling animation
                  });
                   setTimeout(runProgram(da,dl,sl), dl);

          }

            // Your program code goes here
        }
        let iterationCount = 0;
        let continueRunning = true;
        function myStopFunction() {
          continueRunning =false;
        }
        function myRunApp() {
          continueRunning =true;
        }
        function simulateButtonClick(da,dl,sl) {

          // hàm đếm thời igan
      
          runProgram(da,dl,sl);
      
              // Code to find and trigger the button click on the TikTok page
      
      
      // Start the loop
      
             // Replace this with your actual code to interact with the TikTok page
      }

      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'runscript') {
          // Access the variables from the message
          let da = message.da;
          var dl = message.dl;
          var sl = message.sl;
          myRunApp();
          simulateButtonClick(da,dl,sl)
          // Perform the desired action in the content script using the received variables
          // This code will be executed when the message is received from the popup script
        }else   if (message.action === 'stopscript') {
          // Access the variables from the message
          myStopFunction()
          makeClearAll()
          // Perform the desired action in the content script using the received variables
          // This code will be executed when the message is received from the popup script
        }
      });
