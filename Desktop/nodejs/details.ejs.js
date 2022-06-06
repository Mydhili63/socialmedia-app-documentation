const { response } = require("express")

const { resolveInclude } = require("ejs")

<html = en>

    <body>
        <%- include("./partials/nav.ejs") %>
        <div class = "details content">
            <h2> <%- blog.title %> </h2>
            <div class="content"> <p>
                <% blog.body %></p></div>
        </div>
        <a class="delete" data-doc="<%= blog._id 5>">delete</a>
    </div>
    <%- resolveInclude("./partials/footer.ejs") %>

    <script>
        const trashcan = document.queryselector('a.delete');
        trashcan.addEventListener('click',(e) =>{
            fetch(endpoint,{
                method:'DELETE'
            })
            .then((response)=> response.json())
            .then((data) => window.location.href= data.redirect);
            .catch(err => console.log(err));
            })
        })
    </script>
</body>