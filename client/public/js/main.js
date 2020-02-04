$(() => {
   $(document).on('click', '.cart-link', () => {
       $('.cart').fadeIn()
       $('.cart-list').animate({
           right: '0'
       })
   })

   $(document).on('click', '.close-btn', () => {
        $('.cart').fadeOut()
        $('.cart-list').animate({
            right: '-350px'
        })
    })

})()