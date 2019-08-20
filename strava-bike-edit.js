function bulkEdit(bikeSetting = 'WRITE-YOUR-BIKE-ID') {
  for (editButton of document.querySelectorAll('.quick-edit')) {
    editButton.click();
  }
  
  setTimeout(function(){
  }, 500); 
  
  for (bike of document.querySelectorAll(
    '.form-group .bike-id'
  )) {
    bike.value = bikeSetting;
  }
  
  for (saveButton of document.querySelectorAll(
    '.edit-actions button[type="submit"]'
  )) {
    saveButton.click();
  }
  const nextButton = document.querySelector('.btn.next_page');
  if (nextButton != null) {
    nextButton.click();
    setTimeout(bulkEdit, 5000);
  }
}

bulkEdit();
