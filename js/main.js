//Got this from http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

(function() {
	const config = {
		apiKey: "AIzaSyC7hvQ1qhU4-n01qVPI2vAt3Gs9fqMbBd0",
		authDomain: "testfirebase-1fb45.firebaseapp.com",
		databaseURL: "https://testfirebase-1fb45.firebaseio.com",
		projectId: "testfirebase-1fb45",
		storageBucket: "testfirebase-1fb45.appspot.com",
		messagingSenderId: "79263535882"
	};
	firebase.initializeApp(config);
	
	const loginButton = document.getElementById('loginButton');
	const signOutButton = document.getElementById('signOutButton');
	
	signOutButton.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			loginButton.classList.add('hide');
			signOutButton.classList.remove('hide');
		} else {
			console.log('not logged in');
			loginButton.classList.remove('hide');
			signOutButton.classList.add('hide');
		}
	});
}());

function signIn() {
	
	const inputEmail = document.getElementById('inputEmail');
	const inputPassword = document.getElementById('inputPassword');
	const signInButton = document.getElementById('signInButton');
	const signOutButton = document.getElementById('signOutButton');

	signInButton.addEventListener('click', e => {
		//Get email and pass
		const email = inputEmail.value;
		const pass = inputPassword.value;
		const auth = firebase.auth();
		//Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

}

function signUp() {
	
	const inputEmail = document.getElementById('inputEmail');
	const inputPassword = document.getElementById('inputPassword');
	const signUpButton = document.getElementById('signUpButton');
	
	signUpButton.addEventListener('click', e => {
		//Get email and pass
		const email = inputEmail.value;
		const pass = inputPassword.value;
		const auth = firebase.auth();
		//Sign up
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});
	
}


$(document).ready(function(){
	
	sessionStorage.removeItem('currentUserId');
	
	//Add User
	$('#add-user').on('submit', function(e){
		e.preventDefault();
		
		var username = $('#username').val();
		var password = $('#password').val();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var occupation = $('#occupation').val();
		var ifinuniversity = $('#ifinuniversity').val();
		var university = $('#university').val();
		var address = $('#address').val();
		var city = $('#city').val();
		var state = $('#state').val();
		var zip = $('#zip').val();
		var phone = $('#phone').val();
		var projectsposted = $('#projectsposted').val();
		var projectsjoined = $('#projectsjoined').val();
		
		var url = 'https://testfirebase-1fb45.firebaseio.com/user.json';
		
		if(sessionStorage.getItem('currentUserId') != null){
			var id = sessionStorage.getItem('currentUserId');
			var type = 'PUT';
		} else {
			var type = 'POST';
		}
		
		$.ajax({
			url: url,
			data: JSON.stringify({
				"username": username,
				"password": password,
				"firstname": firstname,
				"lastname": lastname,
				"email": email,
				"occupation": occupation,
				"ifinuniversity": ifinuniversity,
				"university": university,
				"address": address,
				"city": city,
				"state": state,
				"zip": zip,
				"phone": phone,
				"projectsposted": projectsposted,
				"projectsjoined": projectsjoined
			}),
			type: type,
			contentType: "application/json",
			success: function(data){
				window.location.href="users.html"
			},
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	});
	
	//Set User
	$('body').on('click', '#setUser', function(e){
		e.preventDefault();
		sessionStorage.setItem('currentUserId', $(this).data('id'));
		$('#username').val($(this).data('username'));
		$('#password').val($(this).data('password'));
		$('#firstname').val($(this).data('firstname'));
		$('#lastname').val($(this).data('lastname'));
		$('#email').val($(this).data('email'));
		$('#occupation').val($(this).data('occupation'));
		$('#ifinuniversity').val($(this).data('ifinuniversity'));
		$('#university').val($(this).data('university'));
		$('#address').val($(this).data('address'));
		$('#city').val($(this).data('city'));
		$('#state').val($(this).data('state'));
		$('#zip').val($(this).data('zip'));
		$('#phone').val($(this).data('phone'));
		$('#projectsposted').val($(this).data('projectsposted'));
		$('#projectsjoined').val($(this).data('projectsjoined'));
	});
	
	//Delete User
	$('body').on('click', '#deleteUser', function(e){
		e.preventDefault();
		//var id = $(this).data('id');
		var url = 'https://testfirebase-1fb45.firebaseio.com/user.json';
		
		$.ajax({
			url: url, 
			type: 'DELETE',
			async: true,
			timeout: 300000,
			success: function(data){
				window.location.href="users.html"
			},
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	});
	
	//Add Project
	$('#add-project').on('submit', function(e){
		e.preventDefault();
		
		var owner = $('#owner').val();
		var title = $('#title').val();
		var description = $('#description').val();
		var beginDate = $('#beginDate').val();
		var endDate = $('#endDate').val();
		var catagories = $('#catagories').val();
		var award = $('#award').val();
		var requirement = $('#requirement').val();
		var members = $('#members').val();
		
		var url = 'https://testfirebase-1fb45.firebaseio.com/projects.json';
		
		if(sessionStorage.getItem('currentUserId') != null){
			var type = 'PUT';
		} else {
			var type = 'POST';
		}
		
		$.ajax({
			url: url,
			data: JSON.stringify({
				"owner": owner,
				"title": title,
				"description": description,
				"beginDate": beginDate,
				"endDate": endDate,
				"catagories": catagories,
				"award": award,
				"requirement": requirement,
				"members": members
			}),
			type: type,
			contentType: "application/json",
			success: function(data){
				window.location.href=$('#add-project').attr('action') //change this to go to the project page
			},
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	});
	
	//Set Project
	$('body').on('click', '#setProject', function(e){
		e.preventDefault();
		sessionStorage.setItem('currentUserId', $(this).data('id'));
		$('#owner').val($(this).data('owner'));
		$('#title').val($(this).data('title'));
		$('#description').val($(this).data('description'));
		$('#beginDate').val($(this).data('beginDate'));
		$('#endDate').val($(this).data('endDate'));
		$('#catagories').val($(this).data('catagories'));
		$('#award').val($(this).data('award'));
		$('#requirement').val($(this).data('requirement'));
		$('#members').val($(this).data('members'));
	});
	
	//Delete Project
	$('body').on('click', '#deleteProject', function(e){
		e.preventDefault();
		//var id = $(this).data('id');
		var url = 'https://testfirebase-1fb45.firebaseio.com/projects.json';
		
		$.ajax({
			url: url, 
			type: 'DELETE',
			async: true,
			timeout: 300000,
			success: function(data){
				window.location.href="projects.html"
			},
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	});
});

//Get Users
function getUsers(){
	$.ajax({
		url: "https://testfirebase-1fb45.firebaseio.com/user.json"
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data){
			output += '<div class="well">';
			output += '<h3>'+"Username: "+data.username+'</h3>';
			output += '<p>'+"Password: "+data.password+'</p>';
			output += '<p>'+"First Name: " +data.firstname+'<p>';
			output += '<p>'+"Last Name: "+data.lastname+'<p>';
			output += '<p>'+"Email: "+data.email+'<p>';
			output += '<p>'+"Occupation: "+data.occupation+'<p>';
			output += '<p>'+"In University: "+data.ifinuniversity+'<p>';
			output += '<p>'+"University: "+data.university+'<p>';
			output += '<p>'+"Address: "+data.address+'<p>';
			output += '<p>'+"City: "+data.city+'<p>';
			output += '<p>'+"State: "+data.state+'<p>';
			output += '<p>'+"Zip Code: "+data.zip+'<p>';
			output += '<p>'+"Phone: "+data.phone+'<p>';
			output += '<p>'+"Projects Posted: "+data.projectsposted+'<p>';
			output += '<p>'+"Projects Joined: "+data.projectsjoined+'<p>';
			output += '<a id="setUser" href="" data-username="'+data.username+'" data-password="'+data.password+'" data-firstname="'+data.firstname+'" data-lastname="'+data.lastname+'" data-email="'+data.email+'"  data-occupation="'+data.occupation+'" data-ifinuniversity="'+data.ifinuniversity+'" data-university="'+data.university+'"  data-address="'+data.address+'" data-city="'+data.city+'" data-state="'+data.state+'" data-zip="'+data.zip+'" data-phone="'+data.phone+'" data-projectsposted="'+data.projectsposted+'" data-projectsjoined="'+data.projectsjoined+'">edit</a> | <a id="deleteUser" href="">delete</a>';
			output += '</div>';
		});
		output += '</div>';
		$('#users').html(output);
	});
}

//Get Projects
function getProjects(){
	$.ajax({
		url: "https://testfirebase-1fb45.firebaseio.com/projects.json"
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data){
			output += '<div class="well">';
			output += '<h3>'+"Owner: "+data.owner+'</h3>';
			output += '<p>'+"Title: "+data.title+'</p>';
			output += '<p>'+"Description: " +data.description+'<p>';
			output += '<p>'+"Begin Date: "+data.beginDate+'<p>';
			output += '<p>'+"End Date: "+data.endDate+'<p>';
			output += '<p>'+"Catagories: "+data.catagories+'<p>';
			output += '<p>'+"award: "+data.award+'<p>';
			output += '<p>'+"Members: "+data.members+'<p>';
			output += '<a id="setProject" href="" data-owner="'+data.owner+'" data-title="'+data.title+'" data-description="'+data.description+'" data-beginDate="'+data.beginDate+'"  data-endDate="'+data.endDate+'" data-catagories="'+data.catagories+'" data-award="'+data.award+'"  data-requirement="'+data.requirement+'" data-members="'+data.members+'">edit</a> | <a id="deleteProject" href="">delete</a>';
			output += '</div>';
		});
		output += '</div>';
		$('#projects').html(output);
	});
}

//Get Projects By Category
function getProjectsByCategory(category){
	$.ajax({
		url: "https://testfirebase-1fb45.firebaseio.com/categories/"+category+".json",
		type: "get"
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data){
			output += '<div class="row">';
            output += '<div class="col-md-5">';
            output += '<h3>'+data.title+'</h3>';
            output += '<h4>Posted by: '+data.owner+'</h4>';
            output += '<p>'+data.description+'</p>';
            output += '<a class="btn btn-primary" href="'+data.title+'.html">View Project <span class="glyphicon glyphicon-chevron-right"></span></a>'; //change to url with parameter, add ?title=data.title
            output += '</div>';
			output += '</div>';
			output += '<hr>';
		});
		output += '</div>';
		$('#projectsbycategory').html(output);
	});
}

//Get Projects By Name
function getProjectsByName(title){
	$.ajax({
		url: "https://testfirebase-1fb45.firebaseio.com/projects.json",
		data: {
			q: "{title: '" + title + "'}"
		},
		type: "get"
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data){
        output += '<div class="row">';
        output += '<div class="col-lg-12">';
		output += '<h1 class="page-header">'+data.title+'<br><small>Posted By: '+data.owner+'</small></h1>';
        output += '</div>';
        output += '</div>';
        output += '<div class="row">';
        output += '<div class="col-md-8">';
        output += '<img class="img-responsive" src="../img/'+data.title+'.jpg" alt="">';
        output += '</div>';
        output += '<div class="col-md-4">';
        output += '<h3>Project Description</h3>';
        output += '<p>'+data.description+'</p>';
        output += '<h3>Project Details</h3>';
        output += '<ul>';
		output += '<li>Number of Members: '+data.numgroupmembers+'</li>';
		output += '<li>Start Date: '+data.beginDate+'</li>';
		output += '<li>End Date: '+data.endDate+'</li>';
		output += '</ul>';
        output += '</div>';
		output += '</div>';
		});
		output += '</div>';
		$('#projectsbyname').html(output);
	});
}

function getCategoryName(category){
	var output = "";
	if (category === 'cs') {
		output = '<h1 class="page-header">Computer Science';
	} else if (category === 'education') {
		output = '<h1 class="page-header">Education';
	} else if (category === 'arts') {
		output = '<h1 class="page-header">Arts';
	} else if (category === 'business') {
		output = '<h1 class="page-header">Business';
	} else if (category === 'math') {
		output = '<h1 class="page-header">Math';
	}
	output += "<input type='button' class='btn btn-primary pull-right' value='Add Project' onclick='location.href = &quot;addproject.html&quot;;'>"
	output += "</h1>";
	document.getElementById("categoryname").innerHTML = output;
};

function getProjectsByCategoryAndCategoryName(category) {
	getProjectsByCategory(category);
	getCategoryName(category);
}

function createAnAccount() {
	
}