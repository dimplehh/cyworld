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
      fs.readdir('./data','utf8',(err,files)=>{
        if (err) throw err;
        const list = template.getLITag(files);
        res.writeHead(200);
        res.write(template.html1);
        res.write(`
        <header>
        <a href="/"><h3>Hyunhee's cyworld</h3></a> <!--여기 누르면 홈화면으로 넘어가도록 바꾸기/수정으로 제목 바꾸기-->
      </header>
      <div class="grid">
        <div class = "grid_item first">
          <article>
          <p style="color: rgb(226, 126, 181);font-size:smaller;margin:10px 10px">
          profile
          </p>
          <hr width="95%" size="1" color="grey">
          <div class="list" style="margin:0px 10px">
          <ul>
          ${list}
          </ul>
          </div>
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
      });
    }
    else if(pathName === '/photo'){
        res.writeHead(200);
        res.write(template.html2);
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