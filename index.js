// declaring variables
//event
const unRead = document.querySelector('.p-1');

const numofNotif = document.querySelector('.num-3');
const numPerBox = document.querySelectorAll('.numperbox')   
const actives = document.querySelectorAll('.dot-png');
numofNotif.innerText = numPerBox.length



 
//for per box evnt

numPerBox.forEach((numberPerBox) => {
    numberPerBox.addEventListener('click', function(){
        numberPerBox.classList.remove('numperbox')
        let newNumPerBox = document.querySelectorAll('.numperbox')

        numofNotif.innerText = newNumPerBox.length
        
    

       
    })
    
   
})

//making unread all
unRead.addEventListener('click', () => {
    numPerBox.forEach((numberPerBox) => {
        numberPerBox.classList.remove('numperbox')
        numofNotif.textContent = "0"
    })

    let newNumPerBox = document.querySelectorAll('.numperbox');
    unRead.innerHTML = newNumPerBox
    unRead.textContent = "Mark all as read"
    
    
    
});




