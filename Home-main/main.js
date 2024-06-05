document.addEventListener('DOMContentLoaded', function() {
    console.log("hhh");
    function eateryRedirect(){
        console.log("jjj");
        document.getElementById("searchForm").addEventListener("submit",function(event){
            event.preventDefault();

            var st = document.getElementById("find");
            var sm = st.value.trim().toLowerCase()
            var pages = ["cos","jaggi","lc","g block","aahar"];

            var mp = pages.find(function(page){
                return page.toLowerCase() == sm;
            });

            if(mp){
                st.value="";
                redirect(mp);

            }
            else {
                alert("Enter valid place!");
            }
        

        });

    }
    var anchors = document.getElementsByClassName('re');
    Array.from(anchors).forEach(function(anchor){
        console.log("kkk");
        anchor.addEventListener('click',function(event){
            event.preventDefault();
            console.log("fff");

            const href = this.getAttribute('href');
            if(href){
                const st = href.substring(0, href.lastIndexOf('.'));
                const sm = st.toLowerCase();
                redirect(sm);
            }
        })
    })

    function redirect(sm)
    {
        sessionStorage.setItem("shopName",sm);
        //alert(sm);
        window.location.href = sm + ".html";

    }
    eateryRedirect();
});