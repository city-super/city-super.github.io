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

        function objectSceneEvent_RE(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/reconstruction/room1';
                        break;
                    case 1:
                        image.src = './static/images/reconstruction/room2';
                        break;
                    case 2:
                        image.src = './static/images/reconstruction/campus';
                        break;
                    case 3:
                        image.src = './static/images/reconstruction/cbd';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_ours_tri.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_2dgs_mesh.jpg';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }


        function objectSceneEvent_Plane(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/planes/room1';
                        break;
                    case 1:
                        image.src = './static/images/planes/room2';
                        break;
                    case 2:
                        image.src = './static/images/planes/campus';
                        break;
                    case 3:
                        image.src = './static/images/planes/cbd';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_ours_plane.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_2dgs_plane.jpg';
                        break;
                    

                }
            }
            

            let scene_list = document.getElementById("object-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

 