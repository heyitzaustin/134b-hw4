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
                    "<button type=\"button\" class=\"op op-edit\" onclick=\"location.href='edit.html'\" title=\"edit habit\">"+
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

function updateHabit(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: Insert unique ID of updated habit object here
    var updateRef = habitsRef.child("");

    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };

    // TODO: Insert new data here to update the given object
    updateRef.update(
        {
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
        }
        ,onComplete);

}