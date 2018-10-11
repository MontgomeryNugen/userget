$().ready(function () {

    var url = "http://localhost:8080/Users/List";

    $.getJSON(url)
        .then(function(users) {
            console.log(users);
            render(users);
        });   
});

function render(users) {
    var tbody = $("#tbody");
    
    tbody.empty();
    for(var user of users) {
        var row = "<tr>";
        row += "<td>" + user.id + "</td>";
        row += "<td>" + user.userName + "</td>";
        row += "<td>" + user.firstName + " " + user.lastName + "</td>";
        row += "</tr>";

        tbody.append(row);
    }

}
