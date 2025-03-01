function sendEmail() {
    var processedEmail = ""
    var processedName = ""
    var processedDate = ""
    var processedTime = ""

    var date = document.getElementById("date").value.split("-")
    var time = document.getElementById("time").value.split(":")

    var month = date[1]; var day = date[2]
    var hour = time[0]; var min = time[1]

    if(!validate()) {
        alert("Required field(s) are empty")
        return
    }

    processedDate = month + "/" + day

    if (hour > 0 && hour <= 12) {
        processedTime = "" + hour;
    } else if (hour > 12) {
        processedTime = "" + (hour - 12);
    } else if (hours == 0) {
        processedTime = "12";
    }
    
    processedTime += ":" + min;
    processedTime += (hour >= 12) ? "PM" : "AM";

    console.log(document.getElementById("date").value)
    console.log(document.getElementById("time").value)
    console.log(processedDate)
    console.log(processedTime)

    if(document.querySelector('input[name="therapist"]:checked').nextElementSibling.firstChild.nextElementSibling.innerHTML == "Jeremy Robinson") {
        processedEmail = "6305243350@vtext.com"
        processedName = "Jeremy"
    } else {
        processedEmail = "3098319337@vtext.com"
        processedName = "Natalie"
    }

    let params = {
        email : processedEmail,
        name : processedName,
        massage : document.querySelector('input[name="massage"]:checked').nextElementSibling.firstChild.nextElementSibling.innerHTML,
        customer : document.getElementById("first_name").value + " " + document.getElementById("last_name").value,
        date : processedDate,
        time : processedTime
    }

    emailjs.send("service_5zq0ltq", "template_wleghe8", params).then(alert("mail sent successfully"))
}

function validate() {
    if(document.getElementById("date").value == "" ||
        document.getElementById("time").value == "" ||
        document.getElementById("first_name").value == "" ||
        document.getElementById("last_name").value == ""
    ) {
        return false
    }
    return true
}