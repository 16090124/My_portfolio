// <script>
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");

}

// menubar
var sidemen= document.getElementById("sidemenu");
function openmenu(){ 
    sidemen.style.right="0";
    sidemen.style.display="block";
}
function closemenu(){
    sidemen.style.right="-200px";
    sidemen.style.display="none";
}
// </script>


// <!-- google sheet -->
const scriptURL = 'https://script.google.com/macros/s/AKfycby271atd_Sihg9feiJawaEeE79BXXQZvcX6sm44J4pVkWoERQd90WwAsW_n73SUmqZt/exec'
const form = document.forms['submit-to-google-sheet']
const meg=document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
    {
        msg.innerHTML="messeage send successfully"
        setTimeout(function(){   
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})