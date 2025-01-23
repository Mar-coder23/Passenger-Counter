let counter = document.querySelector('.counter');
let addPass = document.querySelector('.addBtn');
let deletePass = document.querySelector('.deleteBtn');



addPass.addEventListener('click', () => {
    if(counter.textContent !== '48'){
        counter.textContent++ 
    }
    
    capacity();
});


deletePass.addEventListener('click', () => {
    if(counter.textContent !== '0'){
        counter.textContent--
    }
    
    capacity();
});

function capacity(){
    if(counter.textContent === '48'){
        alert("Reached Capacity. 48 Passengers Max");
        
    }

    
}
capacity();