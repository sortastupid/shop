// Loading page 'icon' function
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.getElementsByTagName(
            "html")[0].style.visibility = "visible";
    } 
};

// Reload window on tab Shop click
// To prevent shopify code to break
$(document).ready(function() {
    $("#tab-1").click(function() {
        location.reload(true);
    });
});
////////////////////////////////////

// 2 column posts layout (min-width: 1024px)
    $(document).ready(function() {
        adjustPostHeights();
    });

    var adjustPostHeights = () => {
        var leftColumnHeight = 0,
            rightColumnHeight = 0,
            $posts = $('.posts .post');
            
            for (var i = 0; i < $posts.length; i++) {
                if (leftColumnHeight > rightColumnHeight) {
                        rightColumnHeight += $posts.eq(i).addClass('right').outerHeight(true);
                    } else {
                        leftColumnHeight += $posts.eq(i).outerHeight(true);
                    }
            }
        return $posts;
    };

// Blog post share options pop-up
const sharePost = id => {
    $("#".concat(id)).find("#popup").toggleClass("show")
}

// Add collection id to anchor tag on shop nav menu
document.addEventListener('DOMContentLoaded', () => {
    var anchors = document.getElementById('shop-nav');
    var collections = document.querySelectorAll(".collections-embed")[0].children;

    for(i = 0; i < (collections.length - 1); i++) {
        var collection = collections[i];
        
        if(i%2 === 0) {
            anchors.children[i/2].setAttribute("href", "#" + collection.id);
        }
    }
});

// Theme Tabs
$(document).ready(function() {
    $('#tabs').tabs();

//  Keep last selected tab checked
//  Useful to open permalinks on journal/blog (same) tab
    $(function($) {
        var index = 'qpsstats-active-tab';
        //  Define friendly data store name
        var dataStore = window.sessionStorage;
        var oldIndex = 0;
        //  Start magic!
        try {
            // getter: Fetch previous value
            oldIndex = dataStore.getItem(index);
        } catch(e) {}
        
        $( "#tabs" ).tabs({
            active: oldIndex,
            activate: function(event, ui) {
                //  Get future value
                var newIndex = ui.newTab.parent().children().index(ui.newTab);
                //  Set future value
                try {
                    dataStore.setItem( index, newIndex );
                } catch(e) {}
            }
        });
    });
});

// 'Back To Top' button
$(document).ready(function() {
    var btn = $('#to-top');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
    });
    
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '400');
    });
});