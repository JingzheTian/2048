var matrix = new Array(16);
var checknumber = 0;	
	$("#start").click(
	  function()
	  {
	    /*
	    $.each(matrix,function(key,value)
		  {
		    //window.alert(key+"  "+value);

		    //$("td:eq(key)").text(matrix[key]);
		  });
	    */
	    $.init();
	    $.show(matrix);
	    
	  }
	);
	
	$("#cool").click(
	  function()
	  {
	    
	    for(var i=0;i<16;i++)
	  {
	    matrix[i]=4096;
	  }
	    $.show(matrix);
	    
	  }
	);
	
	$.init=function()
	{
	  
	  for(var i=0;i<16;i++)
	  {
	  matrix[i]="  ";
	  }
	  matrix[14]=2;
	  matrix[15]=2;

	
	}
	
	$.show=function(matrix)
	{
	  var $tds = $("#table").find("td");
	  for(var i=0;i<$tds.length;i++)
	  {
	    $tds.eq(i).text(matrix[i]);
	    if (matrix[i]==8) {
	     $tds.eq(i).css("background","#F2B179"); 
	    }
	    else if (matrix[i]==16) {
	     $tds.eq(i).css("background","#F59563");
	     $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==32) {
	     $tds.eq(i).css("background","#F57C5F");
	     $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==64) {
	     $tds.eq(i).css("background","#F65D3B");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==128) {
	     $tds.eq(i).css("background","#EDCE71");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==256) {
	     $tds.eq(i).css("background","#EDCC61");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==512) {
	     $tds.eq(i).css("background","#ECC850");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==1024) {
	     $tds.eq(i).css("background","#EDC53F");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==2048) {
	     $tds.eq(i).css("background","#EEC22D");
	      $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]==4096) {
	     $tds.eq(i).css("background","#2F2C25");
	     $tds.eq(i).css("color","#F9F2D6");
	    }
	    else if (matrix[i]=="  ") {
	     $tds.eq(i).css("background","#CCC");
	     $tds.eq(i).css("color","#776E65");
	    }
	    else if (matrix[i]==2) {
	     $tds.eq(i).css("background","#CCC");
	     $tds.eq(i).css("color","#776E65");
	    }
	    else if (matrix[i]==4) {
	     $tds.eq(i).css("background","#CCC");
	     $tds.eq(i).css("color","#776E65");
	    }
	    
	  }
	}
	
	$.addnumber=function(number)
	{
          var t=0;
          //alert("Hello");
          for(var t=0;t<5000;t++)
          {
            var i = Math.floor(Math.random()*16);
            //alert(i);
            if (matrix[i] == "  ") {
                matrix[i] = 2;
               break; 
            }
            
          }
          
        
          

	}
	
	$.move=function(direct)
	{
	  //alert(direct);
	  if (direct==1){
	    $.transfer();
	    $.transfer();
	    var m = $.calculate(matrix);
	    $.transfer();
	    $.transfer();
            if (m == 1) {
                $.addnumber(direct);
            }
	    
	    $.show(matrix);
	  }
	  else if(direct==2){
	    $.transfer();
	     var m = $.calculate(matrix);
	    $.transfer();
	    $.transfer();
	    $.transfer();
	    if (m == 1) {
                $.addnumber(direct);
            }
	    $.show(matrix);
	  }
	  else if(direct==3){
	     var m = $.calculate(matrix);
	     if (m == 1) {
                $.addnumber(direct);
            }
	    $.show(matrix);
	  }
	  else if(direct==4){
	    $.transfer();
	    $.transfer();
	    $.transfer();
	     var m = $.calculate(matrix);
	    $.transfer();
	     if (m == 1) {
                $.addnumber(direct);
            }
	    $.show(matrix);
	  }
	}
	
	//calculate the matrix
	$.calculate=function(matrix)
	{
            var m=0;
            var tpm = new Array();
            for(var i=0;i<16;i++)
            {
                tpm[i]=matrix[i];
            }
            
            for(var i=0;i<3;i++)
	    {
	      for(var j=0;j<4;j++)
	      if(matrix[(i+1)*4+j]=="  ")
	      {
		 matrix[(i+1)*4+j] = matrix[i*4+j];
		 matrix[i*4+j] = "  ";

	      }
	    }
            
	    for(var i=3;i>-1;i--)
	    {
	      for(var j=0;j<4;j++)
	      if(matrix[i*4+j]== matrix[(i-1)*4+j])
	      {
		matrix[i*4+j] = matrix[i*4+j]*2;
		matrix[(i-1)*4+j]="  ";
	      }
	    }
	    
	    for (var l=0;l<3;l++) {
	      for(var i=0;i<3;i++)
	    {
	      for(var j=0;j<4;j++)
	      if(matrix[(i+1)*4+j]=="  ")
	      {
		 matrix[(i+1)*4+j] = matrix[i*4+j];
		 matrix[i*4+j] = "  ";

	      }
	    }
	    }
	  
            
             for(var i=0;i<16;i++)
            {
                if (tpm[i]!= matrix[i]) {
                    m=1;
                    break;
                }
                
            }
            
            
            return m;
	}
	
	//response by keyboard
	function keytest(event)
	{
	    switch(event.keyCode)
	    {
	    case 38:
		    //alert("38");
		    $.move(1);
		    //$.show($.transfer());
		    $.check();
		    break;
	    case 39:
		    $.move(2);
		    $.check();
		    break;
	    case 40:
		    //alert("40");
		    $.move(3);
		    $.check();
		    //$.show($.transfer());
		    break;
	    case 37:
		    $.move(4);
		    $.check();
		    break;
            case 46:
                    alert("13");
		    $.cool();
		    break;
				  
	    }
    	}
	
	$.check=function()
	{
	    if(checknumber == 0) {
	      for(var i=0;i<16;i++)
	      {
	      if (matrix[i]=="2048") {
		alert("congraduation!");
		checknumber=1;
	      }
	      }
	    }
	    
	   
	    //alert(tmp);
	}
	
	
	
	//transfer the matrix
        $.transfer=function()
	{

	    var tmp = new Array();
	    var dst=3;
	    for(var i=0;i<4;i++,dst--)
	    {
	      for (var j=0;j<4;j++)
	      {
		tmp[j*4+dst]=matrix[i*4+j];
		//alert((i*4+j)+" "+(j*4+dst));
	      }
	    }
	    
	    for(var i=0;i<16;i++)
	    {
	      matrix[i]=tmp[i];
	    }
	   
	    //alert(tmp);
	}
        
        $.cool=function()
	{
            alert("HELLO");
            matrix[0]="帅";
            matrix[1]="哥";
            matrix[2]="你";
            matrix[3]="吊";
            matrix[4]="爆";
            matrix[5]="了";
            matrix[6]="!";
            matrix[7]="你";
            matrix[8]="家";
            matrix[9]="人";
            matrix[10]="造";
            matrix[11]="么";
            matrix[12]="！";
            matrix[13]="！";
            matrix[14]="!";
            matrix[15]="！";
            $.show(matrix);
            
            
	}