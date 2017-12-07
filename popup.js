var stat = document.getElementById('status');

if (localStorage.getItem('isStreamOnline') === 'false')
{
    stat.innerHTML = "OFFLINE";
    stat.style.color = "red";

} else
{
    stat.innerHTML = "ONLINE";
    stat.style.color = "#00b200";
    if (localStorage.getItem("game") != null)
    {
        document.getElementById("game").innerHTML = "W grze: " + localStorage.getItem("game");
    }
}

