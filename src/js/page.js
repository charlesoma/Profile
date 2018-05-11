class Page {
    constructor(url) {
      this.url = `views/${url}`;
    }
  
    load() {
      return fetch(this.url)
      .then((resp)=>{ return resp.text() })
      .then((text)=>{ 
        this.html = text;
     })
    }  
  
    show(el) {
      el.innerHTML = this.html;
    }
  }
  
export default Page;