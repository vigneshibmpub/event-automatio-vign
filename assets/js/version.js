// Assisted by WCA for GP. Latest GenAI contribution: Version 1, granite-20B-code-instruct-v1 model


function getRandomColor() {
  //blackArray = ["#ff832b", "#f1c21b", "#edf5ff", "#d0e2ff", "#a6c8ff", "#78a9ff", "#4589ff", "#f6f2ff", "#e8daff", "#d4bbff", "#be95ff", "#a56eff", "#e5f6ff", "#bae6ff", "#82cfff", "#33b1ff", "#1192e8", "#d9fbfb", "#9ef0f0", "#3ddbd9", "#08bdba", "#009d9a"];
  whiteArray = ["#6929c4","#9f1853","#198038","#002d9c","#8a3800","#005d5d","#570408","#012749","#007d79","#ba4e00","#8a3ffc","#0f62fe","#001141","#1c0f30","#491d8b","#0072c3","#003a6d","#1c0f30","#081a1c","#004144","#da1e28","#750e13"];
  const index = Math.floor(Math.random() * whiteArray.length);
  return whiteArray[index];
}

var versionHighlighter = "";
var version = "";

const submit = () => {
  const versionNumberInput = document.getElementById('version-number');
  version = versionNumberInput.value;
  const dropdown = document.getElementById("dropdown");
  const selectedValue = dropdown.options[dropdown.selectedIndex].value;
  let copytext = '';
  let whattext = ''
  const earlierVersion = "0.0.1";
  const subtractionResult = subtractVersions(version, earlierVersion);

  if (selectedValue === "ES") {
  //  copytext = `### Documentation: Highlighting differences between versions` + `\n\n`+"Any difference in features or behavior introduced by Event Streams "+${version}+" compared to "11.3.0 or earlier is highlighted in this documentation by using the following graphic:
    copytext = `![Event Streams ${version} icon]({{ 'images' | relative_url }}/${version}.svg "In Event Streams ${version} and later.")`;
    whattext = `### Documentation: Highlighting differences between versions` + `\n\n`+`Any difference in features or behavior introduced by {{site.data.reuse.es_name}} ${version} compared to ${subtractionResult} or earlier is highlighted in this documentation by using the following graphic: `+copytext;

  } else if (selectedValue === "EEM") {
    copytext = `![Event Endpoint Management ${version} icon]({{ 'images' | relative_url }}/${version}.svg "In Event Endpoint Management ${version} and later.")`;
    whattext = `### Documentation: Highlighting differences between versions` + `\n\n`+`Any difference in features or behavior introduced by {{site.data.reuse.eem_name}} ${version} compared to ${subtractionResult} or earlier is highlighted in this documentation by using the following graphic: `+copytext;
  } else if (selectedValue === "EP") {
    copytext = `![Event Processing ${version} icon]({{ 'images' | relative_url }}/${version}.svg "In Event Processing ${version} and later.")`;
    whattext = `### Documentation: Highlighting differences between versions` + `\n\n`+`Any difference in features or behavior introduced by {{site.data.reuse.ep_name}} ${version} compared to ${subtractionResult} or earlier is highlighted in this documentation by using the following graphic: `+copytext;
 
  }
  copytext = copytext.replace(/\n/g, "<br>");
  navigator.clipboard.writeText(copytext);
  copytext = `<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+copytext+`</code></pre></div></div>`;
  document.getElementById("dropdownContainer").innerHTML = "The following text is copied to your <b>clipboard</b>:<br>"+copytext;

  whattext = `<div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+whattext+`</code></pre></div></div>`;
  document.getElementById("whatsnewtext").innerHTML = "Copy the following text and paste it in the relevant <b>What's new</b> section of your capability:\n<br>"+ whattext;


  chosenColor = getRandomColor();
  document.getElementById("submitBtn").style.backgroundColor = chosenColor;
  versionHighlighter = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="`+ (version.length == 5 ? '52' : '64') + `px" height="26px" viewBox="0 0 ` + (version.length == 5 ? '52' : '64') + ` 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch -->
  <title>${version}</title>
  <desc>Created with Sketch.</desc>
  <g id="${version}" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect id="Rectangle" fill="${chosenColor}" x="0" y="0" width="` + (version.length == 5 ? '52' : '60') + `" height="22" rx="11"></rect>
      <text font-family="IBMPlexSans-SemiBold, IBM Plex Sans" font-size="14" font-weight="500" fill="#FFFFFF">
          <tspan x="`+ (version.length == 5 ? '10' : '9') + `" y="16">${version}</tspan>
      </text>
  </g>
  </svg>`;

};
  // Adding earlier versions
  // const versionArray = []

  //   if(versionArray.length == 5) {
  //     versionArray.shift();
  //   }
  //   versionArray.push(version)
  //   versionNumberInput.value = "";
  //   var str = '<ul>'
  //   versionArray.forEach(function(i) {
  //     str += '<li>'+ i + '</li>';
  //   }); 
  // str += '</ul>';
  // document.getElementById("slideContainer").innerHTML = str;


// Assisted by WCA for GP. Latest GenAI contribution: Version 1, granite-20B-code-instruct-v1 model

// function myFunction() {
//   // Get the text field
//   var copyText = copytext;

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);

//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }


function saveTextAsFile() {

  textToWrite = versionHighlighter;
  fileNameToSaveAs = version + ".svg";

  let textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  let downloadLink = document.createElement('a');
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = 'Download File';

  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}


// Assisted by WCA for GP. Latest GenAI contribution: Version 1, granite-20B-code-instruct-v1 model
// | Blue 10       | Blue 20   | Blue 30   | Blue 40   | Blue 50   | Blue 60   | Blue 70   | Blue 80   | Blue 90   | Blue 100   |
// |---------------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|------------|
// | edf5ff        | d0e2ff    | a6c8ff    | 78a9ff    | 4589ff    | 0f62fe    | 0043ce    | 002d9c    | 001d6c    | 001141     | 
// | Purple 10     | Purple 20 | Purple 30 | Purple 40 | Purple 50 | Purple 60 | Purple 70 | Purple 80 | Purple 90 | Purple 100 | 
// | f6f2ff        | e8daff    | d4bbff    | be95ff    | a56eff    | 8a3ffc    | 6929c4    | 491d8b    | 31135e    |            | 
// | e5f6ff        | bae6ff    | 82cfff    | 33b1ff    | 1192e8    | 0072c3    | 00539a    | 003a6d    | 012749    | 1c0f30     | 
// | Teal 10       | Teal 20   | Teal 30   | Teal 40   | Teal 50   | Teal 60   | Teal 70   | Teal 80   | Teal 90   | Teal 100   | 
// | d9fbfb        | 9ef0f0    | 3ddbd9    | 08bdba    | 009d9a    | 007d79    | 005d5d    | 004144    | 022b30    | 081a1c     | 
// | Red 80        | Red 70    | Red 60    | Red 50    | Red 40    | Red 30    | Red 20    | Red 10    | Red 90    | Red 100    |  
// | 750e13        | a2191f    | da1e28    | fa4d56    | ff8389    | ffb3b8    | ffd7d9    | fff1f1    | 570408    | 198038     | 
// | Random colors | Blue 20   | Blue 30   | Blue 40   | Blue 50   | Blue 60   | Blue 70   | Blue 80   | Blue 90   | Blue 100   |
// | 002d9c        | ee538b    | b28600    | 009d9a    | 012749    | 8a3800    | a56eff    | 002d9c    | ee538b    | b28600     |




// document.addEventListener("DOMContentLoaded", function () {



//   function createSVG() {
//     // Create SVG element
//     var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("width", "60");
//     svg.setAttribute("height", "100");
//     var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     circle.setAttribute("cx", "30");
//     circle.setAttribute("cy", "30");
//     circle.setAttribute("r", "20");
//     circle.setAttribute("stroke", "black");
//     circle.setAttribute("stroke-width", "3");
//     circle.setAttribute("fill", chosenColor);
//     svg.appendChild(circle);

//     // Return the created SVG element
//     return svg;
//   }

//   const container = document.getElementById("output");
//   const svgElement = createSVG();
//   container.appendChild(svgElement);



// });
 

function subtractVersions(version1, version2) {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);

  // if (v1.length !== v2.length) {
  //     throw new Error('Versions must have the same number of components');
  // }

  if (v1[v1.length - 1] === 0) {
    alert('The version highlighter is not required for a minor version update.');
    throw new Error('The version highlighter is not required for a minor version update.');
}

  const result = v1.map((num, index) => num - v2[index]);

  return result.join('.');
}
