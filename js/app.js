const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
window.onload = function() {
  const displayStatus = localStorage.getItem("displayStatus");
  
  if (displayStatus === "main2") {
    main2.style.display = "block";
    main1.style.display = "none";
  } else {
    main2.style.display = "none";
    main1.style.display = "block";
  }
}

function elavego() {
  if (main1.style.display === "none" || main1.style.display === "") {
    main1.style.display = "block";
    main2.style.display = "none";

    localStorage.setItem("displayStatus", "main1");
  } else {
    main1.style.display = "none";
    main2.style.display = "block";
    
    localStorage.setItem("displayStatus", "main2");
  }
}

function gerigo() {
  if (main1.style.display === "none" || main1.style.display === "") {
    main1.style.display = "block";
    main2.style.display = "none";

    localStorage.setItem("displayStatus", "main1");
  } 
}
