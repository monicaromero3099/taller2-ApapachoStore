var select = document.querySelector('.order__container');
select.addEventListener('change', function(event){
    var url = location.pathname;
    url = url + '?sort=' + select.value;
    location.href = url;
    console.log(url);
});


var container = document.querySelector('.filters__container')
container.addEventListener('click', function(){    
container.classList.toggle('filters__container--click');

});


document.querySelectorAll('.filters a').forEach(function(elem){

    

    /*var newHref = location.search;
    var key = elem.getAttribute('href').match(/\?(.+?)\=/)[1];
    console.log(key)
    var value = elem.getAttribute('href').replace(/^.+\?/, '');
    if(new RegExp(key).test(location.search)){
        newHref = newHref.replace(new RegExp(key + '=.+&?'), value);
        //location.search.replace(/=.+&?/, '')
    } else {
        newHref += '&' + value;
    }*/

    var parts = location.search.replace('?', '').split('&').filter(v => v);
    var key = elem.getAttribute('href').match(/\?(.+?)\=/)[1];
    var value = elem.getAttribute('href').replace(/^.+\?/, '');
    var index = parts.findIndex(function(s) {
        return new RegExp(key).test(location.search);
    });
    if(index >= 0){
        parts.splice(index, 1, value);
    } else{
        parts.push(value);
    }
    var newHref = '?' + parts.join('&');
    elem.setAttribute('href', newHref);
});
