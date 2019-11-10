$("document").ready(function(){
    $("button.book").click(function(event){
       var pSize= $("#size option:selected").val();
       var pName= $("#name option:selected").val();
       var pCrust = $("#crust option:selected").val();
       
       alert(pSize); 

    });
   
});



