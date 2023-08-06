<script>
  const reservationForm = document.getElementById("reservation-form");

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    // Customize the confirmation message with the user's selected date and time
    const confirmationMessage = `Thank you for booking a table for ${dateInput} at ${timeInput}. We are looking forward to serving you!`;

    // You can use this alert or send the confirmation message to the server for further processing
    alert(confirmationMessage);

    // Optional: Clear the form after submission
    reservationForm.reset();
  });
</script>
