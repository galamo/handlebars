class Person {
    constructor(_name) {
        this.name = _name;
    }
}

function create() {
    var template = Handlebars.compile(
        "<h1> Hello {{name}} your password is {{password}} </h1>"
    );
    document.body.innerHTML = template({ name: "galamo", password: "1234" });
}

var source = `
        <div style="margin:auto auto;position:relative;width:500px;border:solid 1px black">
        <h1>Student Name: {{studentName}}</h1>
        <h3>User Id: {{studentId}}</h3>
        {{#courses}}
        <h4>Course Name: {{cName}}  Hours: {{hours}} </h4>
        <h5>{{#d}}{{d1}}{{d2}} {{/d}}</h5>
        {{/courses}}
        </div>
        `;

(function() {
    var student = {
        studentName: "gal amouyal",
        studentId: "123345678",
        courses: [
            { cName: "html", hours: "09:00-10:00", d: { d1: "1", d2: "2" } },
            { cName: "css", hours: "11:00-12:00", d: { d1: "1", d2: "2" } },
            { cName: "js", hours: "13:00-15:00", d: { d1: "1", d2: "2" } }
        ]
    };
    var template = Handlebars.compile(source);
    var html = template(student);
    document.getElementById("student-template").innerHTML = html;
})();