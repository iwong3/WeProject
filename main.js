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
		
		if(sessionStorage.getItem('currentUserId') != null){
			var id = sessionStorage.getItem('currentUserId');
			var url = 'https://api.mlab.com/api/1/databases/weproject/collections/users/'+id+'?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
			var type = 'PUT';
		} else {
			var url = 'https://api.mlab.com/api/1/databases/weproject/collections/users?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
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
		var id = $(this).data('id');
		var url = 'https://api.mlab.com/api/1/databases/weproject/collections/users/'+id+'?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
		
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
		var numgroupmembers = $('#numgroupmembers').val();
		var begindate = $('#begindate').val();
		var enddate = $('#enddate').val();
		var categories = $('#categories').val();
		var awards = $('#awards').val();
		var contactmethod = $('#contactmethod').val();
		var members = $('#members').val();
		
		if(sessionStorage.getItem('currentUserId') != null){
			var id = sessionStorage.getItem('currentUserId');
			var url = 'https://api.mlab.com/api/1/databases/weproject/collections/projects/'+id+'?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
			var type = 'PUT';
		} else {
			var url = 'https://api.mlab.com/api/1/databases/weproject/collections/projects?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
			var type = 'POST';
		}
		
		$.ajax({
			url: url,
			data: JSON.stringify({
				"owner": owner,
				"title": title,
				"description": description,
				"numgroupmembers": numgroupmembers,
				"begindate": begindate,
				"enddate": enddate,
				"categories": categories,
				"awards": awards,
				"contactmethod": contactmethod,
				"members": members
			}),
			type: type,
			contentType: "application/json",
			success: function(data){
				window.location.href="projects.html"
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
		$('#numgroupmembers').val($(this).data('numgroupmembers'));
		$('#begindate').val($(this).data('begindate'));
		$('#enddate').val($(this).data('enddate'));
		$('#categories').val($(this).data('categories'));
		$('#awards').val($(this).data('awards'));
		$('#contactmethod').val($(this).data('contactmethod'));
		$('#members').val($(this).data('members'));
	});
	
	//Delete Project
	$('body').on('click', '#deleteProject', function(e){
		e.preventDefault();
		var id = $(this).data('id');
		var url = 'https://api.mlab.com/api/1/databases/weproject/collections/projects/'+id+'?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv';
		
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
		url: "https://api.mlab.com/api/1/databases/weproject/collections/users?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv",
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
			output += '<a id="setUser" href="" data-id="'+data._id.$oid+'" data-username="'+data.username+'" data-password="'+data.password+'" data-firstname="'+data.firstname+'" data-lastname="'+data.lastname+'" data-email="'+data.email+'"  data-occupation="'+data.occupation+'" data-ifinuniversity="'+data.ifinuniversity+'" data-university="'+data.university+'"  data-address="'+data.address+'" data-city="'+data.city+'" data-state="'+data.state+'" data-zip="'+data.zip+'" data-phone="'+data.phone+'" data-projectsposted="'+data.projectsposted+'" data-projectsjoined="'+data.projectsjoined+'">edit</a> | <a id="deleteUser" href="" data-id="'+data._id.$oid+'">delete</a>';
			output += '</div>';
		});
		output += '</div>';
		$('#users').html(output);
	});
}

//Get Projects
function getProjects(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/weproject/collections/projects?apiKey=08PeRHvk8_mwcqYzuQ-4b9_hlV1np-wv",
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data){
			output += '<div class="well">';
			output += '<h3>'+"Owner: "+data.owner+'</h3>';
			output += '<p>'+"Title: "+data.title+'</p>';
			output += '<p>'+"Description: " +data.description+'<p>';
			output += '<p>'+"Number of Group Members: "+data.numgroupmembers+'<p>';
			output += '<p>'+"Begin Date: "+data.begindate+'<p>';
			output += '<p>'+"End Date: "+data.enddate+'<p>';
			output += '<p>'+"Categories: "+data.categories+'<p>';
			output += '<p>'+"Awards: "+data.awards+'<p>';
			output += '<p>'+"Contact Method: "+data.contactmethod+'<p>';
			output += '<p>'+"Members: "+data.members+'<p>';
			output += '<a id="setProject" href="" data-id="'+data._id.$oid+'" data-owner="'+data.owner+'" data-title="'+data.title+'" data-description="'+data.description+'" data-numgroupmembers="'+data.numgroupmembers+'" data-begindate="'+data.begindate+'"  data-enddate="'+data.enddate+'" data-categories="'+data.categories+'" data-awards="'+data.awards+'"  data-contactmethod="'+data.contactmethod+'" data-members="'+data.members+'">edit</a> | <a id="deleteProject" href="" data-id="'+data._id.$oid+'">delete</a>';
			output += '</div>';
		});
		output += '</div>';
		$('#projects').html(output);
	});
}

