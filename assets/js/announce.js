// // Assisted by WCA@IBM
// // Latest GenAI contribution: ibm/granite-20b-code-instruct-v2

async function retrieveHeadings(docsURL) {
  console.log(docsURL);
  var array2 = "";

  var response = await fetch(docsURL);
  var html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headings = doc.querySelectorAll("h3");
  const firsth2 = doc.querySelector("h2").textContent;

  // console.log("",headings);
  const array1 = Array.from(headings).map(heading => heading.textContent);
  array2 = correctArray(array1);
  return [array2,firsth2];
  
// fetch(docsURL)
//   .then(response => response.text())
//   .then(html => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const headings = doc.querySelectorAll("h3");
//     console.log("",headings);
//     const array1 = Array.from(headings).map(heading => heading.textContent);
//     array2 = correctArray(array1);
    
//   });

 
}


function correctArray(array1) {
  var element = 'Documentation: Highlighting differences between versions';
  // Find the index of the element to start removing elements
  const indexDocumentation = array1.indexOf(element);
  element = 'Security and bug fixes';

  const indexSecurity = array1.indexOf(element);
  // Splice out the remaining elements
  if(indexDocumentation>-1){
    array1.splice(indexDocumentation,1);
    console.log(array1+" state1");
    array1.splice(indexSecurity);
    console.log(array1+"state2")
  } else {
    array1.splice(indexSecurity+1);
  }
  
  // array1.push('Security and bug fixes');
  return(array1);
}

async function check () {
  const checkboxES = document.getElementById('ES');
  const checkboxEEM = document.getElementById('EEM');
  const checkboxEP = document.getElementById('EP');

  var text = ":announcementmegaphone::eventautomation: The following versions of IBM Event Automation have been published and are available to install or upgrade to: <br>";

  const capabilities = [checkboxES.checked?"es":null,checkboxEEM.checked?"eem":null,checkboxEP.checked?"ep":null];
  console.log(capabilities);
  for(var capability of capabilities){
    if(!capability)continue;
    const [array,firsth2] = await retrieveHeadings("https://ibm.github.io/event-automation/"+capability+"/about/whats-new/");
    console.log(capability+" fetching");
    text += capabilityArray(array,capability,firsth2);
    // console.log(text);
  } 
  const copytext = text.replaceAll("<br>", '\n');
  navigator.clipboard.writeText(copytext);

  text = `<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+text+`</code></pre></div></div>`;
  console.log(text+"here");
  outputarray(text);
  


  // if (checkboxES.checked == true) {
  //  var array2 = await retrieveHeadings("https://ibm.github.io/event-automation/es/about/whats-new/");
  //  if(capabilities.indexOf("es")===-1)capabilities.push("es"); 
  //  capabilityArray(array2,"es");
  // }
  // if (checkboxEEM.checked == true) {
  //   var array2 = await retrieveHeadings("https://ibm.github.io/event-automation/eem/about/whats-new/");
  //   capabilityArray(array2,"eem");
  // }
  // if (checkboxEP.checked == true) {
  //   var array2 = await retrieveHeadings("https://ibm.github.io/event-automation/ep/about/whats-new/");
  //   capabilityArray(array2,"ep");
  // }

  
}

function capabilityArray(array2,capability,firsth2) {
  var text = '';

  if (capability === "es") {
    text+="Event Streams "+firsth2+" - what’s new: <br>";
  }
  if (capability === "eem") {
    text+="Event Endpoint Management "+firsth2+" - what’s new: <br>";
  }
  if (capability === "ep") {
    text+="Event Processing "+firsth2+" - what’s new: <br>";
  }

    for (let i = 0; i < array2.length; i++) {
      text += "* " + array2[i] + "<br>";
      }
  
      if (capability === "es") {
        text+="Find out more: https://ibm.github.io/event-automation/es/about/whats-new/ <br><br>";
      }
      if (capability === "eem") {
        text+="Find out more: https://ibm.github.io/event-automation/eem/about/whats-new/ <br><br>";
      }
      if (capability === "ep") {
        text+="Find out more: https://ibm.github.io/event-automation/ep/about/whats-new/ <br><br>";
      }
      
      return text;

  }

function outputarray(text) {
  document.getElementById("announcetext").innerHTML = "The following text is copied to your <b>clipboard</b>:<br>"+text;
}