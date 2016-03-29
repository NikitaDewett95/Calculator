angular.module('starter.controllers', [])


.controller('InputCtrl', function($scope,$state) {
  $scope.calc = function(){
    $state.go("tab.calculation");

  };

    $scope.clicked = function() {
      $('#GO_TO').click(function () {
        $('#GO_TO').hide();
        $state.go("tab.input");
      });
    };


    $scope.clear = function(){

      $('#Main').find('input').each(function () {
        $(this).val('');
      });

      $('#Main').find('textarea').each(function () {
        $(this).val('');
      });
    };

    $(function() {
      $("#wk").click(function () {
        $(this).attr("disabled", "disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      // if you want first button to be disabled when second button is clicked
      $("#bi-wk").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      $("#mo").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");

      });

      $("#qtr").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      $("#yr").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
      });
    });









    })




.controller('CalculationCtrl', function($scope) {


})



.controller('ScheduleCtrl', function($scope) {


})


.controller('GraphCtrl', function($scope) {


  $scope.drawGraph = function() {
    //document.getElementById('chart').style.width='300%';


    //var payment= localStorage.getItem('payment');
    //payment = 'Payment'+payment;
    //payment=payment.split(',');
    //console.log(payment.length);
    //
    //
    //
    //var interest=localStorage.getItem('interest');
    //interest = 'Interest'+interest;
    //interest=interest.split(',');
    //
    //
    //var balance=localStorage.getItem('balance');
    //balance='Balance'+balance;
    //balance=balance.split(',');
    var payment = getValue('payment', 'Payment');
    var interest = getValue('interest', 'Interest');
    var balance = getValue('balance', 'Balance');
    var size = payment.length;
    if(size>100&&size<200){
      document.getElementById('chart').style.width='200%'
    }
    else if (size>200&&size<300){
      document.getElementById('chart').style.width='300%'
    }
    else if (size>300&&size<400){
      document.getElementById('chart').style.width='400%'
    }
    else if (size>400&&size<500){
      document.getElementById('chart').style.width='500%'
    }

    function getValue(storageName, value){
      var data=localStorage.getItem(storageName);
      data=value+data;
      data=data.split(',');
      return data
    }


    chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          payment,
          interest,
          balance
        ]
      }
    });
  }

})




  .controller('SettingsCtrl', function($scope) {
    $(function() {

      $("#none").click(function () {
        $('.add_here').empty();
          localStorage.setItem("currency",' ')
        $(this).attr("disabled", "disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      // if you want first button to be disabled when second button is clicked
      $("#usd").click(function () {
        $('.add_here').empty();
        $('.add_here').append(localStorage.getItem("currency"));
          localStorage.setItem("currency",' $ ')
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      $("#eur").click(function () {
        $('.add_here').empty();
        $('.add_here').append(localStorage.getItem("currency"));
          localStorage.setItem("currency",' € ')
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");

      });

      $("#gbp").click(function () {
        $('.add_here').empty();
        $('.add_here').append(localStorage.getItem("currency"));
          localStorage.setItem("currency",' £ ')
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      $("#yen").click(function () {
        $('.add_here').empty();
        $('.add_here').append(localStorage.getItem("currency"));
          localStorage.setItem("currency",' ¥ ')
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
      });
    });



  })


.controller('SavedCtrl', function($scope) {




  });
