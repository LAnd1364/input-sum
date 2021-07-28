// $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });



      $('.quantity-button').on('click', function() {
        let inputA =  $('.input--a').val();
        let inputB =  $('.input--b').val();
        let dataA =  $('.sum').data('input--a');
        let dataB =  $('.sum').data('input--b');
        let sum = inputA * dataA + ( inputB - 1 ) * dataB * inputA;

        $('.sum').html('$' + sum);
      });
      
      let inputA =  $('.input--a').val();
      let inputB =  $('.input--b').val();
      let dataA =  $('.sum').data('input--a');
      let dataB =  $('.sum').data('input--b');
      let sum = inputA * dataA + ( inputB - 1 ) * dataB * inputA;

      $('.sum').html('$' + sum);

    });
