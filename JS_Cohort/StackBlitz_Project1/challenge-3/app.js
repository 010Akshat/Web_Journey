const fields = document.getElementsByClassName("form-group");
const profile=document.getElementsByClassName("profile-info")[0];
console.log(fields.length)
for (let i in fields){
    const child=fields[i].querySelector("input,textarea");
    const profChild=profile.children[i].querySelector('span'); 
    console.log(profChild)
    child.addEventListener('input',()=>{
        profChild.innerText=event.target.value;
    })
}