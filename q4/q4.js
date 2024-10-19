const changeBackground = (element) => {
    const random0To255 = () => Math.floor(Math.random() * 255);
      return () => {
          element.style.backgroundColor = `rgb(
            ${random0To255()},
            ${random0To255()},
            ${random0To255()})`;
           }
     };

setInterval(changeBackground(document.querySelector('body')),3000);