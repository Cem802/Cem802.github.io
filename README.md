# Code-challenge

Link to the explanation video: https://drive.google.com/file/d/1B1xsLcEr9tK39P_DENK7txNJxclS8j-Y/view?usp=sharing

## How to set up:
1. Open Chrome Settings.
2. Go to extensions.
3. Enable developer mode.
4. Upload the web-extension files.
5. Pin it for faster access.

## Project Explanation:

Link to the essay: https://docs.google.com/document/d/1ltmBYLM0dXO_rlYKwuHzeiGxUXTl37YdphYiDQZxQFQ/edit?usp=sharing

This extension has the aim to make surfing on the internet safer. You can report links and choose one of the reasons provided.

The reported links are saved on a Google Sheet. I chose Google Sheet as I thougt that it would suffice as Databank for the Challenge. To access the Google Sheet I first tried to code something myself, but couldn't solve the problem. I found a online API Service called Sheetsu, where you upload the link to the Google Sheet and get an API. This returns the Google Sheet as an array in Javascript.

Unfortunately there are still problems with the notification function, but if you open up the popup window you still can see if the link has been reported.
