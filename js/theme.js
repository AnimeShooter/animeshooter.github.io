// darkmode
function enableDarkmode(animate)
{
    if(animate)
    {
        document.getElementById("main-logo").style.transitionDuration = "2s";
        document.getElementsByTagName("body")[0].style.transitionDuration = "2s";
        
        let items = document.getElementsByClassName("fancy-box");
        for(let i = 0; i < items.length; i++)
            items[i].style.transitionDuration = "0.25s";
    }
    var head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.id   = "css-dark";
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "/css/dark.css";
    head.appendChild(link);
}
function disableDarkmode()
{
    if(document.getElementById("css-dark"))
    {
        document.getElementById("css-dark").remove();
    }
}

if(localStorage.getItem("darkmode") == "true")
    enableDarkmode(false);
else
{
    enableDarkmode(true);
    localStorage.setItem("darkmode", true)
}