//______________________________object Based Syntax________________________________
const User = {
    _email:'h@hc.com',
    _password:"abc",
    // Here _ notation is used to denote that variables are private property

    // Now I dont want that everyoone can acces them directly. Hence lets define gettors and settors.
    get email(){
        return this._email.toUpperCase()
    }, // get is a speacial keyword which is working on property , of getting value of email from database.
       // Is a special method to overwrite the way value is fetching from data base
       // User just know that it has property of email of have value , so it doesnt matter to user that value is stored in _email or anywwhere else 
       // User will not know that how value is stored in database , as during fetching it can be altered (toUpperCase())
    set email(value){
        this._email=value;
    }

}
// new are constructor functions
// Object can be said as factory functions 
const tea =Object.create(User)
console.log(tea.email);


//____________________________________________IMP_______________________
/* Similarly this concept is used in gettors and settors in Arrays when you want to fetch the length of array .
Their behind the scene gettor is used */

//___________________________________________
// Their is a proposal is ES22 that that # can be used for private variabbles so they cannot be accessed directly.
// Until now we create gettor settor but we can acccess variales with _ without any problem but # will avoid it.


// At last aur acche se samjhna kyu use hote gettor settor , pura clear nhi hai.
