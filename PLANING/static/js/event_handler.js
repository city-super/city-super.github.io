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
            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function objectSceneEvent_RE_2DGS(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/recon_vs_2dgs/e01b287af5';
                        break;
                    case 1:
                        image.src = './static/images/recon_vs_2dgs/1a8e0d78c0';
                        break;
                    case 2:
                        image.src = './static/images/recon_vs_2dgs/scene0084_00';
                        break;
                    case 3:
                        image.src = './static/images/recon_vs_2dgs/scene0217_00';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_prim_ours.png';
                        break;
                    case 1:
                        image.src = image.src + '_prim_2dgs.png';
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


        function objectSceneEvent_Plane_2DGS(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/plane_vs_2dgs/e01b287af5';
                        break;
                    case 1:
                        image.src = './static/images/plane_vs_2dgs/1a8e0d78c0';
                        break;
                    case 2:
                        image.src = './static/images/plane_vs_2dgs/scene0084_00';
                        break;
                    case 3:
                        image.src = './static/images/plane_vs_2dgs/scene0217_00';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_plane_ours.png';
                        break;
                    case 1:
                        image.src = image.src + '_plane_2dgs.png';
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

        function objectSceneEvent_RE_PlanarSplatting(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/recon_vs_planarsplatting/e01b287af5';
                        break;
                    case 1:
                        image.src = './static/images/recon_vs_planarsplatting/1a8e0d78c0';
                        break;
                    case 2:
                        image.src = './static/images/recon_vs_planarsplatting/scene0084_00';
                        break;
                    case 3:
                        image.src = './static/images/recon_vs_planarsplatting/scene0217_00';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_prim_ours.png';
                        break;
                    case 1:
                        image.src = image.src + '_prim_planarsplatting.png';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon-3").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }


        function objectSceneEvent_Plane_PlanarSplatting(idx) {
            let dics = document.querySelectorAll('.b-dics')[3]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/plane_vs_planarsplatting/e01b287af5';
                        break;
                    case 1:
                        image.src = './static/images/plane_vs_planarsplatting/1a8e0d78c0';
                        break;
                    case 2:
                        image.src = './static/images/plane_vs_planarsplatting/scene0084_00';
                        break;
                    case 3:
                        image.src = './static/images/plane_vs_planarsplatting/scene0217_00';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_plane_ours.png';
                        break;
                    case 1:
                        image.src = image.src + '_plane_planarsplatting.png';
                        break;
                    

                }
            }
            

            let scene_list = document.getElementById("object-scale-recon-4").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        } 