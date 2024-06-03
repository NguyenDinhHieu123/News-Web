'use strict'
if(userCurrent){

  const newsContainer = document.getElementById("news-container");
  const btnPrevious = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const pageNum = document.getElementById("page-num");
  const apiKey = "f506b23c7be24e1cb00e06d1055fc829";
let totalResults = 0 ;
  


getDataNews("us","2");

// lay dữ liệu từ api
async function getDataNews(country,page){
  try{
          const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${userCurrent.category}&pageSize=${userCurrent.pageSize}&page=${page}&apiKey=${apiKey}`);
          console.log(res);
          const data = await res.json();
          console.log(data);
        
          totalResults = data.totalResults;

          displayNews(data);
        }
        catch(err){
          console.log(err.message);
        }
      };
      
      // hàm biểu diễn các thẻ thông news
      const displayNews = function (data) {
        
        checkbtnNext();
        
        checkbtnPrevious();
        let html = "";
        data.articles.forEach((element) => {
          html += `<div class="card flex-row flex-wrap">
          <div class="card mb-3" style="">
          <div class="row no-gutters">
          <div class="col-md-4">
          <img
          src=${element.urlToImage}
          class="card-img"
          alt=${element.title}
          />
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title">${element.title}
          </h5>
          <p class="card-text">${element.content}</p>
          <a
          href=${element.url}
          class="btn btn-primary"
          >View</a
          >
          </div>
          </div>
          </div>
          </div>
          `;
          newsContainer.innerHTML = html;
        });
      };
      // bắt sự kiện vào nút previous
      btnPrevious.addEventListener('click',function(){
        // hiện thị các news trang trước
        getDataNews("us","sports","5",--pageNum.textContent);
        
        checkbtnPrevious();
        
        checkbtnNext();
        
      });
      // hàm kiểm tra nút previous
      const checkbtnPrevious = function(){
        // Nếu page Num là 1 thì ẩn previous
        if(pageNum.textContent == 1){
            btnPrevious.style.display = "none";
            
        }
        else{
            btnPrevious.style.display = "block";
        }
      }
      // hàm kiểm tra nút next
      const checkbtnNext = function(){
        // nếu pageNum bằng tổng số tin / số tin trên 1 trang làm tròn thì ẩn next
        if(pageNum.textContent == Math.ceil(totalResults/5)){
            
            btnNext.style.display = "none";
            
        }
        else{
            btnNext.style.display = "block";
        }
      }
      // bắt sự kiện vào nút next
      btnNext.addEventListener('click',function(){
        // hiện thị các news trang sau
        getDataNews("us","sports","5",++pageNum.textContent);
        
        checkbtnPrevious();
        
        checkbtnNext();
        
      })
    }
    else{
      alert("Xin hãy đăng nhập !");
      window.location.href = '../index.html';
      
}