$(document).ready(function(){
    $.ajax({
        type: "get",
        async: false,
        url:"my_config.json",
        dataType:"json",
        success: function(urls){
            // console.log(urls);
            let office_array=[];
            let home_array=[];
            for (let url of urls) {
                office_array.push("<li><a href=\"" + url.url_office +"\" target=\"_blank\">\n" +
                    "<img class=\"shake myicon\" src=\"" + url.pic +"\"/><strong>" + url.show_text +"</strong>\n" +
                    "</a></li>")
                home_array.push("<li><a href=\"" + url.url_home +"\" target=\"_blank\">\n" +
                    "<img class=\"shake myicon\" src=\"" + url.pic +"\"/><strong>" + url.show_text +"</strong>\n" +
                    "</a></li>")
            }

            $("#app ul").html(office_array.join("\n"));
            $("#app1 ul").html(home_array.join("\n"));

        },
        error: function(){
            alert('fail');
        }
    });
});