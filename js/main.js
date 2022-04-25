$(document).ready(function ()
{
  $('li').on('click', function()
{
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
})
})


let btn = document.querySelector('.fa-angle-down');

$('.fa-angle-down').click(function()
   {
    $('.more-all').fadeIn(10);
   });

$('.fa-angle-down').click(function()
   {
    $('.see-more').fadeOut(10);
    });

 $('.see-less').click(function()
    {
     $('.more-all').fadeOut(10);
    });
$('.see-less').click(function()
   {
    $('.see-more').fadeIn(10);
   });
