import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
 console.log('yiha we are  live!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

     $('#msg').append('<div class="message">' + data.content + '</div>') 
     $('#message_content')[0].value = ""
     console.log(data)

    // Called when there's incoming data on the websocket for this channel
  }
});

    $(document).on('turbolinks:load', function() {
       
       $('#message_content').on('keydown', function (event) {
    
     if (event.keyCode === 13 ) {
     
       $('input').click()
     console.log('yes we hitted enter!')
     }  
    })

   })

