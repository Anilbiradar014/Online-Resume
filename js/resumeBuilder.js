var bio = {
    "name": "Anil Biradar",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+918553245564",
        "email": "l.anilbiradar@gmail.com",
        "github": "Anilbiradar014",
        "twitter": "@anil33",
        "location": "India"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["C", "C++", "HTML", "CSS", "JavaScipt"],
    "biopic": "images/Optimized-anil.jpg"
};
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedBioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var BioContacts = formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation;

    $("#topContacts").append(BioContacts);
    $("#footerContacts").append(BioContacts);

    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedskills);
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "St.Antony's High School",
        "location": "Udupi",
        "degree": "Primary School",
        "majors": ["S.S.L.C"],
        "dates": 2016,
        "url": ""
    }, {
        "name": "Basaveshwara College of Commerce,Arts & Science",
        "location": "Mysore",
        "degree": "PUC",
        "majors": ["1st PUC", "2nd PUC"],
        "dates": 2012,
        "url": "http://www.basaveshwaracollege.org.in/"
    }, {
        "name": "Dayananda Sagar College of Engineering",
        "location": "Kumaraswamy Layout, Bengaluru",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": 2016,
        "url": "http://dayanandasagar.edu/dsce/"
    }],

    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree Course",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[edu].url);
        $(".education-entry:last").append(formattedSchoolUrl);

    }

    $("#education").append(HTMLonlineClasses);
    for (var oc = 0; oc < education.onlineCourses.length; oc++) {


        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
        $(".online-entry:last").append(formattedonlinetitle);

        var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
        $(".online-entry:last").append(formattedonlineschool);

        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates);
        $(".online-entry:last").append(formattedonlinedates);

        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url);
        $(".online-entry:last").append(formattedonlineurl);

    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "Anil",
        "title": "Associate Software Engineer",
        "location": "Australia",
        "dates": "2014",
        "description": "Playing a key role in the design, installation, testing and maintenance of software systems. The programs we create are likely to help businesses be more efficient and provide a better service."
    }, {
        "employer": "Biradar",
        "title": "Front-End Developer",
        "location": "U.S",
        "dates": " 2016 - Present",
        "description": " A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application.Deliver best-in-class HTML5/CSS3/JQuery front-end code across a broad array of interactive projects.  "
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);




        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        //$("#workExperience").append(HTMLworkLocation);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();


var projects = {
    "projects": [{
        "title": " My Portfolio",
        "dates": "sept 2016",
        "description": "This Portfolio webpage provides other users to navigate to the projects that has been accomplished.",
        "images": ["images/portfolio-front.jpg", "images/portfolio.jpg"],
        "url": "https://anilbiradar014.github.io/portfolio/"
    }, {

        "title": "My Resume",
        "dates": "oct 2016",
        "description": "The resume makes it easy to show employers why you’re perfect for the job.",
        "images": ["images/online_resume.jpg"],
        "url": ""
    }]
};

projects.display = function() {

    for (var pro = 0; pro < projects.projects.length; pro++) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        $(".project-entry:last").append(formattedprojecttitle);

        var formattedprojectdates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        $(".project-entry:last").append(formattedprojectdates);

        var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        $(".project-entry:last").append(formattedprojectdescription);

        var formattedprojecturl = HTMLprojectUrl.replace("%data%", projects.projects[pro].url);
        $(".project-entry:last").append(formattedprojecturl);


        for (var p = 0; p < projects.projects[pro].images.length; p++) {

            var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[p]);
            $(".project-entry:last").append(formattedprojectimage);
        }
    }

};

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
})


$("#mapDiv").append(googleMap);
