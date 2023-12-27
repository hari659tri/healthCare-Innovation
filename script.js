let index = 0;
        displayImages();
        function displayImages() {
          let i;
          const images = document.getElementsByClassName("image");
          for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
          }
          index++;
          if (index > images.length) {
            index = 1;
          }
          images[index-1].style.display = "block";
          setTimeout(displayImages, 2000); 
        }
         // for bg colour change 
        //  function getRandomColor() {
        //   const letters = '0123456789ABCDEF';
        //   let color = '#';
        //   for (let i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        //   }
        //   return color;
        // }
        // // Function to set a new random background color for the .content element
        // function changeBackgroundColor() {
        //   document.querySelector('.content').style.backgroundColor = getRandomColor();
        // }
      
        // // Change background color every 3 seconds;
        // setInterval(changeBackgroundColor, 3000);