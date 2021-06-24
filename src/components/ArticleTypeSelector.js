const ArticleTypeSelector = ({articles, onTypeSelected}) => {

    const handleChangeType = function(evt) {
        const chosenType = articles[evt.target.value];
        onTypeSelected(chosenType);
    }

    const typeOptions = articles.map((article, index) => {
        return article.type
    })

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const uniqueTypes = typeOptions.filter(unique)

    console.log(uniqueTypes)

    const uniqueOptionTypes = uniqueTypes.map((type, index) => {
        return <option value={index} key={index}>{type}</option>
    })

    return (
        <select defaultValue="" onChange={handleChangeType}>
            <option value="">Choose an Article Type</option>
            {uniqueOptionTypes}
        </select>
    )

}

export default ArticleTypeSelector
