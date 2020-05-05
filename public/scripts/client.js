var select = document.querySelector('select');
select.addEventListener('change', function(event){
    var url = location.pathname;
    url = url + '?price_lt=' + select.value;
    location.href = url;
    console.log(url);
})