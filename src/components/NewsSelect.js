const NewsSelector = ({news, onNewsSelected}) => {

    const handleChange = function(evt) {
        const chosenNews = news[evt.target.value];
        onNewsSelected(chosenNews);
    }

    
}