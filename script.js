var Order=function(size,crust,topping){
    this.name=name;
    this.size=size;
    this.crust=crust;
    this.topping=topping
    // this.price=price;
    
    Order.prototype.Tprice= function()
    {
    return this.size + this.crust + this.topping
    }
    
}


$("document").ready(function(){
    $("button.book").click(function(event){
        event.preventDefault()
       var pSize=parseInt($("#size option:selected").val()); 
       var pCrust =parseInt($("#crust option:selected").val()); 
       var pTopping= parseInt($("#topping option:selected").val());

    let nOrder = new Order(pSize,pCrust,pTopping);

    let price= (nOrder.Tprice());
    // alert(price);


      var Tsize= $("#size option:selected").text();
      var Tcrust= $("#crust option:selected").text();
      var Ttopping= $("#topping option:selected").text();
      var Tname= $("#name option:selected").text();

      

    });


   
});



