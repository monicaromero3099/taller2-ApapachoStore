var select = document.querySelector('select');
select.addEventListener('change', function(event){
    var url = location.pathname;
    url = url + '?price_lt=' + select.value;
    location.href = url;
    console.log(url);
})


var container = document.querySelector('.filters__container')


container.addEventListener('click', function(){    
container.classList.toggle('filters__container--click');
console.log('creo que se está recargando :(:c');  
} )
