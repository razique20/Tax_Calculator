    // Get the modal
      var modal = document.getElementById("myModal");

      // Get the <span> element that closes the modal
   const span = document.querySelector(".close");
   const close2 = document.querySelector(".close2");

      // When the user clicks the button, calculate tax and open the modal
      document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var grossIncome = parseFloat(document.getElementById("gross-income").value);
        var extraIncome = parseFloat(document.getElementById("extra-income").value);
        var deductions = parseFloat(document.getElementById("deductions").value);
        var ageGroup = document.getElementById("age_group").value;

        // Calculate total income after deductions
        var totalIncome = grossIncome + extraIncome - deductions;

        // Calculate tax based on age group and income
        var tax = 0;
        if (totalIncome > 800000) {
          var taxableAmount = totalIncome - 800000;
          if (ageGroup === "under_18") {
            tax = 0.3 * taxableAmount;
          } else if (ageGroup === "18_to_65") {
            tax = 0.4 * taxableAmount;
          } else if (ageGroup === "over_65") {
            tax = 0.1 * taxableAmount;
          }
        }

        // Display tax in the modal
        var modalContent = document.querySelector(".modal-content");
        modalContent.innerHTML =
          span.outerHTML+"<p><h2>Your overall income will be</h2> " +
          tax.toFixed(2) +
          "<h5>after tax deduction</h5></p>" +
          close2.outerHTML;

        // Show the modal
        modal.style.display = "block";

        
      });


      // When the user clicks on <span> (x) or the close2 button, close the modal
      // Add event listener for closing the modal when <span> (x) is clicked
      

      var body = document.querySelector("body");

      // Add event listener for closing the modal when clicked outside the modal
      window.addEventListener("click", function (event) {
        if (event.target == modal) {
       modal.style.display = "none";
          console.log("modal closed by window");
        }
      });

      // Add event listener for closing the modal when close2 button is clicked
      close2.addEventListener("click", function () {
        modal.style.display = "none";
        console.log("modal closed by button");
      });

      span.addEventListener("click", function () {
        modal.style.display = "none";
        console.log("modal closed by span");
      });
      function closeModal(){
        modal.style.display = "none";
      }
