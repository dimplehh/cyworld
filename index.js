const http=require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const template = require('./template');

http.createServer((req,res)=>{
    const urlObj = url.parse(req.url,true);
    const pathName = urlObj.pathname;
    if(pathName === '/'){
        if(!urlObj.search){
            res.writeHead(200);
            res.write(template.html);
            res.write(`
            <header>
            <a href="/"><h3>Hyunhee's cyworld</h3></a> <!--여기 누르면 홈화면으로 넘어가도록 바꾸기/수정으로 제목 바꾸기-->
          </header>
          <div class="grid">
            <div class = "grid_item first">
              <article>
                <img src="https://cdn.pixabay.com/photo/2021/04/29/07/43/boy-6215790_960_720.jpg">
                <p>  ㅤ</p><p>  ㅤ</p>
                <p id="name" style="color:blue;font-weight:bold;font-size:smaller;margin:0px 5px">
                  이현희
                </p>
                <p id="email" style="color: orange;font-size:smaller;margin:10px 5px">
                    <a href="https://github.com/dimplehh" target="_blank"><font color="orange">https://github.com/dimplehh</font></a>
                </p>
              </article>
            </div>
            <div class = "grid_item two" style="overflow-y:scroll">
              <article>
                <p style="color: rgb(226, 126, 181);font-size:smaller;margin:10px 40px">
                  myroom
                </p>
                <img src="https://t1.daumcdn.net/cfile/tistory/990D3F4B5BBEF5CB02" 
                style="width:90%;max-width:430px; margin:20px 40px"/> 
                <p style="margin:30px 30px">은서:하이</p><p style="margin:30px 30px">혀니:하이</p>
                <p style="margin:30px 30px">나현이:하이</p><p style="margin:30px 30px">하영이:하이</p>
              </article>
            </div>
            <div class="grid_item home" style="position:absolute">
            <a href="/"><font color="black">home</font></a>
            </div>
            <div class="grid_item profile" style="position:absolute">
              <a href="/profile"><font color="white">profile</font></a>
            </div>
            <div class="grid_item photo" style="position:absolute">
              <a href="/photo"><font color="white">photo</font></a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
            `);
            res.end();
        }
    }
    else if(pathName === '/profile'){
        res.writeHead(200);
        res.write(`
        <!DOCTYPE html>
        <html lang="ko"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hyunhee's cyworld</title>
          <style>
            @charset "utf-8";
            @font-face {
              font-family: 'MapoFlowerIsland';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
            * {
              box-sizing: border-box;
              font-family: 'MapoFlowerIsland';
            }
            html,
            body {
              margin: 0;
              padding: 0;
            }
            #wrap {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: left;
              width: 1000px;
              max-width: 1000px;
              min-height: 600px;
              background-color: #8f8f91;
              background-image:  linear-gradient(#676768 1.1px, transparent 1.1px), linear-gradient(to right, #676768 1.1px, #8f8f91 1.1px);
              background-size: 22px 22px;
            }
            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 30px;
                height: 480px;
                width: 800px;
                border-radius: 25px;
                background: #eee;
                padding: 1px 20px;
            }
            .grid{
              overflow:hidden;
            }
            .grid_item{
              background:#fff;
              float:left;
              width:100px;
              height:100px;
            }
            .grid_item.first {
              background-color: #fff;
              margin: 5px 0px;
              height: 395px;
              width: 200px;
              border-radius:25px;
              }
            .grid_item.two {
              background-color: #fff;
              margin:5px 15px;
              height: 395px;
              width: 530px;
              border-radius:25px;
              }
            .grid_item.home {
              background-color: #000;
              font-color:#000;
              margin:10px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.profile {
              background-color: #fff;
              font-color:#fff;
              margin:50px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.photo {
              background-color: #000;
              font-color:#fff;
              margin:90px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            article {
              width: 100%;
              text-align: left;
            }
            article>img {
              display: block;
              max-width: 70%;
              margin: 20px 30px;
              transition: all .3s;
            }
            ul {
              margin: 30px 0;
              padding: 0;
              list-style-type: none;
            }
            ul>li {
              font-size: 1.2rem;
              padding: 5px 0;
            }
            a {
              text-decoration: none;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div id="wrap" style="position:relative">
            <div class="card">
        `);
        res.write(`
        <header>
        <a href="/"><h3>Hyunhee's cyworld</h3></a> <!--여기 누르면 홈화면으로 넘어가도록 바꾸기/수정으로 제목 바꾸기-->
      </header>
      <div class="grid">
        <div class = "grid_item first">
          <article>
          </article>
        </div>
        <div class = "grid_item two" style="overflow-y:scroll">
          <article>
          </article>
        </div>
        <div class="grid_item home" style="position:absolute">
        <a href="/"><font color="white">home</font></a>
        </div>
        <div class="grid_item profile" style="position:absolute">
          <a href="/profile"><font color="black">profile</font></a>
        </div>
        <div class="grid_item photo" style="position:absolute">
          <a href="/photo"><font color="white">photo</font></a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
        `);
        res.end();
    }
    else if(pathName === '/photo'){
        res.writeHead(200);
        res.write(`
        <!DOCTYPE html>
        <html lang="ko"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hyunhee's cyworld</title>
          <style>
            @charset "utf-8";
            @font-face {
              font-family: 'MapoFlowerIsland';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
            * {
              box-sizing: border-box;
              font-family: 'MapoFlowerIsland';
            }
            html,
            body {
              margin: 0;
              padding: 0;
            }
            #wrap {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: left;
              width: 1000px;
              max-width: 1000px;
              min-height: 600px;
              background-color: #8f8f91;
              background-image:  linear-gradient(#676768 1.1px, transparent 1.1px), linear-gradient(to right, #676768 1.1px, #8f8f91 1.1px);
              background-size: 22px 22px;
            }
            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 30px;
                height: 480px;
                width: 800px;
                border-radius: 25px;
                background: #eee;
                padding: 1px 20px;
            }
            .grid{
              overflow:hidden;
            }
            .grid_item{
              background:#fff;
              float:left;
              width:100px;
              height:100px;
            }
            .grid_item.first {
              background-color: #fff;
              margin: 5px 0px;
              height: 395px;
              width: 200px;
              border-radius:25px;
              }
            .grid_item.two {
              background-color: #fff;
              margin:5px 15px;
              height: 395px;
              width: 530px;
              border-radius:25px;
              }
            .grid_item.home {
              background-color: #000;
              font-color:#000;
              margin:10px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.profile {
              background-color: #000;
              font-color:#fff;
              margin:50px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.photo {
              background-color: #fff;
              font-color:#fff;
              margin:90px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            article {
              width: 100%;
              text-align: left;
            }
            article>img {
              display: block;
              max-width: 70%;
              margin: 20px 30px;
              transition: all .3s;
            }
            ul {
              margin: 30px 0;
              padding: 0;
              list-style-type: none;
            }
            ul>li {
              font-size: 1.2rem;
              padding: 5px 0;
            }
            a {
              text-decoration: none;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div id="wrap" style="position:relative">
            <div class="card">
        `);
        res.write(`
        <header>
        <a href="/"><h3>Hyunhee's cyworld</h3></a> <!--여기 누르면 홈화면으로 넘어가도록 바꾸기/수정으로 제목 바꾸기-->
      </header>
      <div class="grid">
        <div class = "grid_item first">
          <article>
          </article>
        </div>
        <div class = "grid_item two" style="overflow-y:scroll">
          <article>
          </article>
        </div>
        <div class="grid_item home" style="position:absolute">
        <a href="/"><font color="white">home</font></a>
        </div>
        <div class="grid_item profile" style="position:absolute">
          <a href="/profile"><font color="white">profile</font></a>
        </div>
        <div class="grid_item photo" style="position:absolute">
            <a href="/photo"><font color="black">photo</font></a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
        `);
        res.end();
    }
    else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000);