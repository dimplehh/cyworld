module.exports = {
        html:
        `
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
              margin:10px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.profile {
              margin:50px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.diary {
              margin:90px 745px;
              height: 33px;
              width: 60px;
              border-radius:5px;
              text-align:center;
              }
            .grid_item.photo {
              margin:130px 745px;
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
            a:visited {
              color: #192841;
            }
          </style>
        </head>
        <body>
          <div id="wrap" style="position:relative">
            <div class="card">
        `
}