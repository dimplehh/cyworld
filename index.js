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
      if(!urlObj.search){
        console.log(urlObj);
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
            <h2>　</h2>
            <hr width="95%" size="1" color="grey">
            <div class= "order" style="text-align:right;margin:0px 30px">
              <br><br>
              <a href="/create">글 작성하기</a>
            </div>
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
      console.log(urlObj);
      if(urlObj.search){
        console.log(urlObj.query);
        fs.readdir('./data','utf8',(err,files)=>{
          if (err) throw err;
          const list = template.getLITag(files);
          fs.readFile(`./data/${urlObj.query.title}.txt`,`utf8`,(err2,data)=>{
            if (err2) throw err2;
            const title = urlObj.query.title;
            res.writeHead(200);
            res.write(template.html1);
            res.end(`          <header>
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
              <div class = "content" style="margin:0px 30px">
                <article>
                <h2>${title}</h2>
                <hr width="99%" size="1" color="grey">
                <p>
                  ${data}
                </p>
                </article>
                <div class= "order" style="text-align:right">
                  <form action="/delete_post" method="post">
                  <input type="hidden" name="title" value="${encodeURIComponent(title)}"><!--title을 새롭게 encoding해서 title이라는 이름으로 deletepost로 던져주기-->
                  <input type="submit" value="삭제">
                  </form>
                  <a href="/update?title=${encodeURIComponent(title)}">수정</a>
                  <br><br>
                  <a href="/create">글 작성하기</a>
                </div>
              </div>
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
    </html>`);
          });
        });
      }
    }else if(pathName === '/photo'){
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
    }else if(pathName === '/delete_post'){
      let body='';
      req.on('data',chunk => body += chunk);
      req.on('end',()=>{
        const post = qs.parse(body);
        console.log(post);
        fs.unlink(decodeURIComponent(`./data/${post.title}.txt`),()=>{
          res.writeHead(302,{Location: '/profile'});
          res.end();
        });
      });
    }else if(pathName ==='/create'){
      fs.readdir('./data','utf8',(err,files)=>{
        if (err) throw err;
        const list = template.getLITag(files);
        res.writeHead(200,{'Content-Type':'text/html'});
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
            <div class = "content" style="margin:0px 30px">
              <article>
              <form action="/create_post" method="post">
              <p>
              <input type="text" id="title" name="title">
              </p>
              <hr width="99%" size="1" color="grey">
              <textarea name="content">
              </textarea>
              <p>
                <input type="submit">
              </p>
              </form>
              </article>
            </div>
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
    }else if(pathName === '/create_post'){
      let body='';
      req.on('data',chunk => body += chunk);
      req.on('end',()=>{
        const post = qs.parse(body);
        const title = post.title;
        const content = post.content;
        fs.writeFile(`./data/${title}.txt`,content,'utf8',()=>{
          res.writeHead(302,{Location:`/profile?title=${encodeURIComponent(title)}`});
          res.end();
        });
      });
    }else if(pathName === '/update'){
      fs.readdir('./data','utf8',(err,files)=>{
        if (err) throw err;
        const list = template.getLITag(files);
        fs.readFile(`./data/${urlObj.query.title}.txt`,'utf8',(err2,data)=>{
          if (err2) throw err2;
          res.writeHead(200,{'Content-Type':'text/html'});
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
            <div class = "content" style="margin:0px 30px">
              <article>
              <form action="/update_post" method="post">
              <p>
              <input type = "hidden" name="original_title" value="${urlObj.query.title}">
              <input type="text" id="title" name="title" value="${urlObj.query.title}">
              </p>
              <hr width="99%" size="1" color="grey">
              <textarea name="content">
                ${data}
              </textarea>
              <p>
                <input type="submit">
              </p>
              </form>
              </article>
            </div>
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
      });
    }else if (pathName === '/update_post') { //pathname이 update_post인 경우
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const post = qs.parse(body);
        const title = post.title;
        const original_title = post.original_title;
        if (title !== original_title) { //새로 update한 타이틀이 기존의 title과 다르다면
          fs.unlink(`./data/${original_title}.txt`, () => { //기존에 있던 링크를 지워줌(unlink)-fs모듈의 일
            //code
          });
        }
        const content = post.content; //content를 새로 업데이트
        fs.writeFile(`./data/${title}.txt`, content, 'utf8', () => { //이부분은 create랑 동일
          res.writeHead(302,{Location: `/profile?title=${encodeURIComponent(title)}`});//넘겨줄때 한글제목은 encodeURIComponent로 넘겨줘야 잘 됨.
          res.end();
        });
      });
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000);