"use strict";

$(function() {
    var $name = $('.js-site-name'),
        $url = $('.js-site-url'),
        $desc = $('.js-site-description'),
        $pw = $('.js-site-pw'),
        $id = $('.js-site-id'),
        val,
        txt,
        num = 0;

    $('.select').on('change', function() {
        if ($(this).val() !== val) {
            $('.pw-info td').text("");
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
            for (var i = 0; i < $('option').length; i++) {
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
    ajax();
    console.log( window.$.expando );
    console.log( window );
});