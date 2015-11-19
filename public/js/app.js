'use strict';


$(function(){
  $('#new-artist-btn').click((event) => {
    console.log('New artist button clicked.');
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/artists/new',
      type: 'POST',
      // data: {
      //   name: "Yayoi Kusama",
      //   img_url: "http://whitney.org/image_columns/0038/4330/kusama_in_fireflies_by_jason_schmidt_800_1140.jpg?1369453005",
      //   nationality: "Japanese",
      //   birthYear: 1929,
      //   description: "One cool lady"
      // }
    }).done(function(data){
      console.log(data);
    })
  })
})
