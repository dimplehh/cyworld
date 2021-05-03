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
            <h3>Hyunhee's cyworld</h3> <!--여기 누르면 홈화면으로 넘어가도록 바꾸기/수정으로 제목 바꾸기-->
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
                    <a href="https://github.com/dimplehh"><font color="orange">https://github.com/dimplehh</font></a>
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
              home
            </div>
            <div class="grid_item profile" style="position:absolute">
              profile
            </div>
            <div class="grid_item diary" style="position:absolute">
              diary
            </div>
            <div class="grid_item photo" style="position:absolute">
              photo
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
}).listen(3000);