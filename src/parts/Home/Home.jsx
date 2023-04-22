<!DOCTYPE html>
<html>
  <head>
    <title>AbhiAlest</title>
    <style>

      :root {
        --primary-color: #2196F3;
        --secondary-color: #4CAF50;
        --text-color: #000;
        --background-color: #fff;
      }
      body {
        background-color: var(--background-color);
        color: var(--text-color);
      }
      h1, h2 {
        color: var(--primary-color);
        text-align: center;
      }
	  img {
        display: block;
        margin: auto;
        border: 5px solid var(--secondary-color);
      }
      .toggle-button {
        position: fixed;
        top: 10px;
		left: 10px;
		cursor: pointer;
		height: 50px;
        
      }
	  .toggle-button img {
        width: 50px;
        height: 50px;
		border: none;
      }
      .dark-mode {
        --primary-color: #9C27B0;
        --secondary-color: #FFC107;
        --text-color: #fff;
        --background-color: #222;
      }
	  .dropdown {
        position: fixed;
        top: 10px;
        right: 80px;
      }
      .dropdown button {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 16px;
        margin-top: 8px;
        margin-right: 1px;
      }
      .dropdown button:hover {
        background-color: var(--secondary-color);
      }
      .dropdown-content {
        display: none;
        position: absolute;
        z-index: 1;
      }
      .dropdown-content a {
        color: var(--text-color);
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
      .dropdown-content a:hover {
        background-color: var(--secondary-color);
      }
      .show {
        display: block;
      }
      
    </style>
  </head>
  <body>
    <h1>AbhiAlest</h1>
	<div style="border-top: 10px solid var(--primary-color); margin-top: 20px;"></div>
    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Random Image" style="margin-top: 20px; border: 1px solid black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
    <h2 style="text-align: center;">Hi, I'm AbhiAlest, a front-end developer with over 5 years of programming experience. I enjoy coding websites related to mathematics and biology (especially neuromuscular anatomy). In my free time, I also enjoy tinkering with embedded systems and breaking down old electronics.</h2>
    <div class="toggle-button" onclick="toggleDarkMode()">
		<img src="https://i.pinimg.com/originals/81/ba/c5/81bac554131ddaee50aacaa1f91b105a.png" alt="Toggle Dark Mode">
	</div>
    <div class="dropdown">
      <button onclick="toggleDropdown()">Menu</button>
      <div class="dropdown-content" id="dropdown-content">
        <a href="page1.html">Page 1</a>
        <a href="page2.html">Page 2</a>
        <a href="page3.html">Page 3</a>
      	</div>
	  </div>
	  <script>
      function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
      }
	  function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdown-content");
        dropdownContent.classList.toggle("show");
      }
      window.onclick = function(event) {
        if (!event.target.matches('.dropdown button')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns[i];
            if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
            }
          }
        }
      }
    </script>
  </body>
</html>
