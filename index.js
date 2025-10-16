const activityEl = document.getElementById("activity")

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      activityEl.textContent = data.activity
      activityEl.classList.add('fetched')
    })
})