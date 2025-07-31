const form = document.getElementById('bookingForm');
    const modal = document.getElementById('thankYouModal');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          form.reset();
          modal.style.display = "flex";
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Submission failed. Please check your internet connection.");
      }
    });

    function closeModal() {
      modal.style.display = "none";
    }