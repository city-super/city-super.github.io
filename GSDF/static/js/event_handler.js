document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/reconstruction/Barn';
                        break;
                    case 1:
                        image.src = './static/images/reconstruction/DrJohnson';
                        break;
                    case 2:
                        image.src = './static/images/reconstruction/Playroom';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_Instantnsr.png';
                        break;
                    case 1:
                        image.src = image.src + '_GSDF.png';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEvent_50(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/reconstruction_50w/Barn';
                        break;
                    case 1:
                        image.src = './static/images/reconstruction_50w/DrJohnson';
                        break;
                    case 2:
                        image.src = './static/images/reconstruction_50w/Playroom';
                        break;
                    
                }
                switch (i) {
                  
                    case 0:
                        image.src = image.src + '_Instantnsr.png';
                        break;
                    case 1:
                        image.src = image.src + '_GSDF.png';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon_50").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }