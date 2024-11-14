
function showCourseDetails(title, description, category, difficulty, price, imageName) {
  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupDescription').textContent = description;
  document.getElementById('popupCategory').textContent = category;
  document.getElementById('popupDifficulty').textContent = difficulty;
  document.getElementById('popupPrice').textContent = price;
  document.getElementById('popupImage').src = '/uploads/' + imageName;
  
  document.getElementById('coursePopup').style.display = 'flex'; // Show popup
}

function closePopup() {
  document.getElementById('coursePopup').style.display = 'none'; // Hide popup
}
function buyNow() {
  if (window.selectedCourseId) {
    window.location.href = '/buy-now/' + window.selectedCourseId;
  }
}
