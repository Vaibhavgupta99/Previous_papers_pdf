<!--  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script> -->

 <script src="./assets/js/bootstrap.bundle.min.js"></script>

<!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"></script> -->
 
  <script src="./assets/js/all.min.js"></script>
  
  <script src="./assets/js/main.js"></script>

  <script src="./assets/js/jquery.min.js"></script>

  <script src="./assets/js/typed.min.js"></script>

  <script>

  if ($(".text-slider").length == 1) {
            
            var typed_strings =
                $(".text-slider-items").text();
      
            var typed = new Typed(".text-slider", {
                strings: typed_strings.split(", "),
                typeSpeed: 100,
                loop: true,
                backDelay: 900,
                backSpeed: 50,
            });
        }

      </script>

</body>
</html>