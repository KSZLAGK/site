
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
      h1.innerHTML = h1.innerHTML.replace(/18-01-21 22:40:14:/g, "Karmel's Bot: <i>Message deleted by Karmel's Bot<br>Reason: Autoplay video with rickroll was sent!<i>");
      
    }
    
    if(h1.innerHTML.indexOf(":rickroll:") !== -1) {
    h1.innerHTML = h1.innerHTML.replace(/:rickroll:/g, "<img src=\"https://cdn.discordapp.com/emojis/760500367238365214.gif?v=1\">");
  }
}
}
