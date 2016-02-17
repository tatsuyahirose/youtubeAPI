"use strict";

$(function() {
    var $name = $('.site-name'),
        $url = $('.site-url'),
        $desc = $('.site-desc'),
        $pw = $('.site-pw'),
        $id = $('.site-id'),
        val,
        txt,
        num = 0;

    $('.select').on('change', function() {
        if ($(this).val() !== val) {
            $('.site-name, .site-url, .site-description, .site-pw, .site-id').text("");
            val = $(this).val();
            txt = $('.select option:selected').text();
            // console.log( val );
            ajax();
        }
    });

    function ajax() {
        $.ajax({
            type: 'GET',
            url: '/test.json',
            dataType: 'json'
        })
        .done(function(data) {
            for (var i = 0; i < $('option').length-1; i++) {
                num = i;
                if (data[num].siteName === txt) {
                    console.log( num );
                    break;
                }
                console.log( num );
            }
            // console.log( data );
            // console.log( data[num] );
            $name.append( data[num].siteName );
            $url.append( data[num].siteUrl );
            $desc.append( data[num].siteDescription );
            $pw.append( data[num].sitePW );
            $id.append( data[num].siteID );
        })
        .fail(function() {
            console.log("error");
        })
        // .always(function() {
        //     console.log("complete");
        // });
    };
});