    function toggleMenu() {
      const menu = document.getElementById("sideMenu");
      menu.classList.toggle("active");
    }

    function openModal() {
      document.getElementById("accessModal").classList.add("show");
    }

    function closeModal() {
      document.getElementById("accessModal").classList.remove("show");
    }
    function unlockPortal() {
      const input = document.getElementById("password").value;
      if (input === "moonlight") {
        document.getElementById("vip").style.display = "block";
      } else {
        alert("Sacred key not recognized.");
      }
    }

    window.addEventListener('pageshow', function(event) {
      if (event.persisted || window.performance.navigation.type === 2) {
        const form = document.getElementById('bookingForm');
        if (form) {
          form.reset(); // Clears all inputs
        }
      }
    });
    