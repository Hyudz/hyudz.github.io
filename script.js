function Awake() {
    window.alert("Welcome to my website!");
}

function fun1(section){

    document.getElementById("nav1").style.color = "#FFFFFF";
    document.getElementById("nav2").style.color = "#FFFFFF";
    document.getElementById("nav3").style.color = "#FFFFFF";
    document.getElementById("nav4").style.color = "#FFFFFF";
    document.getElementById("nav5").style.color = "#FFFFFF";
    
    if(section=="#home") {
        document.getElementById("nav1").style.color = "#5A2600";
    } else if (section=="#services") {
        document.getElementById("nav2").style.color = "#5A2600";
    } else if (section=="#portfolio") {
        document.getElementById("nav3").style.color = "#5A2600";
    } else if (section=="#aboutMe") {
        document.getElementById("nav4").style.color = "#5A2600";
    } else if (section=="#contact") {
        document.getElementById("nav5").style.color = "#5A2600";
    }
    window.location.href = section;
}