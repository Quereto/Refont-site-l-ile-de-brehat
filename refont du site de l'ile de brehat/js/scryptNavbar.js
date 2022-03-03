function navbar()
{    
    $(function ()
    {
        
        var hauteur = 570; // valeurs a modifier pour choisir quand la navbar disparait 
        var largeur = 1000;
        
        
            $(window).on('scroll', function ()
            {
                if ($(window).innerWidth() > largeur)
                {
                    if ($(window).scrollTop() > 10)
                    {
                        $('.navbar').addClass('active');
                        $('a.nav-link').removeClass('text-white');
                        $('a.nav-link').addClass('text-black');
                    }

                    if ($(window).scrollTop() < 10)
                    {
                        $('.navbar').removeClass('active');
                        $('a.nav-link').removeClass('text-black');
                        $('a.nav-link').addClass('text-white');
                    }
                    
                    if ($(window).scrollTop() > hauteur)
                    {
                        $('.navbar').hide();
                    }
                    if ($(window).scrollTop() < hauteur)
                    {
                        $('.navbar').show();
                    }
            
                }
                else 
                {

                        $('.navbar').addClass('active');
                        $('a.nav-link').removeClass('text-white'); /* change la couleur de la police */
                        $('a.nav-link').addClass('text-black');
                        
     
                    
                }
           }); 
     

    });
}



  
  