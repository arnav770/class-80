var student_array=[];

function submit(){
    var display_array=[];

    for (var j = 1; j <= 4; j++){
        var names=document.getElementById("student_"+j).value;
        console.log(names);
        student_array.push(names);

    }
    console.log(student_array);
    
    var length=student_array.length;

    for (var k=0;k<length;k++){
        display_array.push("<h4>name- "+ student_array[k] +"</h4>");
        console.log(display_array);

    }
    document.getElementById("dislay_with_comma").innerHTML=display_array;

    var remove_comma=display_array.join("  ");
    document.getElementById("display_without_comma").innerHTML=remove_comma;

     //to hide button submit
     document.getElementById("buttsub").style.display="none";

     //to show button sort
     document.getElementById("buttsort").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_sort=[];

    var length=student_array.length;

    for (var k=0;k<length;k++){
        display_sort.push("<h4>name- "+ student_array[k] +"</h4>");
        console.log(display_sort);

    }
    document.getElementById("dislay_with_comma").innerHTML=display_sort;

    var remove_comma=display_sort.join("  ");
    document.getElementById("display_without_comma").innerHTML=remove_comma;

}
