// Assisted by WCA for GP
// Latest GenAI contribution: granite-20B-code-instruct-v2 model

const submitDropdown = () => {

const dropdown = document.getElementById("capabilityDropdown");
var capabilityName = dropdown.options[dropdown.selectedIndex].value;



const versionNumberInput = document.getElementById('version-number');
capabilityVersion = versionNumberInput.value;

const productUpdates = document.getElementById("productUpdates");
const selectedProduct = productUpdates.options[productUpdates.selectedIndex].value;

const productversionNumberInput = document.getElementById('product-version');
productVersion = productversionNumberInput.value;
capabilityName = capabilityNames(capabilityName);

let copytext = '';
copytext = caseSelector(capabilityVersion,capabilityName,productVersion,selectedProduct);
//copytext = copytext.replace(/\n/g, "<br>");


navigator.clipboard.writeText(copytext);

// let htmlText = '';
document.getElementById("dropdownContainer").innerHTML = `<h3>The following text is copied to your clipboard:</h3><div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+copytext+`</code></pre></div></div>`;

// copytext.split("\n").forEach(x=>{
//   htmlText+=markdownToHTML(x);
//   // htmlText+="<br>";
// })
};

function caseSelector(capabilityVersion,capabilityName,productVersion,selectedProduct) {

let copytext = '';
let capabilityNameforURL = "";
if (capabilityName === "{{site.data.reuse.es_name}}") {
  capabilityNameforURL = "event-streams";
} else if (capabilityName === "{{site.data.reuse.eem_name}}") {
  capabilityNameforURL = "event-endpoint-management";
} else if (capabilityName === "{{site.data.reuse.ep_name}}") {
  capabilityNameforURL = "event-processing";
}

if (selectedProduct === "Apicurio") {
copytext = "### Apicurio version updated to " + productVersion + "\n\n" + "{{site.data.reuse.es_name}} " + capabilityVersion + " includes Apicurio Registry version " + productVersion + " for [managing schemas](../../schemas/overview/#schema-registry). Ensure all applications connecting to your instance of {{site.data.reuse.es_name}} that use the schema registry are using Apicurio client libraries version 2.5.0 or later before [upgrading](../../installing/upgrading/#prerequisites) to {{site.data.reuse.es_name}} "+capabilityVersion+". For more information, see [prerequisites](../../installing/prerequisites#schema-requirements).";
}

else if (selectedProduct === "Flink") {
  copytext = "### Apache Flink updated to "+ productVersion + "\n\n" + "{{site.data.reuse.ibm_flink_operator}} version " + capabilityVersion + " update includes Apache Flink version " + productVersion +  ".";
}

  
else if (selectedProduct === "Kafka") {
  copytext = "### Kafka version upgraded to " + productVersion + "\n\n" + "{{site.data.reuse.es_name}} version " + capabilityVersion + " includes Kafka release " + productVersion + ", and supports the use of all Kafka interfaces.";
  }

else if (selectedProduct === "Kubernetes") {
  copytext = "### Support for Kubernetes " + productVersion + "\n\n" + capabilityName + " version " + capabilityVersion + " introduces [support]({{ 'support/matrix/#" + capabilityNameforURL +"' | relative_url }}) for Kubernetes platforms version " + productVersion + " that support the Red Hat Universal Base Images (UBI) containers.";
  }

else if (selectedProduct === "OpenShift") {
  copytext = "### Support for {{site.data.reuse.openshift}} " + productVersion + "\n\n" + capabilityName + " version " + capabilityVersion + " introduces [support]({{ 'support/matrix/#" + capabilityNameforURL +"' | relative_url }}) for {{site.data.reuse.openshift}} " + productVersion + ".";
  }

else if (selectedProduct === "Security fixes" && capabilityName === "{{site.data.reuse.es_name}}") {
  copytext = "### Security and bug fixes" +  "\n\n {{site.data.reuse.es_name}} release " + capabilityVersion +" contains security and bug fixes."
}

else if (selectedProduct === "Security fixes" && capabilityName === "{{site.data.reuse.eem_name}}") {
  copytext = "### Security and bug fixes" +  "\n\n {{site.data.reuse.eem_name}} release " + capabilityVersion +" contains security and bug fixes."
}

else if (selectedProduct === "Security fixes" && capabilityName === "{{site.data.reuse.ep_name}}") {
  copytext = "### Security and bug fixes" +  "\n\n" + "{{site.data.reuse.ep_name}} release "+ capabilityVersion + " and {{site.data.reuse.ibm_flink_operator}} version " + capabilityVersion + " contain security and bug fixes.";
}

return copytext;
}


// Assisted by WCA for GP
// Latest GenAI contribution: granite-20B-code-instruct-v2 model
function markdownToHTML(markdownText) {
  // Replace each line break with a <br> tag
  let html = markdownText.replace(/(?:\r\n|\r|\n)/g, '<br>');

  // Replace each # heading with a <h1> heading
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Replace each ## heading with a <h2> heading
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');

  // Replace each ### heading with a <h3> heading
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');

  // Replace each *bold* text with a <strong> tag
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Replace each _italic_ text with an <em> tag
 // html = html.replace(/\_(.*?)\_/g, '<em>$1</em>');

  // Replace each [link](url) with a <a href="url">link</a> tag
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Wrap each paragraph with a <p> tag
  // html = html.replace(/<br>\s*<br>/g, '</p><p>');
  // html = `<p>${html}</p>`;

  return html;
}


function capabilityNames(capabilityName) {

if (capabilityName === "ES") {
  capabilityName = "{{site.data.reuse.es_name}}";
} else if (capabilityName === "EEM") {
   capabilityName = "{{site.data.reuse.eem_name}}";
} else if (capabilityName === "EP") {
  capabilityName = "{{site.data.reuse.ep_name}}";
}

return capabilityName;
}


const generateDropdown = () => {

  const productUpdates = document.getElementById("productUpdates");
  const selectedProduct = productUpdates.options[productUpdates.selectedIndex].value;
  var internal_docs = "";
  variableURL = "";
  var public_docs = "";
  var includeConfig = document.getElementById("includeConfig").checked;
  var includeEnhancement = document.getElementById("includeEnhancement").checked;
  const includeNewCollection = textbox.value;

  var configFiles = "";

  if (selectedProduct === "Vignesh") {
    variableURL = "vigneshkumarelumalai";
  }
  else if (selectedProduct === "Deepak") {
    variableURL = "deepakmurty";
  }

  else if (selectedProduct === "Divya") {
    variableURL = "divyanair";
  }

  else if (selectedProduct === "Gabor") {
    variableURL = "gabort";
  }

  if (selectedProduct === "Vignesh" || selectedProduct === "Divya") {
   internal_docs = "/Users/".concat(variableURL,"/Documents/GitHub/event-automation-docs");
    public_docs =  "/Users/".concat(variableURL,"/Documents/GitHub/event-automation");
  }

  else if (selectedProduct === "Gabor" || selectedProduct === "Deepak") {
    internal_docs = "/Users/".concat(variableURL,"/GitHub/event-automation-docs");
     public_docs =  "/Users/".concat(variableURL,"/GitHub/event-automation");
   }

   if (includeConfig) {
    configFiles += " _config.yml";
  }

  if (includeEnhancement) {
    configFiles += " assets _includes _layouts _sass ";
  }

  if (includeNewCollection) {
    configFiles += " " + includeNewCollection + " ";
  }
  

  es_files = "_es_11.5 _es_11.4 _es_11.3 _es_11.2 _es_11.1 _es_11.0 _es_10.5 _es_10.4 _es_10.3 _es_10.2 _es_10.1 "
  
  eem_files = "_eem_11.3 _eem_11.2 _eem_11.1 _eem_11.0 "
  
  ep_files = "_ep_1.2 _ep_1.1 _ep_1.0 "
  
  otherPageFiles = "_pages  _connectors _data _support _tutorials images apiCode videos _landing "

  copytext = "cd " + public_docs + "; rm -rf " + otherPageFiles + configFiles + es_files + eem_files + ep_files +
             ";cd " + internal_docs + "; cp -rf " + otherPageFiles + configFiles + es_files + eem_files + ep_files + public_docs;

    if (selectedProduct === "Michelle") {
    copytext = "cd C:\\eventstreams\\event-automation && del /f /q "+ otherPageFiles + configFiles + es_files + eem_files + ep_files +
               " && cd C:\\eventstreams\\event-automation-docs && robocopy  C:\\eventstreams\\event-automation-docs C:\\eventstreams\\event-automation "+ otherPageFiles + configFiles + es_files + eem_files + ep_files;
    }

    else if (selectedProduct === "Others") {
      copytext = "cd <public-docs-path>; rm -rf "+ otherPageFiles + configFiles + es_files + eem_files + ep_files +
                 "; cd <internal-docs-path>; cp -rf " + otherPageFiles + configFiles + es_files + eem_files + ep_files + "<public-docs-path>";
      }
    


    navigator.clipboard.writeText(copytext);
    document.getElementById("generateContainer").innerHTML= `<h4>The following command is copied to your clipboard to use in the Terminal:</h4><div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+copytext+`</code></pre></div></div>`;

}


const imageSubmit = () => {
    var imageText = "";
    const imageName = document.getElementById('image-name').value;
    const altText = document.getElementById('alt-text').value;

    const fileTypeDropdown = document.getElementById("fileTypeDropdown");
    const fileType = fileTypeDropdown.options[fileTypeDropdown.selectedIndex].value;

    imageText = "!["+altText+"]({{ 'images' | relative_url }}/"+imageName+"."+fileType+" \""+altText+"\")";
    console.log(imageText);

    navigator.clipboard.writeText(imageText);
    document.getElementById("image-container").innerHTML= `<h4>The following command is copied to your clipboard to use in the Terminal:</h4><div class="language-shell highlighter-rouge"><div class="highlight"><pre class="highlight"><code>`+imageText+`</code></pre></div></div>`;

};