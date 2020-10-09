let articles = document.querySelectorAll('.article_items');
let filter=document.querySelector(".list_tags")


filter.onchange = function () {
  for (let article of articles) {
	if(article.dataset.category !== filter.value && filter.value !== 'all')
		{article.classList.add('hidden')
}else {
      article.classList.remove('hidden');
    }
  
}

};

