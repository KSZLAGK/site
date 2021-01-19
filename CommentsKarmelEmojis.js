
export function onPageLoad()
{
  document.getElementsByTagName("body")[0].obj.setAttribute("style", "font-family: Verdana; color: #dcddde;background-color: #36393f;font-size: 0.7em;");
}

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
    
    // -- Emoji list --
    if (h1.innerHTML.indexOf("!emotes") !== -1)
    {
    h1.innerHTML = h1.innerHTML.replace(/!emotes/g, "<a style=\"color: #00b0f4;\" href=\"https://kszlagk.github.io/site/CommentsKarmelEmotesList.html\">Lista dostępnych emotek<\/a>");
      h1.title = "!emotes";
    }
    if(h1.innerHTML.indexOf(":rickroll:") !== -1) 
    {
    h1.innerHTML = h1.innerHTML.replace(/:rickroll:/g, "<img src=\"https://cdn.discordapp.com/emojis/760500367238365214.gif?v=1\">");
      h1.title = ":rickroll:";
    }
    if(h1.innerHTML.indexOf(":hepaslimin:") !== -1) 
    {
    h1.innerHTML = h1.innerHTML.replace(/:hepaslimin:/g, "<img src=\"https://cdn.discordapp.com/emojis/659752436906590209.png?v=1\">");
      h1.title = ":hepaslimin:";
    }
    if(h1.innerHTML.indexOf(":mmLol:") !== -1) 
    {
    h1.innerHTML = h1.innerHTML.replace(/:mmLol:/g, "<img src=\"https://cdn.discordapp.com/emojis/585549338051215495.png?v=1\">");
      h1.title = ":mmLol:";
    }
    
  }
    // Form moving with you
  var inputForm = document.getElementById("inputForm");
  if (inputForm.getAttribute("style") !== "background-color:#36393f;font-size:30px;position:fixed;left:0.1%;right: 0.1%;top:0.01%")
  {
   inputForm.innerHTML = inputForm.innerHTML.replace(/Dodaj komentarz:/g, "Napisz na kanale:");
  inputForm.setAttribute("style", "background-color:#36393f;font-size:30px;position:fixed;left:0.1%;right: 0.1%;top:0.01%");
    // -- scroll up --  document.getElementsByTagName('body')[0].innerHTML+= "<hr id=\"bottomOfMessages2\"size=\"2\" width=\"100%\" color=\"#dcddde\">";
    // document.getElementById('bottomOfMessages2').scrollIntoView();
  }
    
  
}
