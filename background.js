// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
console.log("chrome is go?");
let paragraphs =document.getElementsByTagName('p');
for(elt of paragraphs){
  elt.style['background-color']='#FFFF00';
}

    console.log('Background is running.');

    chrome.browserAction.onClicked.addListener(buttonClicked)

    function buttonClicked(tab){
      console.log(tab);
    }
   
