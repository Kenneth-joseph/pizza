var Order=function(size,crust,topping){
    this.name=name;
    this.size=size;
    this.crust=crust;
    this.topping=topping

    
    Order.prototype.Tprice= function()
    {
    return this.size + this.crust + this.topping
    }
    
}

$("document").ready(function(){
    var total=0;
    $("button.book").click(function(event){
        event.preventDefault();
       var pSize=parseInt($("#size option:selected").val()); 
       var pCrust =parseInt($("#crust option:selected").val()); 
       var pTopping= parseInt($("#topping option:selected").val());
       var nName= $("#nameO").val();
       var nlocation=$("#loc").val();
      

    

    let nOrder = new Order(pSize,pCrust,pTopping);

    let price= (nOrder.Tprice());

    total+=price;

      var Tsize= $("#size option:selected").text();
      var Tcrust= $("#crust option:selected").text();
      var Ttopping= $("#topping option:selected").text();
      var Tname= $("#name option:selected").text();

      $("tbody:last").append("<tr>"+"<td>"+Tname+"</td>"+"<td>"+Tsize+"</td>"+"<td>" +Tcrust+ "</td>" +"<td>"+Ttopping+ "</td>" + "<td>" +price +"</td>"+"</tr>")
      
      alert("thanks " + nName + " for your add and you could make some more if you want, this will be delivered in " + nlocation+ " on time")
    });

    $("button#final").click(function(){
        $("#price:last").text(total);
    })

    $("button#finall").click(function(){
        $(".deliver").show();
    })
     
    $("button#send").click(function(event){
        // var nlocation=$(".location").val();
        // alert(nlocation);
        $("#last").show();
        // alert("thanks " + nName + "we have receieved your order and it will be delivered in time provided " )
    })
  
});



