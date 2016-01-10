jQuery(document).ready(function () {
    PopulateMenuTags();
    PopulateTagPageTags();
});

function PopulateMenuTags() {
    $.get(
        ghost.url.api('tags', {
            limit: '10',
            include: 'count.posts',
            order: 'count.posts DESC'
        })
    ).done(function (data) {
        $(data.tags).each(function(index,item) {
            if(item.count.posts) {
                $('.tag-list').append('<li><a href="/tag/'+ item.name +'">'+ item.name +' (' + item.count.posts + ')'  +'</a></li>');
            }
        });
    });
}

function PopulateTagPageTags() {
    $.get(
        ghost.url.api('tags', {
            limit: 'all',
            include: 'count.posts',
            order: 'count.posts DESC'
        })
    ).done(function (data) {
        $(data.tags).each(function(index,item) {
            $('.tagpage-list').append('<li class="tagpagelist-item"><span class="badge">'+ item.count.posts +'</span><a href="/tag/'+ item.name +'">'+ item.name +'</a></li>');
        });
    });
}
