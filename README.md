# Strava Bulk Editing

Change the privacy setting of all your activities in Strava.
This is an updated version of [Gabriel K's](https://support.strava.com/hc/en-us/community/posts/208838917-Quick-Edit-list-of-Activities-for-bulk-editing).

To use:

1. Go to [https://www.strava.com/athlete/training](https://www.strava.com/athlete/training)
2. Open Chrome developer tools and enter the following into the console:

> If you want to upgrade bike section, please use "strava-bike-edit.js" file and continue from 3. step.

```javascript
function bulkEdit(privacySetting = 'everyone') {
  for (editButton of document.querySelectorAll('.quick-edit')) {
    editButton.click();
  }
  for (privacyControl of document.querySelectorAll(
    '.form-group .visibility-select select'
  )) {
    privacyControl.value = privacySetting;
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

// Allow everyone to view your activities
bulkEdit();
```

By default this makes all your activities public.

`bulkEdit('everyone')` - allow everyone to view your activities <br />
`bulkEdit('followers_only)` - allow followers to view your activities <br />
`bulkEdit('only_me)` - only allow yourself to view your activities

3. To upgrade Bike section; 
  - Go to [https://www.strava.com/athlete/training](https://www.strava.com/athlete/training)
  - Fristly you must find your bike id. 
    - Open the concole with F12.
    - Click an edit button of anyone activity.
    - Press Ctrl+Shift+C.
    - Select the dropdown of Bike.
    - Expand the element for see bike names and ids.
    - Copy your bike Id from value attribute.
  - Open "strava-bike-edit.js" file from GitHub repository. And copy all code.
  - Don't forget to change first row "function bulkEdit(bikeSetting = 'WRITE-YOUR-BIKE-ID')" in the "strava-bike-edit.js" file.
  - Execute the JS code and wait until to upgrade all records.
  
