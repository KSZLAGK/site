export function onChatLoad()
{
  document.getElementsByTagName("body")[0].setAttribute("style", "font-family: Verdana; color: #dcddde;background-color: #36393f;font-size: 0.7em;");
// Load emote list
  var watermark = document.getElementsByTagName("div");
  for (var i = 0; i < watermark.length; i++)
  {
  if (watermark[i].getAttribute("style") == "text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;")
    {
      watermark[i].setAttribute("style", "display: none;");
    }
  }
  
  var h1s = document.getElementsByTagName("h1");
  for (var i = 0; i < h1s.length; i++) 
  {
    var h1 = h1s[i];
    
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
    if(h1.innerHTML.indexOf(":KiritanPout:") !== -1) 
    {
    h1.innerHTML = h1.innerHTML.replace(/:KiritanPout:/g, "<img src=\"https://cdn.discordapp.com/emojis/660871447157407744.png?v=1\">");
      h1.title = ":KiritanPout:";
    }
  }
  if (document.getElementById("scrollToMe") !== null)
  {
  document.getElementById("scrollToMe").scrollIntoView();
  }
   
}

export function mainChat()
{

}

export function onPageLoad()
{
  
  var watermark = document.getElementsByTagName("div");
  for (var i = 0; i < watermark.length; i++)
  {
  if (watermark[i].getAttribute("style") == "text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;")
    {
      watermark[i].setAttribute("style", "display: none;");
    }
  }
  
  // Form moving with you
  // var inputForm = document.getElementById("inputForm");
  // inputForm.innerHTML = inputForm.innerHTML.replace(/Dodaj komentarz:/g, "Napisz na kanale:");
 // inputForm.setAttribute("style", "background-color:#36393f;font-size:30px;position:fixed;left:0.1%;right: 0.1%;top:0.01%");
    // -- scroll up --  document.getElementsByTagName('body')[0].innerHTML+= "<hr id=\"bottomOfMessages2\"size=\"2\" width=\"100%\" color=\"#dcddde\">";
    // document.getElementById('bottomOfMessages2').scrollIntoView();
  
}

export function main() 
{
  
}
