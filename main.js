
// The two querySelectors are taked from html select
let btnHindi = document.querySelector('#plan')
let btnSign = document.querySelectorAll('.btn-warnig')
let inputWarn = document.querySelectorAll('.input-warn')
let warnSign = document.querySelector('.warning')
let warnSign2 = document.querySelector('.warning2')
let warnId2 = document.getElementById('warning1');
let warnId = document.getElementById('warning2');
let warnScreen = screen.width;


function inputWarning() {

  if (btnHindi.value === "hindi" || warnScreen < 767) {
    warnSign.textContent = "";
    warnId2.textContent = "";
    warnId .textContent ="";
    warnSign2.textContent = "";
    
  }




  for (const [inputIndex, inputVal] of inputWarn.entries())




    btnSign.forEach((btnItem, btnIndex) => {
      let btnVal = btnItem;
      let btnIndexVal = btnIndex;

      let userval = inputVal;



    if(btnHindi.value === "hindi" || warnScreen < 767){
       userval.style.border = ""
      }

      btnVal.addEventListener("click", () => {
        if (btnVal && btnIndexVal === 0) {
          if (userval.value === "" && inputIndex === 0) {
            warnSign.textContent = "Email or mobile number is required.";
             userval.style.border ="1px solid red"

            if (btnHindi.value === "hindi") {
              warnSign.textContent = "ईमेल या मोबाइल नंबर डालना ज़रूरी है."
              warnSign.style.marginRight = "35%"

            }



            if (btnHindi.value === "hindi" && screenWidth < 767) {
              warnId2.style.color = "red"
              warnId2.style.fontSize = "14px"
              warnId2.textContent = "ईमेल या मोबाइल नंबर डालना ज़रूरी है."


            } else {
              warnId2.textContent = "Email or mobile number is required."
              warnId2.style.color = "red"
              warnId2.style.fontSize = "14px"
              warnId2.style.display="flex"
              warnId2.style.marginLeft ="5%"
              
            }




          }

        } else if (btnVal && btnIndexVal === 1) {
          
          if (userval.value === "" && btnIndexVal === 1) {
            
            if (userval.value === "" && inputIndex === 1) {
              warnSign2.textContent = "Email or mobile number is required."
              userval.style.border ="1px solid red"

              if (btnHindi.value === "hindi") {
                warnSign2.textContent = "ईमेल या मोबाइल नंबर डालना ज़रूरी है."
                warnSign2.style.marginRight = "53%"
                userval.style.border ="1px solid red"
                
              }

              if (btnHindi.value === "hindi" && screenWidth < 767) {

                warnId.style.color = "red";
                warnId.style.fontSize = "14px";
                warnId.textContent = "ईमेल या मोबाइल नंबर डालना ज़रूरी है.";

              } else {
                warnId.style.color = "red"
                warnId.style.fontSize = "14px"
                warnId.textContent = "Email or mobile number is required."
              }




            }

          }
        }
      })
    })





}

inputWarning()


// This function is  condition to check value is right then execute;
function selector() {
  btnHindi.addEventListener('change', () => {
    if (btnHindi.value === "hindi") {
      allPages()

      console.log("hindi selected");
    } else {
      pageReload()

    }
  })

}



// This function is hold the execution function 
function allPages() {
  hindiLangFirstPage();
  hindiLangSecondPage();
  hindiLangThirdPage();
  hindiLangFourthPage();
  hindiLangFifthPage();
  hindiLangSixthPage();
  hindiLangSeventhPage();
  inputWarning()
}

// This function is to reload the page when the user select english option
function pageReload() {
  setTimeout(() => {
    location.reload()
  }, 2000)
}

// The screenWidth variable is to take width of the page
let screenWidth = screen.width;

// This hindiLangFirstPage() function is to change innerText of  html section1 
function hindiLangFirstPage() {
  let firstH1 = document.getElementById("first-h1");
  let firstH3 = document.getElementById("first-h3");
  let firstP = document.getElementById("first-p");
  let inputEl = document.getElementById("input-el");
  let signIn = document.getElementById("sign-in");

  firstH1.textContent = "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ";
  firstH3.textContent = "जहां चाहें देखें. जब चाहें कैंसल करें.";
  firstP.textContent = "देखने के लिए तैयार? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस या मोबाइल नंबर डालें.";
  inputEl.placeholder = "ईमेल या मोबाइल नंबर"
  signIn.innerHTML = 'शुरू करें <i  class="fas fa-angle-right arrow"></i>';

  signIn.style.fontWeight = "400"

  if (screenWidth < 767) {
    firstH1.style.fontSize = "31px"
    firstH3.style.fontSize = "18px"
    firstP.style.fontSize = "18px";

  }
}

// This hindiLangSecondPage() function is to change innerText of  html section2 
function hindiLangSecondPage() {

  let secondH1 = document.getElementById("second-h1");
  let secondP = document.getElementById("second-p")

  secondH1.textContent = "अपने टीवी पर आनंद लें";
  secondP.textContent = "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";

  if (screenWidth < 767) {
    secondH1.style.fontSize = "30px"
    secondP.style.fontSize = "17px"

  }
}

// This hindiLangThirdPage() function is to change innerText of  html section3 
function hindiLangThirdPage() {
  let thirdH1 = document.getElementById('third-h1');
  let thirdP = document.getElementById('third-p')
  let downloadEl = document.getElementById('download-el')

  thirdH1.textContent = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें";
  thirdP.textContent = "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.";
  downloadEl.textContent = "डाउनलोड हो रहा है...";
}

