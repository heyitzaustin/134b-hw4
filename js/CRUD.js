/**
 * Created by austinli on 11/10/15.
 */

function addHabit(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com/");

    var habitsRef = myFirebaseRef.child("habits");
    var newHabitRef = habitsRef.push();

    // TODO: Fill with habit values to add to firebase
    newHabitRef.set({
        title: "",
        icon: "",
        weeklyfrequency: {
            sun: "",
            mon: "",
            tues: "",
            wed: "",
            thurs: "",
            fri: "",
            sat: ""
        },
        dailyfrequency: ""
    });


}

function listHabits(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: retrieve habits and list them


    habitsRef.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            console.log(childSnapshot.val());
            var newLi = document.createElement('li');
            newLi.id = childSnapshot.key();
            newLi.innerHTML = "<ul class=\"habit-info\">" +
                "<li><div class=\"habit-name\">"+childSnapshot.val().title+"</div></li>" +
                "<li><img class=\"habit-icon\" src=\"../img/"+childSnapshot.val().icon+"\" alt=\"habit icon\"></li> " +
                "</ul> " +
                "<div class=\"message\"> " +
                "<span class=\"message-total\"> " +
                "<strong>2</strong> days in a row! Best Record: <strong>5</strong><br> " +
                "<svg height=\"25\" width=\"150\">"+
                    "<line x1=\"0\" y1=\"0\" x2=\"60\" y2=\"0\" style=\"stroke:rgba(65, 131, 215, 0.8);stroke-width:25\" />"+
                    "<line x1=\"60\" y1=\"0\" x2=\"150\" y2=\"0\" style=\"stroke:rgba(171,171,171,0.6);stroke-width:25\" />"+
                "</svg>"+
                "</span><br> " +
                "<span class=\"message-today\">Completed <strong>1/1</strong> for today!</span>" +
                "</div>"+
                "<div class=\"habit-op\">"+
                    "<button type=\"button\" class=\"op op-done\" onclick=\"showMsg(this);\" title=\"done\">"+
                        "<img src=\"../img/done.svg\" alt=\"Done\">"+
                    "</button>"+
                    "<button type=\"button\" class=\"op op-edit\" onclick=\"goToHabit(this);\" title=\"edit habit\">"+
                        "<img src=\"../img/edit.svg\" alt=\"Edit\">"+
                    "</button>"+
                    "<button type=\"button\" class=\"op op-del\" onclick=\"deleteHabit(this);\" title=\"delete habit\">"+
                        "<img src=\"../img/delete.svg\" alt=\"Del\">"+
                    "</button>"+
                "</div>"+
                "</li>";

            var element = document.getElementById("habit-list");
            element.appendChild(newLi);

        });
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });



}

function removeHabit(key){

    console.log(key);

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: Insert unique ID of habit object here for deletion
    var deleteRef = habitsRef.child(key);

    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };
    deleteRef.remove(onComplete);

}

function goToHabit(element){

    var child = element.parentNode.parentNode;

    window.localStorage.setItem("habitKey", child.id);

    location.href="edit.html";

    console.log(key);
}

function updateHabit(){
    var pkey = window.localStorage.getItem("habitKey");
    console.log(pkey);

    var ptitle = document.getElementById("title-top").value;
    
    var pdaily;
    for(var i=1; i<=3; i++) {
        if(document.getElementById("day" + i).checked == true){
            pdaily = i;
        }
    }

    var pweekly = [];
    for(var i=0; i<7; i++) {
        pweekly[i] = document.getElementById("date" + i).checked;
    }

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");
    var habitsRef = myFirebaseRef.child("habits");
    var updateRef = habitsRef.child(pkey);

    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };

    updateRef.update(
        {
            title: ptitle,
            icon: "",
            weeklyfrequency: {
                sun: pweekly[0],
                mon: pweekly[1],
                tues: pweekly[2],
                wed: pweekly[3],
                thurs: pweekly[4],
                fri: pweekly[5],
                sat: pweekly[6]
            },
            dailyfrequency: pdaily
        }
        ,onComplete);

    location.href="list.html";
}