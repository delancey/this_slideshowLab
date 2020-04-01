/*## Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
 4. logs the current photo name.
 5. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.*/



var slideshow = {
	photolist: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'], //1
	currentPhotoIndex: 0,  //2
	nextphoto: function(){ //3
		//moves currentphotoindex to the next photo if there is one
		//logs current photo name or end of slideshow

		if (this.currentPhotoIndex < this.photolist.length)
		{			
			console.log(this.photolist[this.currentPhotoIndex]);
			this.currentPhotoIndex++;		
		} else 
			this.pause();
		
	},

	prevPhoto: function(){ //4
		if (this.currentPhotoIndex > 0)
		{			
			this.currentPhotoIndex--;
			console.log(this.photolist[this.currentPhotoIndex]);
		} else 
			return console.log("beginning of slideshow");
	},

	getCurrentPhoto: function(){ //5
		//returns current photo from list
		console.log(this.photolist[this.currentPhotoIndex]);
	},
	playInterval: null,

	play: function()
		{
		this.playInterval = setInterval(function() {slideshow.nextphoto()},2000)
		},

		
	pause: function()
	{
		clearInterval(this.playInterval);
		console.log("paused")
	}

	

} //slideshow end




// slideshow.getCurrentPhoto();
slideshow.play();




/* slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
 */