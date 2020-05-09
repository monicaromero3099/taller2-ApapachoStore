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

