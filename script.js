document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll("[data-copy-url]");
  const toast = document.getElementById("copy-toast");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const url = button.getAttribute("data-copy-url");
      if (!url) return;

      try {
        await navigator.clipboard.writeText(url);
        showToast("Link gekopieerd");
      } catch (error) {
        showToast("Kopiëren lukt niet");
      }
    });
  });

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }
});