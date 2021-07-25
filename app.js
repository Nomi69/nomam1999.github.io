//  Q 1
var obj = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
   var allTotal = 0;
   for (let i = 0 ; i < obj.length; i++){
       var eachTotal = (obj[i].price) *(obj[i].quantity);
       allTotal += eachTotal ;
       console.log(obj[i].name + "s total price is" +""+ eachTotal);
   }
   console.log("Total price is" + " "+ allTotal)

//    Q 2
var studentInfo=[
          
              {firstName:"Noman",lastName:"Ahmed",email:"nomi@gmail.com",password:"1234",age:"22",gender:"male",city:"karachi",country:"Pakistan"}
              
    ]
    console.log("age exist :"+studentInfo[0].hasOwnProperty("age"));
    console.log("country exist :"+studentInfo[0].hasOwnProperty("country"));
    console.log("First Name :"+studentInfo[0].firstName);
    console.log("last Name :"+studentInfo[0].lastName);

    // Q 3

    function person(name , email , age){
        this.name = name
        this.email = email
        this.age = age
    };
    var person1 = new person("fared" , "fared@.com" ,22);
    var person2 = new person("farooq" , "farooq@.com" ,23);
    var person3 = new person("fazal" , "fazal@.com" ,24);


    console.log(person1);
    console.log(person2);
    console.log(person3);


    // Q 4
    function CheckPopulation(name, gender, address, education, profession) {
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
      }
      
    //   const Peoples = new CheckPopulation(
    //     "Noman",
    //     "Male",
    //     "Maymar",
    //     "Bcom",
    //     "driver"
    //   );
      console.log(Peoples);
      
      //save vales of education
      function educationData() {
        var select = document.getElementById("education");
        localStorage.setItem("save", select.value);
       
                  console.log(select.value)
         
      }
      
      //save values for profession
      function professionPeoples() {
        var profession = document.getElementById("profession");
          profession[localStorage.getItem("save")];
                  console.log(profession.value);
          localStorage.setItem("profession", profession.value);
        
      }
      
      //ave values of radio buttons
      function gender(){
      var radio = document.getElementsByName("gender");
      for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          localStorage.getItem("Male");
          console.log("male")}
          else {
          localStorage.getItem("female");
      
          }
      }
      }

