$(document).ready(function(){
    $('#add').on('click',function(){
        var first=$('#first').val();
        var last=$('#last').val();
        var age=$('#age').val();
        var birth=$('#birth').val();
        $('#lab1').text(first);
        $('#lab2').text(last);
        $('#lab3').text(age);
        $('#lab4').text(birth);

    });
     $('#bg1').on('click',function(){
         $('#div1').css('background-image','url("photo/vistors.jpg")')

     });
     $('#bg2').on('click',function(){
        $('#div1').css('background-image','url("photo/doc.jpg")')

    });
    $('#bg3').on('click',function(){
        $('#div1').css('background-image','url("photo/patient.jpg")')

    });
    $('#bg4').on('click',function(){
        $('#div1').css('background-image','url("photo/Ward.jpeg")')

    });


 } );