// This hindiLangFourthPage() function is to change innerText of  html section4 
function hindiLangFourthPage() {
  let fourthH1 = document.getElementById('fourth-h1')
  let fourthp = document.getElementById('fourth-p')

  fourthH1.textContent = "हर जगह देखें";
  fourthp.textContent = "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";

  if (screenWidth < 767) {
    fourthp.style.fontWeight = "400";
    fourthp.style.fontSize = "17px"
  }
}

// This hindiLangFifthPage() function is to change innerText of  html section5 
function hindiLangFifthPage() {
  let fifthH1 = document.getElementById('fifth-h1');
  let fifthP = document.getElementById('fifth-p');
  let kidsPic = document.getElementById('kid-pic')

  fifthH1.textContent = "बच्चों के लिए प्रोफ़ाइल बनाएं";
  fifthP.textContent = "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."
  kidsPic.src = "./image/kids-pic-hindi.png";
  if (screenWidth < 767) {
    fifthP.style.fontWeight = "400"
  }
}

// This hindiLangSixthPage() function is to change innerText of  html section6 accordion
function hindiLangSixthPage() {
  let sixthH1 = document.getElementById('sixth-h1');
  let sixthH3 = document.getElementById('sixth-h3');
  let sixthInputEle = document.getElementById('sixth-input-el')
  let sixBtnEl = document.getElementById('sixth-btnel');
  let accPage01 = document.getElementById('acc-page01');
  let accContent01 = document.getElementById('acc-content01');
  let accPage02 = document.getElementById('acc-page02')
  let accContent02 = document.getElementById('acc-content02');
  let accPage03 = document.getElementById('acc-page03')
  let accContent03 = document.getElementById('acc-content03');
  let accPage04 = document.getElementById('acc-page04')
  let accContent04 = document.getElementById('acc-content04');
  let accPage05 = document.getElementById('acc-page05')
  let accContent05 = document.getElementById('acc-content05');
  let accPage06 = document.getElementById('acc-page06')
  let accContent06 = document.getElementById('acc-content06');
  let accordionText = document.querySelectorAll('.accordion-button');
  let accordionBody = document.querySelectorAll('.accordion-body')


  sixthH1.textContent = "अक्सर पूछे जाने वाले सवाल";
  accPage01.textContent = "Netflix क्या है?";
  accContent01.innerHTML = "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं. <br> <br> आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!"
  accPage02.textContent = "Netflix की कीमत कितनी है?";
  accContent02.textContent = "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.";
  accPage03.textContent = "मैं कहां देख सकता हूं?";
  accContent03.innerHTML = "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें. <br> <br> आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं. "
  accPage04.textContent = "मैं कैसे कैंसल करूं?";
  accContent04.textContent = "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.";
  accPage05.textContent = "मैं Netflix पर क्या देख सकता/सकती हूं?";
  accContent05.textContent = "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.";
  accPage06.textContent = "क्या Netflix बच्चों के लिए ठीक है?";
  accContent06.innerHTML = "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं. <br> <br> बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें."
  sixthH3.textContent = "देखने के लिए तैयार? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस या मोबाइल नंबर डालें.";
  sixthInputEle.placeholder = "ईमेल या मोबाइल नंबर";
  sixBtnEl.innerHTML = ` शुरू करें  <i class="fas fa-angle-right arrow"></i> `;

  sixBtnEl.style.fontWeight = "400";
  sixBtnEl.style.fontSize = "20px"

  if (screenWidth < 767) {
    sixBtnEl.style.width = "55%";
    sixBtnEl.style.margin = "10px auto 0px auto"
    sixthH3.style.fontSize = "16px";
    // The loop used for to change font size of accordion
    for (let i = 0; i < accordionText.length; i++) {
      let arrayClass = accordionText[i];
      arrayClass.firstElementChild.className = "font-size"
    }

    for (let k = 0; k < accordionBody.length; k++) {
      let accbdy = accordionBody[k]
      accbdy.firstElementChild.className = "fontbody_size"

    }
  }
}

// This hindiLangSeventhPage() function is to change innerText of  html section7
function hindiLangSeventhPage() {

  let netflixChanger = document.getElementById('netflix-hindi')
  let cont = document.getElementById('footer_list');
  let footerList = document.querySelectorAll(".footer-list li");
  let arrayHindi = ["FAQ", "अकाउंट", "इंवेस्टर संबंध", "देखने के तरीके", "प्रायवेसी", "कॉरपोरेट जानकारी", "स्पीड टेस्ट", "सिर्फ़ Netflix पर",
    "सहायता केंद्र", "मीडिया केंद्र", "नौकरियां", "उपयोग की शर्तें", "कुकी प्रेफ़रेंस", "हमसे संपर्क करें", "कानूनी सूचनाएं"];

  footerList.forEach((eve) => {
    eve.className = "li-dis-none";
  })

  for (i = 0; i < arrayHindi.length; ++i) {
    // To create element
    let li = document.createElement('li');
    let a = document.createElement('a');

    //  To create attribute for a tag
    let hrefs = document.createAttribute("href")
    hrefs.value = "#";
    a.setAttributeNode(hrefs);

    // to append the loop to  dom
    a.innerText = arrayHindi[i];
    li.appendChild(a)
    cont.appendChild(li);
  }

  netflixChanger.textContent = "Netflix भारत"

}

// button event and function
btnHindi.addEventListener('click', selector);
