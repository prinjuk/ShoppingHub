import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.viewMorePrices .btn-select').click(function() {
      debugger;
      $('.viewMorePrices .btn-select').text('Select');
      $('.viewMorePrices .btn-select').removeClass('active');
      $(this).addClass('active');
      $(this).text('Selected');
      let price = $(this).closest('li').attr('data-price');
      $('#finalPrice').html(price);

    });




    $('#imageGallery').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      thumbItem: 9,
      slideMargin: 0,
      enableDrag: false,
      currentPagerPosition: 'left',
      onSliderLoad(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }
  });
    $('.pricelist').lightSlider({
    gallery: false,
     item: 4,
    loop: false,
    pager: false,

    enableDrag: false,
    currentPagerPosition: 'left',


});
function statusCartButton(ptr) {
  debugger;
  var value = ptr.closest('.showMore').find('.form-count').val();
  // alert(value);
  if (value != 0) {

    ptr.closest('.showMore').find('.descCart').html('<span>' + value + ' in cart </span>');
    ptr.closest('.showMore').find('.cartOption').show();
  } else {
    ptr.closest('.showMore').find('.cartOption').hide();
    ptr.closest('.showMore').find('.btn-cart').show();
  }
}

    $('.viewMorePricesData .btn-select').click(function() {
  debugger;

  $(this).closest('.viewMorePricesData').find('.btn-select').text('Select');
  $(this).closest('.viewMorePricesData').find('.btn-select').removeClass('active');
  $(this).addClass('active');
  $(this).text('Selected');
  debugger;
  let price = $(this).closest('li').attr('data-price');
  $(this).closest('.listProduct > li').find('.updatePrice').html(price);

    });

    $('.btn-cart').click(function() {
      var ptr = $(this);
      if ( $(this).closest('.showMore').find('.cartOption').is(':visible'))
      {
          //add to cart function here
      } else {
        $(this).closest('.showMore').find('.cartOption').show();
        $(this).hide();
        $(this).closest('.showMore').find('.form-count').val(1);
      }
      statusCartButton(ptr);
        });
    $('.hotelMinus').click(function() {
          debugger;
          const ptr = $(this);
          if ($(this).siblings('.form-count').val() < 2 ) {

          $(this).siblings('.form-count').val(0);

        } else {
       let value = $(this).siblings('.form-count').val();
       value--;
       $(this).siblings('.form-count').val(value);
        }
        statusCartButton(ptr);
    });
    $('.hotelPlus').click(function() {
     let value =   $(this).siblings('.form-count').val();
     if (value != 10) {
      value++;
      $(this).siblings('.form-count').val(value);
     }
     const ptr = $(this);   statusCartButton(ptr);
    });
// $('.viewmore').click(function(){
//   debugger;
//   $(this).siblings('.viewMorePricesData').show();


// });

$('.pricelistSug').lightSlider({
  item: 4,
  loop: false,
  slideMove: 2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  auto: false,

  pauseOnHover: true,
  pager: false,
  controls: true,
  enableTouch: true,
  adaptiveHeight: true,


});


  }






}
