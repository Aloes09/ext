window.onload = function () {

    if (localStorage.getItem('isStreamOnline') === 'false')
    {
        document.getElementById('status').innerHTML = "Brak streama";
        
    } else
        document.getElementById('status').innerHTML = "Izak streamuje !!!";


}
