
function showNav() {
$('#topnav').html(
`
<ul>
	<li class="resources_link"><a href="resources.html">RESOURCES</a></li>
	<li class="favorite_foods_link"><a href="#">STUFF</a></li>
	<li class="apple_link"><a href="#">OTHER STUFF</a></li>
</ul>
`
);
}


function initialize() {
	showNav();
	addActiveClass();	
}

$(initialize());


