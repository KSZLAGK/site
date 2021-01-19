
export function main() 
{
  
  
  var h1s = document.getElementsByTagName("h1");
  for (var i = 0; i < h1s.length; i++) 
  {
    var h1 = h1s[i];
    if (h1.innerHTML.indexOf("18-01-21 22:40:14:") !== -1)
    {
      var obj = h1.getElementsByTagName("iframe")[0];
      obj.setAttribute("src", "");
      obj.parentNode.removeChild(obj); 
      h1.innerHTML = h1.innerHTML.replace(/18-01-21 22:40:14:/g, "Karmel's Bot: <i style=\"font-weight:normal\">Message deleted by Karmel's Bot<br>Reason: Autoplay video with rickroll was sent!</i>");
      
    }
    
    if(h1.innerHTML.indexOf(":rickroll:") !== -1) 
    {
    h1.innerHTML = h1.innerHTML.replace(/:rickroll:/g, "<img src=\"https://cdn.discordapp.com/emojis/760500367238365214.gif?v=1\">");
    }
    
    // Form moving with you
  var inputForm = document.getElementById("inputForm");
  if (inputForm.getAttribute("style") !== "background-color:#36393f;font-size:30px;position:fixed;left:0.1%;right: 0.1%;top:0.01%")
  {
    document.getElementById('bottomOfMessages').scrollIntoView();
  inputForm.setAttribute("style", "background-color:#36393f;font-size:30px;position:fixed;left:0.1%;right: 0.1%;top:0.01%");
  document.getElementById('bottomOfMessages').scrollIntoView();
  }
    
  }
}
